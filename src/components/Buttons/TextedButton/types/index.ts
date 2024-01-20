export type TBtnSize = "s" | "m" | "l";

export interface ITextedButtonProps {
  label?: string;
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  size?: TBtnSize;
  clr?: string;
  pd?: string;
  templateKey?: string;
}
