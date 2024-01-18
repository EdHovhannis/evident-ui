import React from "react";
import { SidebarWrapper } from "./style";
import { TextedButton } from "@/components/Buttons/TextedButton";

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <TextedButton label="Buttons" onClick={() => console.log("work")} />
      <TextedButton label="Inputs" />
      <TextedButton label="Cards" />
      <TextedButton label="Bars" />
    </SidebarWrapper>
  );
};
