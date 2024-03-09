import { FC } from 'react';
import { PlainBtn } from './style';
import { IButtonProps } from '../types';

export const PlainButton: FC<IButtonProps> = (props) => {
  const { label, size, look, onClick, id, customStyle, kind } = props;
  switch (look) {
    case 'textonly':
      return (
        <PlainBtn
          style={{ ...customStyle }}
          onClick={onClick}
          id={id}
          $size={size}
          $kind={kind ?? 'default'}
        >
          {label}
        </PlainBtn>
      );
  }
};
