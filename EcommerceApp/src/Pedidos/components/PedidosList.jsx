// PedidosList.js

import React, { useEffect, useState } from "react";
import { usePedidosStore } from "../../Hooks/usePedidosStore";
import { PedidosItem } from "./PedidosItem";


export const PedidosList = () => {

  //Se extrae la variable pedidos que se opbtiene gracias a un Slice de redux
  const {
    pedidos,
    startLoadingPedidos,
  } = usePedidosStore();


  //esta funcion extrae los pedidos que ha realizado segun el usuario que este autenticado
  //una vez extraidos desde la base de datos estos se usaran en redux para rellenar (pedidos) el cual es un slice de redux 
  const loadPedidos = async () => {
    try {
        await startLoadingPedidos();
        
    } catch (error) {
      throw error;
       
    }
  };
  
  

  //Se llama a la funcion loadPedidos solo cuando se entra por primera vez a esta pagina o cuando se da a refrescar
  useEffect(() => {

    try {
      loadPedidos();
    } catch (error) {
      console.log('no autorizado')
    }
    
  }, []);



  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Pedidos</h1>
      { pedidos.length>0 ?(pedidos.map((pedido) => (
        //se recorre el array de pedidos procedentes de redux y cada pedido se pasa al componente pedido como prop 

        <PedidosItem key={pedido.id} pedido={pedido} />
      )) ) :('no hay pedidos')  }
    </div>
  );
  
};
