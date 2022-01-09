import React, { useEffect, useState } from "react";
import axios from "axios";

import { CardProduct } from "../Components/CardProduct/CardProduct";

export const ProductListPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/produto").then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <div>
      {product.map((product) => {
        return <CardProduct product={product} />;
      })}
    </div>
  );
};
