import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../Helpers/getProductById'
import { ProductCard } from '../Components/ProductCard'

//pagina donde se muestran los productos dependiendo de su para bmetro id

export const ProductPage = () => {

  const {productId}=useParams()
  const product=getProductById(productId)
  return (
    <>
    ProductPage
    <ProductCard product={product}/>
    
    
    
    </>
  )
}
