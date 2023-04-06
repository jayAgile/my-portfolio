import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import css from "../../../src/scss/app.module.scss";
const Header = lazy(() => import("./header"));
const Footer = lazy(() => import("./footer"));

const Layout = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
