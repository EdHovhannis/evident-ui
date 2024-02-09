import React, { FC } from "react";
import { NavWrapper } from "./style";
import { NavLogo } from "./style/NavLogo";
import { NavContent } from "./style/NavContent";
import { NavItems } from "./style/NavItems";
import { v4 as uuidv4 } from "uuid";

export interface INavBarProps {
  bgrnd?: string;
  clr?: string;
  wdth?: string;
  hgth?: string;
  navIcon?: string;
  navItems?: NavItem[];
}
export interface NavItem {
  title: string;
  onClick: () => void;
}

export const NavBar: FC<INavBarProps> = (props) => {
  const { navIcon, bgrnd, clr, wdth, navItems, hgth } = props;

  const defaultItem: NavItem[] = [
    { title: "Main", onClick: () => {} },
    { title: "About", onClick: () => {} },
    { title: "Content", onClick: () => {} },
  ];
  return (
    <NavWrapper bgrnd={bgrnd} clr={clr} wdth={wdth} hgth={hgth}>
      <NavLogo>
        <i className="material-icons">{navIcon || "water_drop"}</i>
      </NavLogo>
      <NavContent>
        {(navItems || defaultItem).map((item: NavItem) => {
          return (
            <NavItems key={item.title} onClick={item.onClick}>
              {item.title}
            </NavItems>
          );
        })}
      </NavContent>
    </NavWrapper>
  );
};
