import React from "react";
import { useCarritoStore } from "../../Hooks/useCarritoStore";
import { CarritoList } from "../Components/CarritoList";

export const Carrito = () => {

  //Se accede a carrito garcias a redux
  const { carrito} = useCarritoStore();


  return (
    <>
      <h1 className="text-center">Mi cesta</h1>
      
      {/* Al componente CarritoList se le pasa como argumento el carrito, el cual es un array de objetos */}
      {<CarritoList carrito={carrito}/>}
    </>
  );
};


