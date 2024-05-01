import { CopyBlock, vs2015 } from 'react-code-blocks';
import { MainWrapper } from './style/MainWrapper';

export const About = () => {
  return (
    <MainWrapper>
      <CopyBlock
        text={`<PlainButton\n id="plain_button_textonly"\n size="big" label="PlainButton"\n look="textonly"\n kind="default"\n/>`}
        language="javascript"
        showLineNumbers={true}
        theme={vs2015}
      />
    </MainWrapper>
  );
};
