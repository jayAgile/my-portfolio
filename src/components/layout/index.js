import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import css from "../../../src/scss/app.module.scss";
import Hero from "./hero";
const Header = lazy(() => import("./header"));
const Footer = lazy(() => import("./footer"));

const Layout = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
