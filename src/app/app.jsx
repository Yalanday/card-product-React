import React from "react";
import { products, main } from "/src/mock";
import ProductPage from "/src/product-page/product-page";
import Catalog from "/src/catalog/catalog";
import Layout from "/src/layout/layout";
import MainPage from "/src/main-page/main-page";


import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProducrOr404({ products }) {
  const { code } = useParams();
  const product = products.find((product) => product.code.toString() === code);
  return product ? (
    <ProductPage product={product} />
  ) : (
    <h1>Страница не найдена</h1>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage data={main} />} />
          <Route path="catalog" element={<Catalog products={products} />} />
          <Route path="product">
            <Route
              path=":code"
              element={<ProducrOr404 products={products} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
