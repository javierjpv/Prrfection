import React from "react";
import { useProductosStore } from "../../Hooks/useProductosStore";
import { useFiltrossStore } from "../../Hooks/useFiltrosStore";
import { fetchProductosByFiltros } from "../helpers/fetchProductosByFiltros";

export const FilterActions = () => {
  const { startClearingFiltros, filtros } = useFiltrossStore();
  const { startSettingProducts } = useProductosStore();

  const handleLimpiarFiltrosClick = () => {
    startClearingFiltros();
  };

  const handleObtenerProductosClick = async () => {
    try {
      // Convertir el array de filtros en un objeto combinado
      const filtrosObjeto = filtros.reduce((acc, filtro) => {
        return { ...acc, ...filtro };
      }, {});

      // Llamar al helper para obtener los productos aplicando los filtros seleccionados
      const productosFiltrados = await fetchProductosByFiltros(filtrosObjeto);
      startSettingProducts(productosFiltrados);

      // Aquí podrías hacer algo con los productos obtenidos, como mostrarlos en una lista
      console.log("Productos filtrados:", productosFiltrados);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      // Aquí puedes manejar el error según tus necesidades
    }
  };

  return (
    <>
      <button className="btn" onClick={handleLimpiarFiltrosClick}>
        Limpiar Filtros
      </button>
      <button className="btn" onClick={handleObtenerProductosClick}>
        Obtener Productos
      </button>
    </>
  );
};
