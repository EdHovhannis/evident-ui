import styled from 'styled-components';
interface ITableDataProps {
  $width: string;
}
export const TableData = styled.td<ITableDataProps>`
  border-collapse: collapse;
  border: 1px solid #ffffff;
  padding: 4px;
  width: ${({ $width }) => ($width ? $width : 'auto')};
  word-wrap: break-word;
`;
