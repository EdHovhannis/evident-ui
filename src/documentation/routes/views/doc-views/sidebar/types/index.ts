import { ITextedButtonProps } from "@/components/Buttons/TextedButton/types";

export type ISidebarLocation = "left" | "right";

export interface ISidebarProps extends ISideBarItems {
  location: ISidebarLocation;
}
export interface ISideBarItems {
  location: ISidebarLocation;
  buttons: ITextedButtonProps[];
  template?: string;
}
