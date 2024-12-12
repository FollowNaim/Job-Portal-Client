import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="font-lato">
      <Navbar />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
