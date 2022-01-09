import React from "react";

import {
  CardStyled,
  DescriptionStyled,
  ImgContainer,
  ImgStyled,
} from "./CardProduct.styles";

export const CardProduct = ({ product }) => {
  return (
    <CardStyled>
      <ImgContainer>
        <ImgStyled src={product.imgUrl} alt={product.nome} />
      </ImgContainer>
      <DescriptionStyled>
        <span>Nome: {product.nome}</span>
        <span>Custo Unitario: {product.custoUnitario}</span>
        <span>Descrição: {product.descricao}</span>
        <span>Fornecedro: {product.fornecedor}</span>
        <span>Grupo: {product.grupo}</span>
      </DescriptionStyled>
    </CardStyled>
  );
};
