import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { Overview } from "./pages/Overview";
import DashboardLayout from "./layout/DashboardLayout";
import { Logs } from "./pages/Logs";
import { NotFound } from "./pages/NotFound";
import { Parts } from "./pages/Parts";
import { Users } from "./pages/Users";
import { Quality } from "./pages/Quality";

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route element={<DashboardLayout />}>
                    <Route index element={<Overview />} />
                    <Route path="/logs" element={<Logs />} />
                    <Route path="/quality" element={<Quality />} />
                    <Route path="/parts" element={<Parts />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
