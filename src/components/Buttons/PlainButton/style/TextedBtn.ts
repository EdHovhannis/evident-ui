import styled, { CSSProperties } from 'styled-components';
import { IButtonProps } from '../../types';

interface ITextedBtn {
  $size: 'big' | 'middle' | 'small' | 'tiny';
  $kind: 'default' | 'success' | 'disable' | 'warning' | 'danger';
}

export const PlainBtn = styled.button<ITextedBtn>`
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
