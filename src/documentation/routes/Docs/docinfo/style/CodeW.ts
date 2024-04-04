import styled from 'styled-components';

export const CodeW = styled.pre`
  position: relative;
  background-color: #1e1c1c;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 2px;
  &:hover .content_copy {
    color: #ffffff;
    transition: 0.2s;
  }
  & .tagArrow {
    color: grey;
  }
  & .tagName {
    color: #419f41;
  }
  & .tagAtr {
    color: #35b3f1;
  }
  & .tagAtrName {
    color: #9b5b34;
  }
  & .tagAtrEqueal {
    color: #b7b6b6;
  }
  & .content_copy {
    position: absolute;
    top: 16px;
    right: 16px;
    color: #1e1c1c;
    &:hover {
      cursor: pointer;
    }
  }
`;
