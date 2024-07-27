import React from "react";
import { FiltroComponent } from "../Filtros/components/FiltroComponent";
import { ProductList } from "../Productos/Components/ProductList";
import { useProductosStore } from "../Hooks/useProductosStore";
import { fetchProductosByFiltros } from "../Filtros/helpers/fetchProductosByFiltros";
import { useFiltrossStore } from "../Hooks/useFiltrosStore";
import { useEffect } from "react";
import { ComponenteNuevo } from "../Filtros/components/ComponenteNuevo";
import { useSearchParams } from "react-router-dom";

export const Gatos = () => {
    const {products, startSettingProducts} = useProductosStore();
    const {filtros,startClearingFiltros,startSavingFiltro} = useFiltrossStore();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSaveFiltro=(idMascota)=>{
      startSavingFiltro({ mascota: idMascota })
    }

    const handleObtenerProductos = async () => {
        try {
          // Convertir el array de filtros en un objeto combinado
          const filtrosObjeto = filtros.reduce((acc, filtro) => {
            return { ...acc, ...filtro };
          }, {});
    
          // Llamar al helper para obtener los productos aplicando los filtros seleccionados
          const productosFiltrados = await fetchProductosByFiltros(filtrosObjeto);
          setSearchParams(filtrosObjeto)
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
        handleSaveFiltro(1);
      }, [])

     
      useEffect(() => {
        handleObtenerProductos();
        console.log('Se añade un nuevo filtro al objeto')
      }, [filtros])



  return (
    <>
      <h1 className="text-center" >Gatos</h1>
<div className="mb-4 bg-light rounded" style={{ height: ""}}>
<ComponenteNuevo clave='categoria'/>
      <ComponenteNuevo clave='marca'/>
      {/* <FiltroComponent clave="categoria" valores={[1, 2, 3, 4]} />
      <FiltroComponent clave="marca" valores={[1, 2, 3, 7]} /> */}
      <FiltroComponent clave="orden" valores={["precioDesc", "precioAsc"]} />

</div>



      <ProductList products={products}/>
    </>
  );
};
