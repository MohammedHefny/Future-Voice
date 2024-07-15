import React from "react";
import MainNavBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
