
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <div className="layout px-10 md:px-20 lg:px-32">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}


export default Layout