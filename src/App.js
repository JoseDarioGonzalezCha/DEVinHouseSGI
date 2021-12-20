import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Loging } from "./Pages/Loging";
import HomeCompanyPage from "./Pages/HomeCompanyPage";
import ProductCompanyPage from "./Pages/ProductCompanyPage";
import MapPage from "./Pages/MapPage";
import ProductListPage from "./Pages/ProductListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeCompanyPage />} />
          <Route path="/produto" element={<ProductCompanyPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/listaproduto" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
