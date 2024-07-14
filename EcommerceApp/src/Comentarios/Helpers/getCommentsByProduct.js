import React from 'react'

export const getCommentsByProduct = async (productId) => {
    
      const url = `http://127.0.0.1:8000/commentsByProduct/${productId}`;
      
      const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          
          
        };
  
  
  try {
      const response = await fetch(url, options);
      const data = await response.json();
    
      if (response.ok) {
  
        return data;
      } else {
        // Mostrar un mensaje de error al usuario con la información del error
        throw new Error(data.error)
     
      }
    } catch (error) {
      // Manejar errores de red o de la API
    
      console.log(error)
      throw error;
    }
  }
  