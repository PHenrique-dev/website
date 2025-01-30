import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
    
    const {all_products}= useContext(HomeContext)
    const { productId } = useParams()
    const product = all_products?.find((e) => e.id === Number(productId));
    if (!product) {
        return <div>Produto não encontrado.</div>;
      }
      return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product
