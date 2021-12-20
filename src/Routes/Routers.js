import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeCompanyPage } from "../Pages/HomeCompanyPage";
import { ProductCompanyPage } from "../Pages/ProductCompanyPage";
import { MapPage } from "../Pages/MapPage";
import { ProductListPage } from "../Pages/ProductListPage";
import { Navbar } from "../Components/Navbar/Navbar";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeCompanyPage />} />
          <Route path="/produto" element={<ProductCompanyPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/listaproduto" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
