import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="2xl:w-10/12 mx-auto">
      <Navbar></Navbar>
      <div className="my-6">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default Root;
