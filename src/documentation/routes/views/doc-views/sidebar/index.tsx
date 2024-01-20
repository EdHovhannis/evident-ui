import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { SidebarWrapper } from "./style";
import { TextedButton } from "@/components/Buttons/TextedButton";
import { ISidebarProps } from "./types";

export const Sidebar: FC<ISidebarProps> = ({ location, buttons }) => {
  return (
    <SidebarWrapper location={location}>
      {buttons.map((btn) => (
        <TextedButton
          key={uuidv4()}
          label={btn.label}
          clr="#222427"
          pd="2px"
          onClick={() => console.log(btn.templateKey)}
        />
      ))}
    </SidebarWrapper>
  );
};
