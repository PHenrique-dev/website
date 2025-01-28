import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import Item from '../Components/Items/Items'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import './CSS/Catalogo.css'


const Catalogo = (props) => {
    const {all_products} = useContext(HomeContext)
  return (
    <div className='catalogo'>
      <h1>Catálogo</h1>
      <hr/>
      <div className="catalogo-indexSort">
              <p>
                <span>Mostrando 1-12</span> de 35 produtos
              </p>
              <div className="catalogo-sort">
                Classificar por <img src={dropdown_icon} alt="" />
              </div>
            </div>
      <div className="catalogo-products">
        {all_products.map((item, i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <div className="catalogo-loadmore">
        Ver mais...
      </div>
      </div>
  )
}

export default Catalogo
