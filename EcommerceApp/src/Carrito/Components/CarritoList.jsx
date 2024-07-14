import React from 'react'
import { CarritoItem } from './CarritoItem'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../Hooks/useAuthStore'
import { MdDeleteOutline } from "react-icons/md";
import { useCarritoStore } from '../../Hooks/useCarritoStore';


export const CarritoList = ({carrito}) => {

//Extraigo los datos del usuario actual gracias a redux
const {user}= useAuthStore();
const{resetCart}=useCarritoStore();
const navigate=useNavigate()


//Al hacer submit en confirmar carrito
//Me llevara a la ruta /auth si no estoy atenticado y si lo estoy me llevara a la ruta /checkout/adress
  const handleConfirmCart=()=>{
    user.userState!=='AUTHENTICATED'?(navigate('/auth')):''
    user.userState==='AUTHENTICATED'?(navigate('/checkout/adress')):''
    
  }
  const handleResetCart=()=>{
    resetCart();
  }
  


  return (
    <>

   
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
      carrito.length>0? (<div className="text-center mt-5 mb-5 d-flex flex-column align-items-between">
        <div className='d-flex justify-content-start'>
        <button onClick={handleResetCart}  className='btn btn-danger text-center mb-5 '>  <MdDeleteOutline size={20} color="white"/>Vaciar Cesta</button>
        </div>
        <div>
        <button onClick={handleConfirmCart} className='btn btn-primary text-center w-100'>Confirmar Pedido</button>
        </div>

      </div>):<p className='text-danger text-center mt-5 pt-5 pb-5'>No hay productos en la cesta</p>
    }

    </>
  )
}
