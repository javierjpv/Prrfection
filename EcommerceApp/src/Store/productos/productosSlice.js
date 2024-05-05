import { createSlice } from "@reduxjs/toolkit";

//Nombres recomendados de reducers
//onAddNewEvent,onUpdateEvent,onDeleteEvent
//onLOadEvents
//Estos eventos se llevaran a cabo una vez la solicitud
//Hacia el backend es correcta

// const products: [
//     { id: 1, nombre: "arenero" },
//     { id: 2, nombre: "comida" },
//   ],

export const productosSlice = createSlice({
  name: "productos",
  initialState: {
    isLoadingProducts: true,
    products: [
 
    ],
  },
  reducers: {
    onAddNewProduct: (state, action) => {
      state.products.push(action.payload);
    },
    onDeleteProduct: (state, action) => {
      state.products.filter((producto) => producto.id != action.payload);
    },
    onloadProducts: (state, action) => {
      state.isLoadingProducts = false;
      state.products = action.payload;
    },
  },
});

export const { onAddNewProduct, onDeleteProduct,onloadProducts } = productosSlice.actions;
export default productosSlice.reducer;
