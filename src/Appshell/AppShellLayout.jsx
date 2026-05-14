import AppSidebar from "@/components/SideBarComp/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import React from "react";
import { Outlet } from "react-router-dom";

const AppShellLayout = () => {
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <SidebarProvider>
      <AppSidebar  />
      <SidebarInset>
        <header className="flex h-16 items-center px-4 gap-2">
          {isMobile && <SidebarTrigger />}
          <Outlet />
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppShellLayout;
