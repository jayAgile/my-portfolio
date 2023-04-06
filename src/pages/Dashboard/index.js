import React, { useEffect } from "react";
import "./dashboard.scss";
import Hero from "../../components/layout/hero";
import Expertise from "../../components/Expertise/Expertise";
import Works from "../../components/Works/works";
import Portfolio from "../../components/Portfolio/Portfolio";
import People from "../../components/People/People";

const Dashboard = () => {
  return (
    <section>
      <Hero />
      <Expertise />
      <Works />
      <Portfolio />
      <People />
    </section>
  );
};

export default Dashboard;
