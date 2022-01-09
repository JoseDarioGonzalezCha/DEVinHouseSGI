import React, { useEffect, useState } from "react";
import axios from "axios";

import { CardCompany } from "../Components/CardCompany/CardCompany";

export const ListCompanyPage = () => {
  const [empresas, setEmpresa] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/empresas?_embed=endereco&_order=desc&_sort=id"
      )
      .then((response) => {
        setEmpresa(response.data);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: "30 auto",
        background: "#f1faee",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {empresas.map((empresa) => {
        return <CardCompany empresa={empresa} />;
      })}
    </div>
  );
};
