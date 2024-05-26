import { FC } from 'react';
import { Textonly, Withborder } from './style';
import { IButtonProps } from '../types';

export const PlainButton: FC<IButtonProps> = (props) => {
  const { label, size, look, onClick, id, customStyle, kind } = props;
  switch (look) {
    case 'textonly':
      return (
        <Textonly
          style={{ ...customStyle }}
          onClick={onClick}
          id={id}
          $size={size}
          $kind={kind ?? 'default'}
        >
          {label}
        </Textonly>
      );
    case 'withborder':
      return (
        <Withborder
          style={{ ...customStyle }}
          onClick={onClick}
          id={id}
          $size={size}
          $kind={kind ?? 'default'}
        >
          {label}
        </Withborder>
      );
  }
};
