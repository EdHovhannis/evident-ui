import React, { FC } from 'react';
import './style.css';
export interface IPlainButton {
  label: string;
}
export const PlainButton: FC<IPlainButton> = (props) => {
  const { label } = props;
  return <div className="test">{label || 'Test'}</div>;
};
