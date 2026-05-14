import { ScrollArea } from "@/components/ui/scroll-area";
import NavItems from "@/utils/NavbarData";
import NavBar from "./NavBar";
import { LogOut, PanelLeftClose, PanelLeftOpen, Sidebar } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

const NavContent = ({
  isMobile = false,
  expand,
  handleNavigate,
  handleLogout,
  setExpand,
}) => (
  <div className="flex flex-col h-full">
    <ScrollArea className="flex-1 px-3 py-4">
      <nav className="space-y-1">
        {NavItems.map((link) => {
          //   const active = currentPath?.split("/")?.[1] === link.path;
          console.log("Rendering link:", link);
          return (
            <SidebarProvider>
              <Sidebar>
                <NavBar
                  key={link.title}
                  expand={isMobile ? true : expand}
                  title={link.title}
                  badge={link.badge}
                  badge_color={link.badge_color}
                  icon={link.icon}
                  action_menu={link.action_menu}
                  //   active={active}
                  onClick={() => handleNavigate(link.link)}
                />
              </Sidebar>
            </SidebarProvider>
          );
        })}
      </nav>
    </ScrollArea>

    {/* <div className="border-t p-3 space-y-1">
      <p className="text-center text-xs text-primary mb-4">V1.0.0</p>
      <NavBar
        expand={isMobile ? true : expand}
        label={
          isMobile
            ? expand
              ? "Collapse"
              : "Expand"
            : expand
            ? "Collapse"
            : "Expand"
        }
        icon={expand ? PanelLeftClose : PanelLeftOpen}
        onClick={() => setExpand(!expand)}
      />
      <NavBar
        expand={isMobile ? true : expand}
        label="Logout"
        icon={LogOut}
        onClick={handleLogout}
      />
    </div> */}
  </div>
);

export default NavContent;
