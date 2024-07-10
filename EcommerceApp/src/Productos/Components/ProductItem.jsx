import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCarritoStore } from "../../Hooks/useCarritoStore";

//Se recibe un objeto product  y mostaramos lo necesario en cada uno
export const ProductItem = ({product}) => {



  //se extrae la funcion para añadir productos al carrito gracias a redux
  const {addProductCart,carrito}=useCarritoStore();
     

  const handleAddCart=()=>{
      const existeEnCarrito=carrito.findIndex((producto)=>producto.id===product.id);

      if (existeEnCarrito!=-1 &&carrito[existeEnCarrito].cantidad<carrito[existeEnCarrito].stock){
        console.log(`El producto con el id:${carrito[existeEnCarrito].id} ya existe en el carrito`)
        console.log(`El producto tiene la cantidad:${carrito[existeEnCarrito].cantidad}`)
        console.log(`El producto tiene la cantidad:${carrito[existeEnCarrito].cantidad}`)
        addProductCart(product)
      }else if(existeEnCarrito==-1){
        addProductCart(product)
      }

     
      

  }


  console.log(`el producto:${product.id} se renderiza`)  
  return (
    <div className="card h-100 bg-light" style={{ color: '#333333'}}>
      <div className="card-body d-flex flex-column justify-content-between ">
        <h5 className="card-title">{product.nombre}</h5>
        
        <div className="col-md-5">
        {/* se accede a product.imagens[0].imageFile  ya que esto nos permite acceder a la foto mediante base64*/}
        <img className="card-img-top" src={`${product.imagens[0].imageFile}`} alt={`${product.imagens[0].imageFile}`} />
        </div>

        <p className="card-text">{product.descripcion}</p>
        <p className="card-text">
          Precio: <strong>${product.precio}</strong>
        </p>
        {product.stock<=0?(<div className="alert alert-warning" role="alert">
          ¡Producto agotado!
        </div>):(<p className="card-text">Stock: {product.stock}</p>)}
        
        <p className="card-text">Categoría: {product.categoria.nombre}</p>
        <div>
          <button disabled={product.stock<=0}
            onClick={handleAddCart}
            className="btn btn-primary text-white mr-2"
            
          >
            Añadir al carrito
          </button>
          <Link to={`/product/${product.id}`} className="btn btn-link">
            Más...
          </Link>

        </div>
      </div>
    </div>
  );

};
