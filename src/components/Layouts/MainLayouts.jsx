import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;