import styled from 'styled-components';

export const TextedBtnIcon = styled.i<{
  $iconSize: string;
  $iconColor: string;
}>`
  font-size: ${({ $iconSize }) => `${$iconSize}px` || '24px'};
`;
