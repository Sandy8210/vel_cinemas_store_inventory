import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import DynamicIcon from "../IconComp/DynamicIcon";

// side - "top" | "right" | "bottom" | "left"
// align - "start" | "center" | "end"
// sideOffset - number
// alignOffset - number
// avoidCollisions - boolean
// collisionPadding - number

const DropDownComp = ({
  btn_title = "Dropdown Menu",
  dropDownTrigger = true,
  item = [],
  side = "bottom",
  sideOffset = 5,
  align = "start",
  alignOffset = 5,
  avoidCollisions = false,
  collisionPadding = 10,
  btn_action_icon = null,
}) => {
  const RenderMenuItems = (items, level = 0) => {
    return items.map((subItem, index) => {
      const key = `${level}-${index}`;

      return !subItem.sub_menu ? (
        <DropdownMenuItem
          key={key}
          onClick={subItem.onClick}
          className="cursor-pointer ml-5"
        >
          {subItem.icon && <DynamicIcon iconName={subItem.icon} />}
          {subItem.label}
        </DropdownMenuItem>
      ) : (
        <DropdownMenuSub key={key}>
          <DropdownMenuSubTrigger className="ml-5">
            {subItem.icon && <DynamicIcon iconName={subItem.icon} />}
            {subItem.label}
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent className="w-48" sideOffset={10}>
            {RenderMenuItems(subItem.menu_items, level + 1)}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      );
    });
  };

  return (
    <DropdownMenu>
      {dropDownTrigger && (
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="default">
            {btn_action_icon ? (
              <DynamicIcon name={btn_action_icon} />
            ) : (
              btn_title
            )}
          </Button>
        </DropdownMenuTrigger>
      )}

      <DropdownMenuContent
        className="w-56"
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        collisionPadding={collisionPadding}
      >
        {item.map((menuItem, index) => (
          <React.Fragment key={index}>
            {menuItem.dropDownSeparator && <DropdownMenuSeparator />}

            {menuItem.label && (
              <DropdownMenuLabel>{menuItem.label}</DropdownMenuLabel>
            )}

            {menuItem.menu_group && RenderMenuItems(menuItem.menu_group)}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownComp;
