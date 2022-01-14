import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Widgets/Header"
import Footer from "../Components/Widgets/Footer"
import Socials from "../Components/Presentational/Socials";
import ScrollToTop from "../Components/Presentational/ScrollToTopButton";
const Layout = ({ children }) => {
  const scroll = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
    <Header/>
      <main>{children}</main>
    <Socials/>
    <Footer/>
    <ScrollToTop scrollToTop={scroll}/>
    </>
  );
};
const LayoutRoute = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
export default LayoutRoute;
