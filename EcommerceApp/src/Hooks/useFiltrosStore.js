import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewFiltro,
  onClearFiltros,
  onDeleteFiltro,
  onloadFiltros,
} from "../Store/filtros/filtrosSlice";

//Custom Hook que se encarga de todas las acciones relacionadas con el estado global de los filtros
export const useFiltrossStore = () => {
  //Se extrae las propiedades y las funciones del estado global de los filtros (redux)
  const { filtros } = useSelector((state) => state.filtros);
  const dispatch = useDispatch();

//Funcion usada al guardar un filtro,el filtro debe ser un objeto con una propiedad y su valor (ejemplo: {categoria:3})
  const startSavingFiltro = (filtro) => {
    //cada objeto filtro pasado como argumento tendra una propiedad unica,no puedo haber filtros con la misma propiedad (solo habra una propiedad por objeto)
    dispatch(onAddNewFiltro(filtro));
  };

//Debes pasarle un objeto de tipo String ya que esta funcion se encarga de recibir
//la propiedad del objeto filtro que se quiere eliminar del array de filtros
  const startDeletingFiltro = (filterKey) => {
    dispatch(onDeleteFiltro(filterKey));
  };

  //Elimina todos los objetos dentro del array de filtros
  const startClearingFiltros = () => {
    dispatch(onClearFiltros());
  };
//Se retornan todas las propiedades y las funciones necesarias correspondientes a los filtros
  return {
    filtros,
    startSavingFiltro,
    startDeletingFiltro,
    startClearingFiltros,
  };
};
