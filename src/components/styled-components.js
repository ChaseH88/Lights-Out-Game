import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 85vw;
`;

export const BoardWrapper = styled.div`
  margin: 10px 0;
  box-shadow: 0 0 0 0 #fff;
`;

export const BoardBody = styled.div`

`;

export const BoardRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const CellStyle = styled.div`
  flex: 0 0 75px;
  height: 75px;
  background: #adacb3;
  box-shadow: inset 0 0 2px 0 #fff;
  transition: all 150ms ease;
  &.lit {
    background: #110e21;
  }
`;