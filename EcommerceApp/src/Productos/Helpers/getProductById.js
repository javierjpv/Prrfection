import React from 'react'
import { useProductosStore } from '../../Hooks/useProductosStore';


export const getProductById = (id=1) => {
    //se accede a products gracias a redux,cada vez que se ha echo una llamada a /productos  se ha actualizado
    const {products} = useProductosStore();

    try {
        return products.find((product)=>product.id==id)
    } catch (error) {
        throw error;
    }


}
