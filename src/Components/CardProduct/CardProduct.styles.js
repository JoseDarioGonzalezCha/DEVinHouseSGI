import styled from "styled-components";

export const CardStyled = styled.div`
  width: 80%;
  padding: 20px;
  margin: 20px;
  border: 1px solid #c3c3c3;
  border-radius: 8px;
  display: flex;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 54px 55px;
  gap: 10px;
`;

export const ImgContainer = styled.div`
  width: 25%;
  border: 1px solid #c3c3c3;
  border-radius: 8px;
`;

export const ImgStyled = styled.img`
  width: 60px;
  height: 60px;
  padding: 20px;
`;

export const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  && span {
    font-size: 1rem;
    font-weight: 700;
  }
`;
