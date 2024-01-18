import styled from "styled-components";

export const TextedBtn = styled.button<{
  size?: "s" | "m" | "l";
}>`
  outline: none;
  background: transparent;
  padding: ${(props) =>
    props.size === "s"
      ? "2px 4px"
      : props.size === "m"
      ? "4px 8px"
      : "6px 12px"};
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #fadbc1;
  }
  color: #fadbc1;
`;
