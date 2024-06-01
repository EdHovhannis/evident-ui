import styled from "styled-components";
import { IBtnKind, IBtnStyleProps } from "../../types";

export const Textonly = styled.button<IBtnStyleProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border: none;
  background: red;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const getColor = ($kind: IBtnKind) => {
  switch ($kind) {
    case "default": {
      return "#ffffff";
    }
  }
};

export const DefaultView = styled.button<IBtnStyleProps>`
  background-color: #2faced;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  color: ${({ $kind }) => getColor($kind)};
  &:hover {
    transition: 0.2s;
    background-color: #006db6;
    cursor: pointer;
  }
`;
