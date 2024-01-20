import styled from "styled-components";
import { ISidebarLocation } from "../types";

//TODO: Create a dinamic component and put into components directory

export const SidebarWrapper = styled.aside<{ location: ISidebarLocation }>`
  position: fixed;
  padding: 64px 32px 16px 220px;
  right: ${({ location }) => location === "right" && "0"};
  left: ${({ location }) => location === "left" && "0"};
  height: 100%;
`;
