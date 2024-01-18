import React, { FC } from "react";
import { TextedButtonW } from "./style";
import { TextedBtn } from "./style/TextedBtn";

export interface ITextedButton {
  label?: string;
  onClick?: () => void;
}

export const TextedButton: FC<ITextedButton> = (props) => {
  const { label, onClick } = props;
  return (
    <TextedButtonW>
      <TextedBtn onClick={onClick} size="s">
        {label}
      </TextedBtn>
    </TextedButtonW>
  );
};
