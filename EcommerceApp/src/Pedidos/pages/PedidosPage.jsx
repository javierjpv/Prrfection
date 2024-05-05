import React from 'react'
import { PedidosList } from '../components/PedidosList'

// pagina donde se muestarn los pedidos extraidos de redux
export const PedidosPage = () => {
  return (
    <>
    <h1 className='text-center mt-5'>PedidosPage</h1>
    
    <PedidosList/>
    
    </>
  )
}
