import { PlainHeader } from '@/components';
import { EHeaderSizes } from '@/components/Header/types';
import { useActions } from '@/documentation/actions/actions';
import { useAppSelector } from '@/documentation/actions/redux';
import { leftBarStorage } from '@/documentation/services';
import { LeftBarItem, LeftBarItemsW, LeftBarW } from './style';

export const LeftBar = () => {
  const { setComponentsGroupId } = useActions();
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  //TODO: add this function to useMemo
  const leftBarItems = leftBarStorage({
    setComponentsGroupId,
    componentsGroupId,
  });
  return (
    <LeftBarW>
      <LeftBarItemsW>
        <PlainHeader label={'Components'} size={EHeaderSizes.Middle} />
        {leftBarItems.map((lbItem) => (
          <LeftBarItem
            key={lbItem.id}
            onClick={lbItem.onClick}
            id={lbItem.id}
            $isActive={lbItem.isActive}
          >
            {lbItem.label}
          </LeftBarItem>
        ))}
      </LeftBarItemsW>
    </LeftBarW>
  );
};
