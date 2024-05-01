import styled from 'styled-components';
interface ExampleSections {
  $flex?: boolean;
}
export const ExampleSections = styled.section<ExampleSections>`
  margin-bottom: 16px;
  display: ${({ $flex }) => ($flex ? 'flex' : 'block')};
`;
