import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  ContainerStyled,
  FormStayled,
  FormStyledInput,
  FormStyledLabel,
  StyledButton,
} from "./FormProduct.styles";

const initialValue = {
  id: 1,
  imgUrl: "",
  nome: "",
  custoUnitario: 0,
  descricao: "",
  fornecedor: "",
  grupo: "",
};

export const FormProduct = () => {
  const [values, setValues] = useState(initialValue);
  const navigate = useNavigate();

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:5000/produto", values).then((response) => {
      navigate("/listaproduto");
    });
  }
  return (
    <ContainerStyled>
      <h3>Cadastrar Produto</h3>
      <FormStayled onSubmit={onSubmit}>
        <FormStyledLabel htmlFor="imgUrl">Url da imagem</FormStyledLabel>
        <FormStyledInput
          id="imgUrl"
          name="imgUrl"
          type="text"
          onChange={onChange}
        />
        <FormStyledLabel htmlFor="nome">Nome</FormStyledLabel>
        <FormStyledInput
          id="nome"
          name="nome"
          type="text"
          onChange={onChange}
        />
        <FormStyledLabel htmlFor="cutoUnitario">Cuto Unitario</FormStyledLabel>
        <FormStyledInput
          id="cutoUnitario"
          name="cutoUnitario"
          type="number"
          onChange={onChange}
        />
        <FormStyledLabel htmlFor="descricao">Descrição</FormStyledLabel>
        <FormStyledInput
          id="descricao"
          name="descricao"
          type="text"
          onChange={onChange}
        />
        <FormStyledLabel htmlFor="fornecedor">Fornecedor</FormStyledLabel>
        <FormStyledInput
          id="fornecedor"
          name="fornecedor"
          type="select"
          onChange={onChange}
        />
        <FormStyledLabel htmlFor="grupo">Grupo</FormStyledLabel>
        <FormStyledInput
          id="grupo"
          name="grupo"
          type="select"
          onChange={onChange}
        />
        <div>
          <StyledButton type="submit">Cadastrar</StyledButton>
        </div>
      </FormStayled>
    </ContainerStyled>
  );
};
