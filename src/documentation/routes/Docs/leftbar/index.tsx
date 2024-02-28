import React from 'react';
import { LeftBarWrapper } from './style';
import { TextedButton } from '@/components/Buttons/TextedButton/index';
import { useActions } from '@/documentation/actions/actions';

export const LeftBar = () => {
  const { setComponentsGroupId } = useActions();
  return (
    <LeftBarWrapper>
      <TextedButton
        label="Buttons"
        clr="#2b2b2b"
        id="buttons"
        onClick={(e) => setComponentsGroupId(e.currentTarget.id)}
      />
      <TextedButton label="Inputs" clr="#2b2b2b" id="inputs" />
      <TextedButton label="Cards" clr="#2b2b2b" id="cards" />
    </LeftBarWrapper>
  );
};
