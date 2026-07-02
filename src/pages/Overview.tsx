import PageHeader from "../components/ui/PageHeader";
import UnderConstructionGIF from "../components/ui/UnderConstrucion";
import { useAuth } from "../context/AuthContext";

export const Overview = () => {
    const { profile } = useAuth();

    return (
        <div className="md:px-10 px-6 py-8">
            <PageHeader title="Overview" addRunButton={true}/>
            <h3>Hi, {profile?.full_name}</h3>

            <UnderConstructionGIF />
        </div>
    );
};
