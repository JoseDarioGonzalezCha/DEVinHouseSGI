import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #314da6;
  align-items: center;
  justify-content: center;

  & a {
    margin: 0 20px;
    text-decoration: none;
    color: #ddf8f4;
  }
  & h1 {
    font-size: 2em;
    font-weight: 300;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5em;
`;
