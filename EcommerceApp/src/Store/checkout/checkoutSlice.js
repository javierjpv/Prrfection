import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  //Le ponemos el nombre y su estado inicial
  name: "checkout",
  initialState: {
    checkout:{
    address: {},
    shipping: {},
    payment: {},
    }
  },
  //Estos reducers iran usandose cada vez que avancemos en las paginas de checkout para tener siempre estos datos a mano
  reducers: {
    setAddress(state, action) {
      state.checkout.address = action.payload;
    },
    setShipping(state, action) {
      state.checkout.shipping = action.payload;
    },
    setPayment(state, action) {
      state.checkout.payment = action.payload;
    },
    clearAddress(state) {
      state.checkout.address = {};
    },
    clearShipping(state) {
      state.checkout.shipping = {};
    },
    clearPayment(state) {
      state.checkout.payment = {};
    },
  },
});

//Se exponen las funciones para poder ser usadas en su respectivo Custom Hook (en la carpeta Hooks)
export const {
  setAddress,
  setShipping,
  setPayment,
  clearAddress,
  clearShipping,
  clearPayment,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
