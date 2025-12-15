import Header from "../Components/Header/Header";
import Footer from "../Components/FooterComponent/Footer";
import ScrollComponent from "../Components/ScrolltoTop/ScrollComponent";
import { Navigate, Outlet } from "react-router-dom";
import { MyContext } from "../../Provider";

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
