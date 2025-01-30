import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'

const Product = () => {
    
    const {all_products}= useContext(HomeContext)
    const { productId } = useParams()
    console.log("ID do produto na URL:", productId);
    const product = all_products?.find((e) => e.id === Number(productId));
    if (!product) {
        return <div>Produto não encontrado.</div>;
      }
      return (
    <div>
      <Breadcrums product={product}/>
    </div>
  )
}

export default Product
