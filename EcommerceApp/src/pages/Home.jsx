import React, { useEffect } from "react";
fetchProductosByFiltros;

import { ProductList } from "../Productos/Components/ProductList";
import { useProductosStore } from "../Hooks/useProductosStore";
import { fetchProductosByFiltros } from "../Filtros/helpers/fetchProductosByFiltros";
import { useFiltrossStore } from "../Hooks/useFiltrosStore";

export const Home = () => {
  const { products, startLoadingProducts} =
    useProductosStore();


  useEffect(() => {
    startLoadingProducts();
    console.log("SE LLAMA A LA API PARA CARGAR LOS PRODUCTOS");
  }, []);



  return (
    <>
      <h5 className="text-center mb-2">Todos los productos</h5>
      <ProductList products={products} />
    </>
  );
};
