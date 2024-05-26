import styled, { CSSProperties } from 'styled-components';
import { IButtonProps } from '../../types';

interface ITextedBtn {
  $size: 'big' | 'middle' | 'small' | 'tiny';
  $kind: 'default' | 'success' | 'disable' | 'warning' | 'danger';
}

export const Textonly = styled.button<ITextedBtn>`
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Withborder = styled.button<ITextedBtn>`
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  background: transparent;
  cursor: pointer;
  padding: 8px 16px;

  &:hover {
    background-color: #bdbdbd;
    color: #000;
  }
`;
