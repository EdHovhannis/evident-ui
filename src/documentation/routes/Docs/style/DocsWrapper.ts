import styled from "styled-components";

export const DocsWrapper = styled.div`
  grid-area: view;
  display: grid;
  grid-template-areas: ". leftbar components rightbar .";
  grid-template-rows: 1fr;
  grid-template-columns: 0.2fr 0.2fr 1fr 0.2fr 0.2fr;
`;
