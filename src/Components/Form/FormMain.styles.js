import styled from "styled-components";

export const FormMainStyled = styled.div`
  width: 90%;
  padding: 20px;
  border: 1px solid #c3c3c3;
  border-radius: 8px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 55px;
  && h3 {
    font-size: 1.3rem;
    margin-left: 5px;
    color: #03071e;
    font-weight: bold;
  }
`;

export const FormDivStyled = styled.div`
  width: 95%;
  margin: 10px;
  padding: 15px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: 0.85rem;
  line-height: 1.5rem;
  color: #03071e;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5em;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
`;

export const DivStyled = styled.div`
  width: 95%;
  margin: 10px;
  padding: 15px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonStyled = styled.button`
  margin: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.6em;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 54px 55px;
  color: #fff;
  opacity: 1;
  cursor: pointer;
  transition: opacity 180ms ease-in-out;
  background: #393cf9;

  &:hover {
    opacity: 0.75;
  }
`;
