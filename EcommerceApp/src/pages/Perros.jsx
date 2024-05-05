import React, { useEffect } from "react";
import { FiltroComponent } from "../Filtros/components/FiltroComponent";
import { FilterActions } from "../Filtros/components/FilterActions";
import { ProductList } from "../Productos/Components/ProductList";
import { useProductosStore } from "../Hooks/useProductosStore";
import { useFiltrossStore } from "../Hooks/useFiltrosStore";
import { fetchProductosByFiltros } from "../Filtros/helpers/fetchProductosByFiltros";
import { ComponenteNuevo } from "../Filtros/components/ComponenteNuevo";

export const Perros = () => {
  const { products, startSettingProducts } = useProductosStore();
  const { filtros, startSavingFiltro, startClearingFiltros } =
    useFiltrossStore();

  const handleSaveFiltro = (idMascota) => {
    startSavingFiltro({ mascota: idMascota });
  };

  const handleObtenerProductos = async () => {
    try {
      // Convertir el array de filtros en un objeto combinado
      const filtrosObjeto = filtros.reduce((acc, filtro) => {
        return { ...acc, ...filtro };
      }, {});

      // Llamar al helper para obtener los productos aplicando los filtros seleccionados
      const productosFiltrados = await fetchProductosByFiltros(filtrosObjeto);
      startSettingProducts(productosFiltrados);

      // Aquí podrías hacer algo con los productos obtenidos, como mostrarlos en una lista
      console.log("Productos filtrados:", productosFiltrados);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      // Aquí puedes manejar el error según tus necesidades
    }
  };
  useEffect(() => {
    startClearingFiltros();
    handleSaveFiltro(2);
  }, []);

  useEffect(() => {
    handleObtenerProductos();
    console.log("SE LLAMA A LA API PARA CARGAR LOS PRODUCTOS");
  }, [filtros]);

  return (
    <>

      <h1 className="text-center">Perros</h1>

      <div className="bg-light" style={{ height: "200px"}} >
      <ComponenteNuevo clave='categoria'/>
      <ComponenteNuevo clave='marca'/>
      {/* <FiltroComponent clave="categoria" valores={[1, 2, 3, 4]} />
      <FiltroComponent clave="marca" valores={[1, 2, 3, 7]} /> */}
      <FiltroComponent clave="orden" valores={["precioDesc", "precioAsc"]} />
      </div>


      <ProductList products={products} />
    </>
  );
};
