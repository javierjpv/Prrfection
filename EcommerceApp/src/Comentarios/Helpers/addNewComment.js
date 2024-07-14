import React from 'react'

export const addNewComment =async (comment) => {
    //Al haber guardado el token en el local starage (esto se hace cada vez que nos registramos o nos logeamos)
    //se debe extaer el token para poder usarlo en la solicitud
    const token=localStorage.getItem('token')

    const url = `http://127.0.0.1:8000/api/comments`;

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({comment}),
      };


try {
    const response = await fetch(url, options);
    const data = await response.json();
  
    if (response.ok) {
      // Se puede mostrar un mensaje de éxito al usuario
      console.log(data)
      return data;
    } else {
      // Mostrar un mensaje de error al usuario con la información del error
      throw new Error(data.error);
    }
  } catch (error) {
    // Manejar errores de red o de la API
    console.error(error);
    throw error;
  }


}
