import React from 'react'

export const filtrosHelper = async (criterio) => {
    const url = `http://127.0.0.1:8000/${criterio}`;
try {
    const response = await fetch(url);
    const data = await response.json();
  
    if (response.ok) {
      // Pedido confirmado correctamente
      // Se puede mostrar un mensaje de éxito al usuario
      // Redirigir al usuario a una página de agradecimiento o historial de pedidos

      console.log('FILTRSOHELPERRRRRRRRRRRRR'+data)
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
