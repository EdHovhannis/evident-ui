import { FC } from 'react';
import { TextedButtonW, TextedBtn, TextedBtnIcon } from './style';
import { ITextedButtonProps } from './types';

export const TextedButton: FC<ITextedButtonProps> = (props) => {
  const {
    label,
    onClick,
    padding,
    color,
    id,
    iconName,
    size,
    iconSize,
    iconColor,
  } = props;
  return (
    <TextedButtonW>
      <TextedBtn
        onClick={onClick}
        id={id}
        $color={color}
        $padding={padding}
        $size={size}
      >
        <TextedBtnIcon
          className={'material-icons'}
          $iconSize={iconSize}
          $iconColor={iconColor}
        >
          {iconName}
        </TextedBtnIcon>
        <span>{label}</span>
      </TextedBtn>
    </TextedButtonW>
  );
};
