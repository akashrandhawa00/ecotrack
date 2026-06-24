export const Sidebar = () => {
    return (
        <aside className="text-white w-64 min-h-screen absolute border-r  border-r-white/20 flex flex-col  gap-1, px-4, py-7 bg-neutral-950 pl-3.5">
            <div>
                <div className="font-medium text-xl uppercase font-mono">
                    EcoTrack
                </div>

                <div className="text-neutral-400">Select Finishing</div>
            </div>

            <div>
                <div>
                    <ul>
                        <li>Overview</li>
                        <li>Logs</li>
                        <li>Quality</li>
                        <li>Users</li>
                    </ul>
                </div>
            </div>
            <div className="flex-1"></div>
            <div> -- Username -- </div>
        </aside>
    );
};
