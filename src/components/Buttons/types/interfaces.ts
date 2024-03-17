import { CSSProperties } from 'react';
import { TButtonSizes } from './type';

export interface IButtonProps {
  label: string;
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  size: TButtonSizes;
  customStyle?: CSSProperties;
  kind: 'default' | 'success' | 'disable' | 'warning' | 'danger';
  look: 'textonly' | 'filled' | 'withborder';
  id: string;
}
