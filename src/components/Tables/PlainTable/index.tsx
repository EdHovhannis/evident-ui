import { FC } from 'react';

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
      isHeader: true,
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
    <table>
      {defaultItems.map((trow) => {
        if (trow.isHeader) {
          return (
            <tr>
              {trow.row.map((thead) => {
                return <th>{thead.col}</th>;
              })}
            </tr>
          );
        }
        return (
          <tr>
            {trow.row.map((tdata) => {
              return <td>{tdata.col}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};
