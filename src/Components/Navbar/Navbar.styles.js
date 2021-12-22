import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background: linear-gradient(90deg, #314da6, #6163fa, #393cf9);

  align-items: center;
  justify-content: center;

  & a {
    margin: 0 20px;
    text-decoration: none;
    color: #ddf8f4;

    &:hover {
      color: #fff;
      font-size: 1.3rem;
      transition: 0.5s;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px;
    }
  }
  & h1 {
    font-size: 2em;
    font-weight: 300;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
`;
