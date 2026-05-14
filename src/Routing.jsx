import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainLayout from "./layout/MainLayout";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<MainLayout />}>
          <Route index element={<div>Home Pagess</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
