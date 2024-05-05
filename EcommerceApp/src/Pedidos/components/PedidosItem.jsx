// PedidosItem.js

import React from 'react';

//Cada objeto pedido que previamente ha sido enviado como prop, se recibe y extraemos de el lo que necesitamso
export const PedidosItem = ({ pedido }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Pedido</h5>
        <p className="card-text">ID del pedido: {pedido.id}</p>
        <p className="card-text">Fecha del pedido: {pedido.fechaPedido}</p>
        <p className="card-text">Estado del pedido: {pedido.estadoPedido}</p>
        <p className="card-text text-primary">Usuario: {pedido.usuario.email}</p>
        {/* Agrega más campos según sea necesario */}
      </div>
    </div>
  );
};
