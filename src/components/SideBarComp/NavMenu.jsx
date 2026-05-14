import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import DynamicIcon from "../IconComp/DynamicIcon";

export function NavMain({ items }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items
          .filter((item) => item.isActive)
          .sort((a, b) => a.order - b.order)
          .map((project) => (
            <SidebarMenuItem key={project.title}>
              <SidebarMenuButton asChild>
                <a href={project.url ? project.url : "/"}>
                  <DynamicIcon name={project.icon} />
                  <span>{project.title ? project.title : "N/A"}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
