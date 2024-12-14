import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

function MainLayout() {
  return (
    <div className="font-lato">
      <ScrollRestoration />
      <Navbar />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
