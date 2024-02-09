import React from 'react';
import { FC } from 'react';
import { TextedButtonW } from './style';
import { TextedBtn } from './style/TextedBtn';
import { ITextedButtonProps } from './types';

export const TextedButton: FC<ITextedButtonProps> = (props) => {
  const { label, onClick, pd, clr } = props;
  return (
    <TextedButtonW>
      <TextedBtn onClick={onClick} clr={clr} pd={pd}>
        {label}
      </TextedBtn>
    </TextedButtonW>
  );
};
