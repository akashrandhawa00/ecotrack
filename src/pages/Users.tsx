import { useAuth } from "../context/AuthContext";

export const Users = () => {
    const { session } = useAuth();

    return (
        <div>
            <h1 className="text-white">Users</h1>
            <h2>se</h2>
        </div>
    );
};
