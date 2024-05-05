import React from 'react'
import { Login } from '../Components/Login'
import { Register } from '../Components/Register'
import { useAuthStore } from '../../Hooks/useAuthStore'
import { Navigate } from 'react-router-dom'

//Tengo una pagina de autorizacion la cual contiene 2 elementos (Login y Register) esta pagina y
//estos elemntos soplo se mostraran si el usuario no esta autenticado ,una vez haya pasado el login o el register con 
//exito esto dejara de mostrarse y se le redirigira a la ruta /    (que es el Home)

export const Auth = () => {
  const {user } = useAuthStore();

  return (
    <>
    <h1 className='text-center'>Auth</h1>
    <div className='container '>
     
      

    {user.userState === "AUTHENTICATED" ? (
        <Navigate to="/" />
        ) : (
          <>
    
          <Login/>
          <Register/>
          
          </>
        )}


    </div>

    
    
    </>
  )
}
