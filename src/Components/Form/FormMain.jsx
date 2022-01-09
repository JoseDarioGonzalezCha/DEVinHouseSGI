import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FormMainStyled,
  FormDivStyled,
  StyledLabel,
  StyledInput,
  DivStyled,
  ButtonStyled,
} from "./FormMain.styles";

const initialValue = {
  racaoSocial: "",
  nomeFantasy: "",
  cnpj: 0,
  email: "",
  cep: 0,
  logradouro: "0",
  numero: "",
  bairro: "",
  cidade: "",
  complemento: "",
};

export const FormMain = () => {
  const [values, setValues] = useState(initialValue);
  const navigate = useNavigate();

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:5000/empresas", values).then((response) => {
      navigate("/listaempresas");
    });
  }

  return (
    <FormMainStyled>
      <h3>Cadastrar empresa</h3>
      <form onSubmit={onSubmit}>
        <FormDivStyled>
          <StyledLabel htmlFor="racaoSocial">Ração Social</StyledLabel>
          <StyledInput
            id="racaoSocial"
            name="racaoSocial"
            type="text"
            onChange={onChange}
          />
          <StyledLabel htmlFor="nomeFantasy">Nome Fantasia</StyledLabel>
          <StyledInput
            id="nomeFantasy"
            name="nomeFantasy"
            type="text"
            onChange={onChange}
          />
          <StyledLabel htmlFor="cnpj">CNPJ</StyledLabel>
          <StyledInput
            id="cnpj"
            name="cnpj"
            type="number"
            onChange={onChange}
          />
          <StyledLabel htmlFor="cnpj">EMAIL</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            type="email"
            onChange={onChange}
          />
        </FormDivStyled>
        <h3>Endereço</h3>
        <DivStyled>
          <StyledLabel htmlFor="cep">CEP</StyledLabel>
          <StyledInput id="cep" name="cep" type="number" onChange={onChange} />
          <StyledLabel htmlFor="logradouro">Logradouro</StyledLabel>
          <StyledInput
            id="logradouro"
            name="logradouro"
            type="text"
            onChange={onChange}
          />
          <StyledLabel htmlFor="numero">Número</StyledLabel>
          <StyledInput
            id="numero"
            name="numero"
            type="number"
            onChange={onChange}
          />
          <StyledLabel htmlFor="bairro">Bairro</StyledLabel>
          <StyledInput
            id="bairro"
            name="bairro"
            type="text"
            onChange={onChange}
          />
          <StyledLabel htmlFor="cidade">Cidade</StyledLabel>
          <StyledInput
            id="cidade"
            name="cidade"
            type="text"
            onChange={onChange}
          />
          <StyledLabel htmlFor="complemento">Complemento</StyledLabel>
          <StyledInput
            id="complemento"
            name="complemento"
            type="text"
            onChange={onChange}
          />
        </DivStyled>
        <div>
          <ButtonStyled type="submit">Cadastrar</ButtonStyled>
        </div>
      </form>
    </FormMainStyled>
  );
};
