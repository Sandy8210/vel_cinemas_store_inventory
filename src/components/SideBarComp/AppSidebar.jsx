import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import { NavMain } from "./NavMenu";

import { SwatchBook } from "lucide-react";
import { appController } from "@/constants/appController";
import { sidebarItems } from "./Sidebar.config";

const AppSidebar = (props) => {
  const { open } = useSidebar();
  const controller = appController();

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className={`group transition-all duration-300 ease-in-out ${
        open ? "w-44" : "w-16"
      }`}
    >
      <div
        className={`flex items-center mt-3 ${
          open ? "px-3 justify-between" : "justify-center"
        }`}
      >
        <SwatchBook className="h-5 w-5" />

        {controller.sidebar.isShow &&
          (open ? (
            <SidebarTrigger className="ml-auto" />
          ) : (
            <SidebarTrigger className="absolute opacity-0 duration-75 group-hover:opacity-100 transition-opacity" />
          ))}
      </div>

      <SidebarContent className="mt-3">
        <NavMain items={sidebarItems} />
      </SidebarContent>

      <SidebarFooter></SidebarFooter>
      {controller.sidebar.isShow && <SidebarRail />}
    </Sidebar>
  );
};

export default AppSidebar;
