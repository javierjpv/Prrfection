import React from 'react'
import { CarritoItem } from './CarritoItem'
import { useCarritoStore } from '../../Hooks/useCarritoStore'
import { confirmarPedidoHelper } from '../Helpers/confirmarPedidoHelper'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../Hooks/useAuthStore'


export const CarritoList = ({carrito}) => {

//Extraigo los datos del usuario actual gracias a redux
const {user}= useAuthStore();
const navigate=useNavigate()


//Al hacer submit en confirmar carrito
//Me llevara a la ruta /auth si no estoy atenticado y si lo estoy me llevara a la ruta /checkout/adress
  const handleConfirmCart=()=>{
    user.userState!=='AUTHENTICATED'?(navigate('/auth')):''
    user.userState==='AUTHENTICATED'?(navigate('/checkout/adress')):''
    
  }


  return (
    <>
    <p className='text-center'>CarritoList</p>
    
   
   {/* Se recorre cada producto del carrito y se le pasa al componente CarritoItem cada objeto product */}

    {carrito.map((product)=>{
     
     return(
        <div key={product.id}>
            
          <CarritoItem product={product}/>

        </div>
     )  
        
    })
   
    }

    {
      carrito.length>0? (<div className="text-center mt-5 mb-5">
      <button onClick={handleConfirmCart} className='btn btn-primary text-center'>Confirmar Pedido</button>
      </div>):<p className='text-danger text-center'>No hay productos en la cesta</p>
    }

    </>
  )
}
