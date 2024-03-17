import { EComponentsGroupId } from '@/documentation/types/type/componentsGroupId';

// https://shortunique.id/

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
              id: 'k1CwSW',
            },
            { title: 'Type', id: 'ylVh2W' },
            { title: 'Requiretty', id: 'PDjLQR' },
            { title: 'Default prop', id: 'P19T9L' },
            {
              title: 'Description',
              id: '5Yt4dN',
              width: '40%',
            },
          ],
          id: 'BFxdaG',
        },
        {
          row: [
            {
              title: 'label',
              id: 'Zb2LMK',
            },
            { title: 'string', id: '6TgBR9' },
            { title: 'required', id: 'CzwF9V' },
            { title: '-', id: 'EFkSCs' },
            {
              title: 'Defines the name of the button',
              id: 'nbQzte',
              width: '40%',
            },
          ],
          id: 'nwnjy1',
        },
        {
          row: [
            {
              title: 'onClick',
              id: 'oTRuDc',
            },
            {
              title: '(event: React.SyntheticEvent<HTMLElement>) => void',
              id: '4Bo39z',
            },
            { title: 'not required', id: 'xlkFGo' },
            { title: '-', id: 'Ttfr5p9' },
            {
              title: 'Defines a click event',
              id: 'eGL82k',
              width: '40%',
            },
          ],
          id: 'RJQn1F',
        },
        {
          row: [
            {
              title: 'kind',
              id: 'iiTLFP',
            },
            {
              title: `'default' | 'success' | 'disable' | 'warning' | 'danger'`,
              id: 'jeIS7A',
            },
            { title: 'not required', id: '5STfMo' },
            { title: '-', id: 'Tlfo5p9' },
            {
              title: 'Defines the theme of the button',
              id: 'UsbvUl',
              width: '40%',
            },
          ],
          id: '2PL4NY',
        },
        {
          row: [
            {
              title: 'size',
              id: 'KBlAkC',
            },
            {
              title: `'big' | 'middle' | 'small' | 'tiny'`,
              id: 'izpBVy',
            },
            { title: 'not required', id: 'hq6kw5' },
            { title: '-', id: 'Etmr5pn' },
            {
              title: 'Defines the theme of the button',
              id: 'Y5Gvmy',
              width: '40%',
            },
          ],
          id: 'gjpQTR',
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
