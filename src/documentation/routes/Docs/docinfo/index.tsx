import { CodeW, ExampleSections, DocInfoW } from './style';
import { ComponentW } from './style';
import { PlainButton } from '@/components';
import { PlainTable } from '@/components';
import { useAppSelector } from '@/documentation/actions/redux';
import { getComponentsInfo } from '@/documentation/services';
import { CodeBlock, CopyBlock, github } from 'react-code-blocks';

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
            <ExampleSections $flex>
              <PlainButton
                id="plain_button_textonly"
                size="big"
                label="PlainButton"
                look="textonly"
                kind="default"
              />
              <PlainButton
                id="plain_button_withborder"
                size="big"
                label="PlainButton"
                look="withborder"
                kind="default"
              />
            </ExampleSections>
            <ExampleSections>
              <PlainTable tableData={item.tableData} />
            </ExampleSections>
            <ExampleSections>
              <CodeBlock
                text={item.code}
                language="javascript"
                showLineNumbers={true}
                theme={github}
              />
            </ExampleSections>
          </ComponentW>
        );
      })}
    </DocInfoW>
  );
};
