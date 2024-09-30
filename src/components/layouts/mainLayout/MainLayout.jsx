import { Outlet } from "react-router-dom";
import App from "../../../App";
import Navbar from "../../shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black min-h-screen w-full pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
