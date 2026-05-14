import { SidebarContent, SidebarGroup } from "@/components/ui/sidebar";
import React from "react";

const NavBar = ({
  expand,
  title,
  badge,
  badge_color,
  icon: Icon,
  onClick,
  action_menu = "normal",
}) => {
  let content;

  if (action_menu === "sidebar_sub_menu") {
    content = <div>Sidebar submenu</div>;
  } else if (action_menu === "sub_menu") {
    content = <div>Submenu</div>;
  } else if (action_menu === "collapsible_menu") {
    content = <div>Collapsible menu</div>;
  } else {
    content = <div>test</div>;
  }

  return (
    <SidebarContent>
      <SidebarGroup>{content}</SidebarGroup>
    </SidebarContent>
  );
};

export default NavBar;
