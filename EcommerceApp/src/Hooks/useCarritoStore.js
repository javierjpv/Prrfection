import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAddNewProduct, onDeleteProduct,onConfirmCart} from '../Store/carrito/carritoSlice'
import { confirmarPedidoHelper } from '../Carrito/Helpers/confirmarPedidoHelper'

//Custom Hook para manejar el estado global del carrito de compras
export const useCarritoStore = () => {

//Aqui se esta obteniendo el estado global del carrito y el dispacth para poder usar sus funciones

const {products}=useSelector(state=>state.carrito)
const {total}=useSelector(state=>state.carrito)
const carrito=products
const dispatch=useDispatch();


//A esta funcion se se pasa un objeto producto y lo metera dentro del estado global del carrito 
const addProductCart=(product)=>{
    dispatch(onAddNewProduct(product))
}

//A esta funcion se le pasara un objeto producto y se restara la cantidad 1 de ese producto si ya existe y si solo existe un producto con ese
//mismo id,ese producto se eliminara totalmente  
const deleteProductCart=(objeto)=>{


    dispatch(onDeleteProduct(objeto))


}

//Funcion que se encaraga de realizar una peticion al backend para confirmar el pedido y  se encaragara de vaciar el carrito del estado global
const confirmCart=(carrito)=>{
    try {
            //Se hara la peticion al backlend para confirmar el pedido
    confirmarPedidoHelper(carrito);
    //el estado global del carrito se modifica y pasara a tener 0 productos
    dispatch( onConfirmCart())
    } catch (error) {
        throw error;
    }

}
 
//se retornan las funciones y las propiedades relacionadas con el carrito
return {
    carrito,
    total,
    addProductCart,deleteProductCart,confirmCart,
}




}
