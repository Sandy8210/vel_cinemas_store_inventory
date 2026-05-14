import React from "react";
import { Outlet } from 'react-router-dom';
import AppShellLayout from "../Appshell/AppShellLayout";

const MainLayout = () => {
  return (
    <AppShellLayout>
      <Outlet />
    </AppShellLayout>
  );
};

export default MainLayout;
