import React from "react";
import { useCarritoStore } from "../../Hooks/useCarritoStore";

export const CarritoItem = ({ product }) => {
  //Se obtiene la funcion de alñadir o eliminar un producto de un pedido
  //Gracias a redux, en redux tendremos siempre actualizado el array de carrito para poder usarlo y realñizar acciones con el
  const { addProductCart, deleteProductCart } = useCarritoStore();

  //accion de borrar un producto del carrito
  const handleDeleteCart = () => {
    const objeto = { id: product.id, cantidad: 1 };
    deleteProductCart(objeto);
    console.log(product.id);
  };

  //accion de anadir un producto al carrito (siempre disponible gracias a redux)
  const handleAddCart = () => {
    addProductCart(product);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="card-img-top img-fluid"
            src={`${product.imagens[0].imageFile}`}
            alt={`${product.imagens[0].imageFile}`}
            style={{ height: '19rem', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">{product.descripcion}</p>
            <p className="card-text">
              <strong>Precio:</strong> €{product.precio}
            </p>
            <p className="card-text">
              <strong>Stock:</strong> {product.stock} unidades
            </p>
            <p className="card-text">
              <strong>Categoría:</strong> {product.categoria.nombre}
            </p>
            <p className="card-text text-danger">
              <strong>Cantidad:</strong> {product.cantidad}
            </p>
            <div className="btn-group" role="group">
              <button
                disabled={product.cantidad > 0 ? false : true}
                onClick={handleDeleteCart}
                type="button"
                className="btn btn-secondary"
              >
                -
              </button>
              <p className="mx-1"> {product.cantidad} </p>
              <button
                onClick={handleAddCart}
                disabled={product.stock == product.cantidad}
                type="button"
                className="btn btn-secondary"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
