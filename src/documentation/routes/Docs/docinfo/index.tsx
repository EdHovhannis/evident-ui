import { CodeW, ComponentExample, DocInfoW } from './style';
import { ComponentW } from './style';
import { PlainButton } from '@/components';
import { PlainTable } from '@/components';
import { useAppSelector } from '@/documentation/actions/redux';
import { getComponentsInfo } from '@/documentation/services';

export const DocInfo = () => {
  const { componentsGroupId } = useAppSelector(
    (state) => state.componentsGroupId
  );
  const currentComponentsStack = getComponentsInfo(componentsGroupId);

  return (
    <DocInfoW>
      {/* <PlainHeader label={'Components'} size={EHeaderSizes.Middle} /> */}
      {currentComponentsStack.map((item) => {
        return (
          <ComponentW key={item.example}>
            <ComponentExample>
              <PlainButton
                id="plain_button_textonly"
                size="big"
                label="PlainButton"
                look="textonly"
                kind="default"
              />
            </ComponentExample>
            <PlainTable tableData={item.tableData} />
            <CodeW>{item.code}</CodeW>
          </ComponentW>
        );
      })}
    </DocInfoW>
  );
};
