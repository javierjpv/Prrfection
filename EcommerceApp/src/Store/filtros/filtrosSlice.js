import { createSlice } from "@reduxjs/toolkit";

export const filtrosSlice = createSlice({
  //Colocamos su nombre y su estado inicial
    name: "filtros",
    initialState: {
      isLoadingFiltros: true,
      filtros: [
        
      ], // Inicializar como un array vacío
    },
    reducers: {
      //Cada parametro que pasemos a traves de action.payload sera un objeto con una clave y un valor (ejemplo: categoria:1 )
      onAddNewFiltro: (state, action) => {
        const index = state.filtros.findIndex(filtro => {
          const [newKey] = Object.keys(action.payload);
          const [existingKey] = Object.keys(filtro);
          return newKey === existingKey;
        });
  
        if (index !== -1) {
          // Si ya existe un filtro con la misma clave, actualiza su valor
          state.filtros[index] = action.payload;
        } else {
          // Si no existe, agrega el nuevo filtro al array de filtros
          state.filtros.push(action.payload);
        }
      },//pasar un argumento en el action.payload y mediante este
      onDeleteFiltro: (state, action) => {
        const keyDelete = action.payload; // Clave del filtro que se desea eliminar
      
        state.filtros = state.filtros.filter(filtro => {
          // Mantenemos los filtros cuya clave no coincida con la que queremos eliminar
          return !filtro.hasOwnProperty(keyDelete);
        });
      },
      
      onloadFiltros: (state, action) => {
        state.isLoadingFiltros = false;
        state.filtros = action.payload;
      },
      //Se usara para borrar los filtros
      onClearFiltros: (state) => {
        state.isLoadingFiltros = false;
        state.filtros =[]
      },

    },
  });
  
//Se exponen las funciones para poder ser usadas en su respectivo CustomHokok (en la carpeta Hooks)
export const { onAddNewFiltro, onDeleteFiltro,onloadFiltros,onClearFiltros } = filtrosSlice.actions;
export default filtrosSlice.reducer;
