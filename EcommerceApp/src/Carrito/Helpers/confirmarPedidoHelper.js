import React from 'react'

export const confirmarPedidoHelper = async (carrito) => {
 

    //Al haber guardado el token en el local starage (esto se hace cada vez que nos registramos o nos logeamos)
    //se debe extaer el token para poder usarlo en la solicitud
    const token=localStorage.getItem('token')

    const url = `http://127.0.0.1:8000/api/confirmarPedido`;

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ carrito }),
      };


try {
    const response = await fetch(url, options);
    const data = await response.json();
  
    if (response.ok) {
      // Pedido confirmado correctamente
      // Se puede mostrar un mensaje de éxito al usuario
      // Redirigir al usuario a una página de agradecimiento o historial de pedidos

      console.log(data)
      return data;
    } else {
      // Error al confirmar el pedido
      // Mostrar un mensaje de error al usuario con la información del error
      throw new Error(data.error);
    }
  } catch (error) {
    // Manejar errores de red o de la API
    console.error(error);
    throw error;
  }




}
