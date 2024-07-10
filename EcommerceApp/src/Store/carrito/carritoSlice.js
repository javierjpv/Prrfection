import { createSlice } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
  //Le ponemos nombre y su estado inicial
  name: "carrito",
  initialState: {
    error:{},
    isLoadingCarrito: false,
    products: [],
    total:0,
  },
  reducers: {
    //Funcion para agregar nuevos productos al carrito
    onAddNewProduct: (state, action) => {
      let existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!existingProduct) {
        // Si el producto no existia se agregara al array products, en forma de objeto con su propiedad cantidad a 1 
        const newProduct = { ...action.payload, cantidad: 1 };
        state.products.push(newProduct);
      } else {
        //Si ese mismo producto ya existe en el carrito  se le sumara un 1 a su propiedad cantidad
        state.products.map((product) => {
          if (product.id === action.payload.id) {
            return product.cantidad++;
          }
        });
      }
      state.total= state.total+1

    },
    //Funcion para eliminar un producto del carrito
    onDeleteProduct: (state, action) => {
      state.products = state.products.map((product) => {
        //El producto se pasara en forma de objeto a traves del paytload
        //Se restara un producto si ya existe en el carrito, es decir se restara su propiedad cantidad
        if (product.id === action.payload.id) {
          let cantidad = product.cantidad;
          if (cantidad>0) {
            cantidad = cantidad - 1;
            const newProduct = { ...product, cantidad };
            return newProduct;
          }else{
            console.log('no se pueden eliminar mas productos con el mismo id')
          }

        } else {
          return product;
        }
      });
      state.total= state.total-1
   
    },
    //Esta funcion dejara el carrito vacio,se usara en la carpeta hooks tras haber realizado una llamada al backend en la cual se confirmara el pedido
    onConfirmCart:(state)=>{
      state.products=[]
    }
    
  },
});

export const { onAddNewProduct, onDeleteProduct,onConfirmCart} = carritoSlice.actions;
export default carritoSlice.reducer;
