import { EComponentsGroupId } from '@/documentation/types/type/componentsGroupId';

export type IComponentsData = {
  [key in EComponentsGroupId]?: {
    example: string;
    tableData: any;
    code: string;
  }[];
};

const ComponentsData: IComponentsData = {
  buttons: [
    {
      example: 'plainbutton',
      tableData: [
        {
          row: [
            {
              title: 'Accept prop',
              id: '9df102ee-02dc-40ec-8088-7c0c2e71464f',
            },
            { title: 'Type', id: '879fee34-4a16-42eb-a8b3-dcdf98553fee' },
            { title: 'Requiretty', id: '832113d3-6c8d-4e4e-9b20-3ff31d604aa1' },
            {
              title: 'Description',
              id: 'eea0fa3d-dcb9-4c82-bd33-ab550337cf38',
              width: '40%',
            },
          ],
          id: 'e6b04bad-ca6b-4441-83db-2f4bf49aeeed',
        },
        {
          row: [
            {
              title: 'Accept prop',
              id: 'a0b0c59a-9b4e-4e16-849a-7b4f7d3ddcbf',
            },
            { title: 'Type', id: '131970e6-80ac-4b65-9152-2144f8bbf9ed' },
            { title: 'Requiretty', id: '5c27ad9d-83d0-4580-ac6f-cd32bf735c89' },
            {
              title: 'Description',
              id: '9c4e34c0-b8bd-4f51-b6ce-55747c706722',
              width: '40%',
            },
          ],
          id: 'ed6a4e05-9092-4947-82fe-93e70c060995',
        },
      ],
      code: 'some 1111',
    },
  ],
  inputs: [
    {
      example: 'input',
      tableData: [],
      code: 'some 2222',
    },
  ],
  cards: [
    {
      example: 'plainbutton',
      tableData: [],
      code: 'some code',
    },
  ],
};

export const getComponentsInfo = (key: EComponentsGroupId) => {
  return ComponentsData[key];
};
