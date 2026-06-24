import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const LoginPage = () => {
    const { user, signInWithEmail } = useAuth();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await signInWithEmail(email, password);
        } catch (error) {
            if (error instanceof Error) {
                setError(error?.message);
            } else {
                setError("An unexpected error occured");
            }
        }

        console.log(user);
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="bg-neutral-700 p-8">
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="email@org.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>

                    {error && <div>{error}</div>}

                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};
