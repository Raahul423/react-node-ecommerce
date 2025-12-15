import Header from "../Components/Header/Header";
import Footer from "../Components/FooterComponent/Footer";
import {Outlet } from "react-router-dom";
import ScrollComponent from "../../Common/ScrollComponent";



const Layout = () => {

  return (
    <>
      <Header />
      <ScrollComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
