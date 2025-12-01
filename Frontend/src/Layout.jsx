import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/FooterComponent/Footer";
import ScrollComponent from "./Components/ScrolltoTop/ScrollComponent";

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
