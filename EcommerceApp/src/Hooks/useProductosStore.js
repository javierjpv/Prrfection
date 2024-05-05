import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onloadProducts,
} from "../Store/productos/productosSlice";

//Custom hook para controlar el estado global de los productos.Algunas veces el estado global cambia dependiendo de las respuestas del backend
export const useProductosStore = () => {
  //Se obtienen los productos y sus funciones del estado global de redux
  const { products } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  const startSettingProducts = (products) => {
    dispatch(onloadProducts(products));
  };

  const startLoadingProducts = async () => {
    try {
        //Se hace la peticion al backend para obtener los productos
    const response = await fetch("http://127.0.0.1:8000/productos");
    const jsonData = await response.json();
    //Una vez obtenidos los productos,estos se guardan en el estado global de los productos
    dispatch(onloadProducts(jsonData));
      
    } catch (error) {
      throw error;
    }

  };

  //Se retornan las funciones y propiedades correspondientes a los productos
  return {
    products,
    startLoadingProducts,
    startSettingProducts,
  };
};

