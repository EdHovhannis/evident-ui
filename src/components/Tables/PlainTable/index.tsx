import { FC } from 'react';
import { TableRow, TableW, TableColumns, TableCol } from './style';

interface IPlainTableProps {}

export const PlainTable: FC<IPlainTableProps> = () => {
  const defaultItems = [
    {
      row: [
        { col: 'Test-1.1', id: '1' },
        { col: 'Test-2.1', id: '2' },
        { col: 'Test-3.1', id: '2' },
      ],
      id: '1',
      isHead: true,
    },
    {
      row: [
        { col: 'Test-3.2', id: '3' },
        { col: 'Test-4.2', id: '4' },
        { col: 'Test-5.2', id: '4' },
      ],
      id: '2',
    },
    {
      row: [
        { col: 'Test-6.3', id: '3' },
        { col: 'Test-7.3', id: '4' },
        { col: 'Test-8.3', id: '4' },
      ],
      id: '3',
    },
  ];

  return (
    <TableW>
      {defaultItems.map((trow) => (
        <TableRow key={trow.id}>
          <TableColumns style={{ listStyle: 'none' }}>
            {trow.row.map((tcol) => (
              <TableCol key={tcol.id}>{tcol.col}</TableCol>
            ))}
          </TableColumns>
        </TableRow>
      ))}
    </TableW>
  );
};
