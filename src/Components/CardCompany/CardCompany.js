import React from "react";

import { CardCompanyStyled } from "./CardCompany.styles";

export const CardCompany = ({ empresa }) => {
  return (
    <CardCompanyStyled>
      <h1>Ração Social: {empresa.racaoSocial}</h1>
      <p>Nome Fantasia:{empresa.nomeFantasy}</p>
      <span>CNPJ:{empresa.cnpj}</span>
      <span>EMAIL:{empresa.email}</span>
      <div>
        <span>CEP:{empresa.endereco.cep}</span>
        <span>Logradouro:{empresa.endereco.logradouro}</span>
        <span>Numero:{empresa.endereco.numero}</span>
        <span>Bairro:{empresa.endereco.bairro}</span>
        <span>Cidade:{empresa.endereco.cidade}</span>
        <span>Complemento:{empresa.endereco.complemento}</span>
      </div>
    </CardCompanyStyled>
  );
};
