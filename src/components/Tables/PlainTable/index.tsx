import { FC } from 'react';
import { TableW } from './style/TableW';
import { TableData, TableRow } from './style';

interface IPlainTableProps {}

export const PlainTable: FC<IPlainTableProps> = () => {
  const defaultItems = [
    {
      row: [
        { col: 'Accept prop', id: '1' },
        { col: 'Type', id: '2' },
        { col: 'Requiretty', id: '2' },
        { col: 'Description', id: '2' },
      ],
      id: '1',
      isHeader: true,
    },
    {
      row: [
        { col: 'Type', id: '3' },
        { col: 'Test-4.2', id: '4' },
        { col: 'Test-5.2', id: '4' },
        {
          col: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates rem placeat, deserunt qui culpa. Quos commodi nemo beatae harum sint officia nesciunt, dicta perspiciatis, consequatur, veritatis repellat in exercitationem.',
          id: '4',
        },
      ],
      id: '2',
    },
    {
      row: [
        { col: 'Requiretty', id: '3' },
        { col: 'lorem', id: '4' },
        { col: 'Test-8.3', id: '4' },
        { col: 'Test-8.3', id: '4' },
      ],
      id: '3',
    },
  ];

  return (
    <TableW>
      {defaultItems.map((trow) => {
        return (
          <TableRow>
            {trow.row.map((tdata) => {
              return <TableData>{tdata.col} </TableData>;
            })}
          </TableRow>
        );
      })}
    </TableW>
  );
};
