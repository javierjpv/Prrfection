import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAddNewPedido, onDeletePedido, onloadPedidos,onClearPedidos} from '../Store/pedidos/pedidosSlice'
import { loadPedidosHelper } from '../Pedidos/helpers/loadPedidosHelper'

//Custom Hook para poder controlar todas las acciones relacionadas con el estado global de los pedidos 
//ademas de las peticiones al backend necesarias (el estado global dependera de las respuestas del backend).Uso redux para mantener un estado global
export const usePedidosStore = () => {

//Se extraen las funciones y propiedades gobales de los pedidos para poder usarlos
const {pedidos}=useSelector(state=>state.pedidos)
const dispatch=useDispatch();


const startLoadingPedidos=async ()=>{
   try {
    //Se realiza la peticion al backend para obteenr todos los pedidos
    const jsonData=await loadPedidosHelper()
    //Una vez recibidos los pedidos desde el backend, se guardaran en el estado global de pedidos (redux)
    dispatch(onloadPedidos(jsonData))
    console.log('se han cargado los pedidos')
    
   } catch (error) {
    console.log(error)
    throw error;
    
   }




}

const startClearingPedidos=()=>{
    //Se vacia el estado global de los pedidos(redux)
    dispatch(onClearPedidos());
}

//Se retornan las propiedades y funciones relacionadas con los pedidos
return {
    pedidos,
    startLoadingPedidos,
    startClearingPedidos
    
}




}