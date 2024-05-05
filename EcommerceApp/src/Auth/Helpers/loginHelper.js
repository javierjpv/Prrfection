export const loginHelper = async (email, password) => {



  try {
  //Accedo a la ruta para poder realizar el login
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  
    //si la respuesta es ok, devolver los datos en formato json
    //si no hay errores se podra acceder a ellos mediante data.token y data.email
    if (response.ok) {
      const data = await response.json();

     
      return data
    } else {
      //si no es ok tambien devolver el json
      //Esto se hace por que en mi controlador de symfony siempre devuelvo un json
      //si hay errores se podra acceder a ellos mediante data.error
      const data = await response.json();

      return data
    }
  } catch (error) {
    throw error;
  
  }
  };
