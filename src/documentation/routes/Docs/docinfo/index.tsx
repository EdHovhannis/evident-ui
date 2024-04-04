import { CodeW, ExampleSections, DocInfoW } from './style';
import { ComponentW } from './style';
import { PlainButton } from '@/components';
import { PlainTable } from '@/components';
import { useAppSelector } from '@/documentation/actions/redux';
import { getComponentsInfo } from '@/documentation/services';
import parse from 'html-react-parser';
import classNames from 'classnames';

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
            <ExampleSections>
              <PlainButton
                id="plain_button_textonly"
                size="big"
                label="PlainButton"
                look="textonly"
                kind="default"
              />
            </ExampleSections>
            <ExampleSections>
              <PlainTable tableData={item.tableData} />
            </ExampleSections>
            <ExampleSections>
              <CodeW>
                {parse(item.code)}
                <i className={classNames('material-icons', 'content_copy')}>
                  content_copy
                </i>
              </CodeW>
            </ExampleSections>
          </ComponentW>
        );
      })}
    </DocInfoW>
  );
};
