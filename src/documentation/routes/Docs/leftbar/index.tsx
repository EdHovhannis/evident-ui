import { SyntheticEvent } from 'react';
import { LeftBarItemsW, LeftBarW, LeftBarItem } from './style';
import { useActions } from '@/documentation/actions/actions';
import { TComponentsGroupId } from '@/documentation/types/type/componentsGroupId';
import { useAppSelector } from '@/documentation/actions/redux';

export const LeftBar = () => {
  const { setComponentsGroupId } = useActions();
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  const handleComponentsGroup = (e: SyntheticEvent) => {
    setComponentsGroupId(e.currentTarget.id as TComponentsGroupId);
  };
  return (
    <LeftBarW>
      <h2>Components</h2>
      <LeftBarItemsW>
        <LeftBarItem
          onClick={handleComponentsGroup}
          id="buttons"
          $isActive={componentsGroupId === 'buttons'}
        >
          Buttons
        </LeftBarItem>
        <LeftBarItem
          onClick={handleComponentsGroup}
          id="inputs"
          $isActive={componentsGroupId === 'inputs'}
        >
          Inputs
        </LeftBarItem>
        <LeftBarItem
          onClick={handleComponentsGroup}
          id="cards"
          $isActive={componentsGroupId === 'cards'}
        >
          Cards
        </LeftBarItem>
      </LeftBarItemsW>
    </LeftBarW>
  );
};
