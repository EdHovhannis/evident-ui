import React from 'react';
import { LeftBarWrapper } from './style';
import { TextedButton } from '@/components/Buttons/TextedButton/index';
import { useActions } from '@/documentation/actions/actions';
import { TComponentsGroupId } from '@/documentation/types/type/componentsGroupId';

export const LeftBar = () => {
  const { setComponentsGroupId } = useActions();
  return (
    <LeftBarWrapper>
      <TextedButton
        label="Buttons"
        color="#474747"
        id="buttons"
        onClick={(e) =>
          setComponentsGroupId(e.currentTarget.id as TComponentsGroupId)
        }
        iconName={'play_circle'}
        size="s"
        iconSize="20"
      />
      <TextedButton
        label="Inputs"
        color="#474747"
        id="inputs"
        onClick={(e) =>
          setComponentsGroupId(e.currentTarget.id as TComponentsGroupId)
        }
        iconName={'input'}
        size="s"
        iconSize="20"
      />
      <TextedButton
        label="Cards"
        color="#474747"
        id="cards"
        onClick={(e) =>
          setComponentsGroupId(e.currentTarget.id as TComponentsGroupId)
        }
        iconName={'dashboard'}
        size="s"
        iconSize="20"
      />
    </LeftBarWrapper>
  );
};
