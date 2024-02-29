export type TBtnSize = 's' | 'm' | 'l';

export interface ITextedButtonProps {
  label?: string;
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  size?: TBtnSize;
  color?: string;
  padding?: string;
  id?: string;
  iconName?: string;
  iconSize?: string;
  iconColor?: string;
}
