import { configureStore } from '@reduxjs/toolkit'
import productosReducer from './productos/productosSlice'
import carritoReducer from './carrito/carritoSlice'
import authReducer from './auth/authSlice'
import pedidosReducer from './pedidos/pedidosSlice'
import checkoutReducer from './checkout/checkoutSlice'
import filtrosReducer from './filtros/filtrosSlice'
import commentsReducer from './comments/commentsSlice'
//configuracion necesaria para redux
export default configureStore({
  reducer: {
    productos: productosReducer,
    pedidos:pedidosReducer,
    carrito: carritoReducer,
    auth:authReducer,
    checkout:checkoutReducer,
    filtros:filtrosReducer,
    comments:commentsReducer
  }
})

