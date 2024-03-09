import { ComponentExample, DocInfoW } from './style';
import { ComponentW } from './style/ComponentW';
import { PlainButton } from '@/components';
import { EButtonSizes } from '@/components/Buttons';
import { PlainTable } from '@/components';

export const DocInfo = () => {
  return (
    <DocInfoW>
      {/* <PlainHeader label={'Components'} size={EHeaderSizes.Middle} /> */}
      <ComponentW>
        <ComponentExample>
          <PlainButton
            id="plain_button_textonly"
            size={EButtonSizes.Big}
            label="PlainButton"
            look="textonly"
            kind="default"
          />
        </ComponentExample>
        <PlainTable />
      </ComponentW>
    </DocInfoW>
  );
};
