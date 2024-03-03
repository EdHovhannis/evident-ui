import { CSSProperties } from "react";

export interface IButtonProps {
  label: string;
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  size: "big" | "middle" | "small" | "tiny";
  customStyle?: CSSProperties;
  kind: "default" | "success" | "disable" | "warning" | "danger";
  look: "textonly" | "filled" | "withborder";
  id: string;
}
