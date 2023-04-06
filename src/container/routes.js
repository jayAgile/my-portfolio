import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Layout = lazy(() => import("../components/layout"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Routing;
