import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Users/Components/Header/Header";
import Footer from "./Users/Components/FooterComponent/Footer";
import ScrollComponent from "./Users/Components/ScrolltoTop/ScrollComponent";

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
