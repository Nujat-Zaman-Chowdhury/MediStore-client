import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;