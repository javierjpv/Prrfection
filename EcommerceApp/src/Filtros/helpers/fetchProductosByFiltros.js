//Funcion que se encarga de hacer una peticion al backend para filtrar los productos segun los filtros
//se le debe pasar un array de objetos filtro

export const fetchProductosByFiltros = async (filters) => {
console.log('filters',filters)
  try {
    const queryString = new URLSearchParams(filters).toString();
    //  window.history.replaceState({}, '', `${window.location.pathname}?${queryString}`)
    const response = await fetch(`http://localhost:8000/productos?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    });

    if (!response.ok) {
      throw new Error("Error al obtener productos filtrados");
    }
    //Si la respuesta es correcta se devolveran los productos
    const productos = await response.json();
    console.log("respuesta de fetchProductosByFiltros:", productos);
    return productos;
  } catch (error) {
    throw new Error("Error al obtener productos filtrados");
  }
};
