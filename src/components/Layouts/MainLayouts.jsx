import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToastContainer position="bottom-center" theme="dark" />
    </div>
  );
};

export default MainLayouts;
