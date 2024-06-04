import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-68px)] py-10">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
