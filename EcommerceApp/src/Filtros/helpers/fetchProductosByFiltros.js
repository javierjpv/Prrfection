//Funcion que se encarga de hacer una peticion al backend para filtrar los productos segun los filtros
//se le debe pasar un array de objetos filtro
export const fetchProductosByFiltros = async (filters) => {
  try {
    //Se realiza la peticion al backend y se le deben enviar los filtters an el body de la peticion
    const response = await fetch("http://localhost:8000/filtrado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    });

    if (!response.ok) {
      throw new Error("Error al obtener productos filtrados");
    }
    //Si la respuesta es correcta se devolveran los productos
    const productos = await response.json();
    console.log("respuesta de la api /filtrado:", productos);
    return productos;
  } catch (error) {
    throw new Error("Error al obtener productos filtrados");
  }
};
