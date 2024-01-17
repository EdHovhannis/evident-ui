import React, { FC } from "react";
import "./style.css";
import { PlainButtonW } from "./style";
import { PlainBtn } from "./style/PlainBtn";

export interface IPlainButton {
  label: string;
}

export const PlainButton: FC<IPlainButton> = (props) => {
  const { label } = props;
  return (
    <PlainButtonW>
      <PlainBtn>{label || "push"}</PlainBtn>
    </PlainButtonW>
  );
};
