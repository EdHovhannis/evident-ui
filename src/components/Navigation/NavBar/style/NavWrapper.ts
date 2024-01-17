import styled from 'styled-components';

export const NavWrapper = styled.div<{
  bgrnd?: string;
  clr?: string;
  wdth?: string;
}>`
  position: fixed;
  background: ${(props) => props.bgrnd || '#1b75d0'};
  color: ${(props) => props.clr || '#ffffff'};
  width: ${(props) => props.wdth || '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  z-index: 1;
`;
