import React from 'react';
import { FC } from 'react';
import { TextedButtonW } from './style';
import { TextedBtn } from './style/TextedBtn';
import { ITextedButtonProps } from './types';

export const TextedButton: FC<ITextedButtonProps> = (props) => {
  const { label, onClick, pd, clr, id } = props;
  return (
    <TextedButtonW>
      <TextedBtn onClick={onClick} $clr={clr} $pd={pd} id={id}>
        {label}
      </TextedBtn>
    </TextedButtonW>
  );
};
