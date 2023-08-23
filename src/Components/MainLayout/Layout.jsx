import React from "react";
import Header from "./Header";
import "./Header.css";
import Footer from "./Footer";
import "./Footer.css";
import "../../App.css";

function Layout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
