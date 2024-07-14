import React, { memo } from "react";
import { useCarritoStore } from "../../Hooks/useCarritoStore";

export const ProductCard =React.memo( ({ product }) => {
  //se extrae la funcion para añadir producttos alñ carrito gracias a redux
  const { addProductCart, carrito } = useCarritoStore();
console.log('se renderiza product card')
  const handleAddCart = () => {
    const existeEnCarrito = carrito.findIndex(
      (producto) => producto.id === product.id
    );

    if (
      existeEnCarrito != -1 &&
      carrito[existeEnCarrito].cantidad < carrito[existeEnCarrito].stock
    ) {
      console.log(
        `El producto con el id:${carrito[existeEnCarrito].id} ya existe en el carrito`
      );
      console.log(
        `El producto tiene la cantidad:${carrito[existeEnCarrito].cantidad}`
      );
      console.log(
        `El producto tiene la cantidad:${carrito[existeEnCarrito].cantidad}`
      );
      addProductCart(product);
    } else if (existeEnCarrito == -1) {
      addProductCart(product);
    }
  };

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          {/* <img src={`public/images/products/${product.imagens[0].imageName}`} alt={`public/images/products/${product.imagens[0].imageName}`} /> */}
          {/* se accede a product.imagens[0].imageFile  ya que esto nos permite acceder a la foto mediante base64*/}
          <img
            className="card-img-top img-fluid"
            src={`${product.imagens[0].imageFile}`}
            alt={`${product.imagens[0].imageFile}`}
            style={{ height: '20rem', objectFit: 'contain' }}
          />
          <p className="card-text">{product.descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">
              <strong>Precio: </strong> €{product.precio}
            </p>

            {product.stock <= 0 ? (
              <div className="alert alert-warning" role="alert">
                ¡Producto agotado!
              </div>
            ) : (
              <p className="mb-0">
                <strong>Stock: </strong> {product.stock}
              </p>
            )}
          </div>
          <p className="card-text text-muted">
            <strong>Categoria: </strong> {product.categoria.nombre}
          </p>
        </div>

        <button disabled={product.stock<=0}  className="btn btn-primary" onClick={handleAddCart}>
          Añadir al Carrito
        </button>
        {/* <button className='btn btn-outline-secondary' onClick={handleDeleteCart}>Eliminar del carrito</button>
      <button className='btn btn-outline-primary' onClick={showCart}>Mostrar Carrito</button> */}
      </div>
    </>
  );
})
