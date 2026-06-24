import type { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase-client";

interface AuthContextType {
    user: User | null;
    signInWithEmail: (email: string, password: string) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_, session) => {
                setUser(session?.user ?? null);
            },
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const signInWithEmail = async (email: string, password: string) => {
        const { data, error: signInError } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        console.log("data:", data);
        console.log("error:", signInError);

        if (signInError) throw new Error(signInError.message);

        setUser(data.user ?? null);
    };

    const signOut = () => {
        supabase.auth.signOut();
    };

    const value = { user, signInWithEmail, signOut };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within the AuthProvider");
    }
    return context;
};
