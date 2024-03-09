import { CSSProperties } from 'react';
import { EButtonSizes } from './enums';

export interface IButtonProps {
  label: string;
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  size: EButtonSizes;
  customStyle?: CSSProperties;
  kind: 'default' | 'success' | 'disable' | 'warning' | 'danger';
  look: 'textonly' | 'filled' | 'withborder';
  id: string;
}
