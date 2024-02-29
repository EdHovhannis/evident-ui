import React from 'react';
import { RightBarWrapper } from './style';
import { TextedBtn } from '@/components/Buttons/TextedButton/style';
import { TextedButton } from '@/components';
import { useAppSelector } from '@/documentation/actions/redux';

export const RightBar = () => {
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  switch (componentsGroupId) {
    case 'buttons':
      return (
        <RightBarWrapper>
          <TextedButton label="buttons-1" size="s" color="#474747" />
          <TextedButton label="buttons-2" size="s" color="#474747" />
          <TextedButton label="buttons-3" size="s" color="#474747" />
          <TextedButton label="buttons-4" size="s" color="#474747" />
          <TextedButton label="buttons-5" size="s" color="#474747" />
        </RightBarWrapper>
      );
    case 'inputs':
      return (
        <RightBarWrapper>
          <TextedButton label="inputs-1" size="s" color="#474747" />
          <TextedButton label="inputs-2" size="s" color="#474747" />
          <TextedButton label="inputs-3" size="s" color="#474747" />
          <TextedButton label="inputs-4" size="s" color="#474747" />
          <TextedButton label="inputs-5" size="s" color="#474747" />
        </RightBarWrapper>
      );
    default:
      return (
        <RightBarWrapper>
          <TextedButton label="cards-1" size="s" color="#474747" />
          <TextedButton label="cards-2" size="s" color="#474747" />
          <TextedButton label="cards-3" size="s" color="#474747" />
          <TextedButton label="cards-4" size="s" color="#474747" />
          <TextedButton label="cards-5" size="s" color="#474747" />
        </RightBarWrapper>
      );
  }
};
