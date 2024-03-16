import styled from 'styled-components';

export const NavWrapper = styled.nav<{
  $bgrnd?: string;
  $clr?: string;
  $wdth?: string;
  $hgth?: string;
  $gridArea?: string;
}>`
  position: fixed;
  background: ${(props) => props.$bgrnd || '#565f6f'};
  color: ${(props) => props.$clr || '#ffffff'};
  width: ${(props) => props.$wdth || '100%'};
  height: ${(props) => props.$hgth || '64px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  grid-area: ${(props) => props.$gridArea || ''};
`;
