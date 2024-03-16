import { ComponentExample, DocInfoW } from './style';
import { ComponentW } from './style/ComponentW';
import { PlainButton } from '@/components';
import { EButtonSizes } from '@/components/Buttons';
import { PlainTable } from '@/components';
import { useAppSelector } from '@/documentation/actions/redux';
import { getComponentsInfo } from '@/documentation/services';

export const DocInfo = () => {
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  const currentComponentsStack = getComponentsInfo(componentsGroupId);
  console.log('currentComponentsStack', currentComponentsStack);
  return (
    <DocInfoW>
      {/* <PlainHeader label={'Components'} size={EHeaderSizes.Middle} /> */}
      {currentComponentsStack.map((item) => {
        return (
          <ComponentW key={item.example}>
            <ComponentExample>
              <PlainButton
                id="plain_button_textonly"
                size={EButtonSizes.Big}
                label="PlainButton"
                look="textonly"
                kind="default"
              />
            </ComponentExample>
            <PlainTable tableData={item.tableData} />
            <div>testt</div>
          </ComponentW>
        );
      })}
    </DocInfoW>
  );
};
