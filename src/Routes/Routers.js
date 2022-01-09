import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeCompanyPage } from "../Pages/HomeCompanyPage";
import { ProductCompanyPage } from "../Pages/ProductCompanyPage";
import { MapPage } from "../Pages/MapPage";
import { ProductListPage } from "../Pages/ProductListPage";
import { Navbar } from "../Components/Navbar/Navbar";
import { ListCompanyPage } from "../Pages/ListCompanyPage";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/empresa" element={<HomeCompanyPage />} />
          <Route path="/produto" element={<ProductCompanyPage />} />
          <Route path="/listaproduto" element={<ProductListPage />} />
          <Route path="/listaempresas" element={<ListCompanyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
