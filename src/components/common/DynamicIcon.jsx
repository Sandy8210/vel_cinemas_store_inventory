import React from "react";
import * as Icons from "lucide-react";

const DynamicIcon = ({ name, size = 18, strokeWidth = 1.5, className }) => {
  const LucideIcon = Icons[name];

  if (!LucideIcon) {
    return (
      <Icons.HelpCircle
        size={size}
        strokeWidth={strokeWidth}
        className={className}
      />
    );
  }

  return (
    <LucideIcon size={size} strokeWidth={strokeWidth} className={className} />
  );
};

export default DynamicIcon;
