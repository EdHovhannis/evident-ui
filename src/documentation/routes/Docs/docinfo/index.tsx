import { EHeaderSizes } from '@/components/Header';
import { DocInfoW } from './style';
import { ComponentW } from './style/ComponentW';
import { PlainHeader } from '@/components';
import { PlainButton } from '@/components';
import { EButtonSizes } from '@/components/Buttons';
import { PlainTable } from '@/components';

export const DocInfo = () => {
  return (
    <DocInfoW>
      {/* <PlainHeader label={'Components'} size={EHeaderSizes.Middle} /> */}
      <ComponentW>
        <PlainButton
          id="plain_button_textonly"
          size={EButtonSizes.Big}
          label="PlainButton"
          look="textonly"
          kind="default"
        />
        <PlainTable />
      </ComponentW>
    </DocInfoW>
  );
};
