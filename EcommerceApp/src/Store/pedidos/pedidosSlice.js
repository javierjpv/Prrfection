import { createSlice } from "@reduxjs/toolkit";
export const pedidosSlice = createSlice({
  //Se coloca su nombre y su estado inicial 
    name: "pedidos",
    initialState: {
      isLoadingPedidos: true,
      pedidos: [], // Inicializar como un array vacío
    },
    reducers: {
      //Se añade un objeto al array de pedidos
      onAddNewPedido: (state, action) => {
        state.pedidos.push(action.payload);
      },
      //se elimina un objeto del array pedidos, en action.payload se pasara un id
      onDeletePedido: (state, action) => {
        state.pedidos = state.pedidos.filter((pedido) => pedido.id != action.payload);
      },
      
      onloadPedidos: (state, action) => {
        state.isLoadingPedidos = false;
        state.pedidos = action.payload;
      },
//Se limpian los pedidos
      onClearPedidos: (state, action) => {
        state.isLoadingPedidos = false;
        state.pedidos =[]
      },

    },
  });
  
//se exponen las fuinciones que seran usadas en su respectivo CustomHook (en la carpeta Hooks)
export const { onAddNewPedido, onDeletePedido,onloadPedidos,onClearPedidos } = pedidosSlice.actions;
export default pedidosSlice.reducer;
