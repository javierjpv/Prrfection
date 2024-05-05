import React from 'react'

export const loadPedidosHelper = async () => {

 
  //se intenta extraer el token del localstorage (previamente debiste llamar a api/login)

    const token=localStorage.getItem('token')
    if (!token) {
      console.log('NO HAY TOKEN')
      throw new Error('No se ha encontrado un token de autenticación.');
  }
  
    const url = `http://127.0.0.1:8000/api/pedidos`;
    
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        
        
      };


try {
    const response = await fetch(url, options);
    const data = await response.json();
  
    if (response.ok) {
      // Pedido confirmado correctamente
      // Se puede mostrar un mensaje de éxito al usuario
      // Redirigir al usuario a una página de agradecimiento o historial de pedidos

      return data;
    } else {
      // Error al confirmar el pedido
      // Mostrar un mensaje de error al usuario con la información del error
      throw new Error(data.error)
   
    }
  } catch (error) {
    // Manejar errores de red o de la API
  
    console.log(error)
    throw error;
  }
}
