import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAddress,
  clearPayment,
  clearShipping,
  setAddress,
  setPayment,
  setShipping,
} from "../Store/checkout/checkoutSlice";

//Custom Hook para conocer el estado global de cada formulario del checkout
export const useCheckoutStore = () => {
  const { checkout } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  //Se debe pasar un objeto adress y se actualizara el estado global del checkout
  const startSetAdress = (adress) => {
    dispatch(setAddress(adress));
  };
  //Se debe pasar un objeto shiping y se actualizara el estado global del checkout
  const startSetShiping = (shiping) => {
    dispatch(setShipping(shiping));
  };
    //Se debe pasar un objeto payment y se actualizara el estado global del checkout
  const startSetPayment = (payment) => {
    dispatch(setPayment(payment));
  };
//se vacia el contenido de adress en el estado global
  const startClearAdress = () => {
    dispatch(clearAddress());
  };
  //se vacia el contenido de shipping en el estado global
  const startClearShiping = () => {
    dispatch(clearShipping());
  };
  //se vacia el contenido de payment en el estado global
  const startClearPayment = () => {
    dispatch(clearPayment());
  };

  //se retornan las propiedades y funciones correspondientes al checkout
  return {
    checkout,
    startSetAdress,
    startSetShiping,
    startSetPayment,
    startClearAdress,
    startClearShiping,
    startClearPayment,
  };
};
