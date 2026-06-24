import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { LoginPage } from "./pages/LoginPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Overview />} />
        </Routes>
    );
}

const App = () => {
    return <AppRoutes />;
};

export default App;
