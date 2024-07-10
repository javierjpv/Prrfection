import React, { useEffect } from "react";
fetchProductosByFiltros;

import { ProductList } from "../Productos/Components/ProductList";
import { useProductosStore } from "../Hooks/useProductosStore";
import { fetchProductosByFiltros } from "../Filtros/helpers/fetchProductosByFiltros";
import { useFiltrossStore } from "../Hooks/useFiltrosStore";

export const Home = () => {
  console.log("Estas en el INICIO");
  const { products, startLoadingProducts, startSettingProducts } =
    useProductosStore();


  useEffect(() => {
    startLoadingProducts();
    console.log("SE LLAMA A LA API PARA CARGAR LOS PRODUCTOS");
  }, []);



  return (
    <>
      <h1 className="text-center mb-2">Todos los productos</h1>
      <ProductList products={products} />
    </>
  );
};
