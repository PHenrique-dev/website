import React, { useContext } from 'react'
import './CSS/CatalogoCategory.css'
import { HomeContext } from '../Context/HomeContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Items'

const CatalogoCategory = (props) => {
  const {all_product} = useContext(HomeContext)
  return (
    <div className='catalogo-category'>
      <img className='catacategory-banner' src={props.banner} alt="" />
      <div className="catacategory-indexSort">
        <p>
          <span>Mostrando 1-12</span> de 35 produtos
        </p>
        <div className="catacategory-sort">
          Classificar por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="catacategory-products">
        {all_product.map((item, i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <div className="catacategory-loadmore">
        Ver mais...
      </div>
    </div>
  )
}

export default CatalogoCategory
