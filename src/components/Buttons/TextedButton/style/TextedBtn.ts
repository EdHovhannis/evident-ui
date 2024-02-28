import styled from 'styled-components';
import { TBtnSize } from '../types';

export const TextedBtn = styled.button<{
  $size?: TBtnSize;
  $clr?: string;
  $pd?: string;
}>`
  outline: none;
  border: none;
  background: transparent;
  padding: ${({ $size, $pd }) =>
    $pd ||
    ($size === 's' ? '2px 4px' : $size === 'm' ? '4px 8px' : '6px 12px')};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  color: ${({ $clr }) => $clr || '#fadbc1'};
  font-size: ${({ $size }) =>
    $size === 's' ? '14px' : $size === 'm' ? '16px' : '18px'};
`;
