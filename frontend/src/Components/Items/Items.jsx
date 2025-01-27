import React from 'react'
import './Item.css'

const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">
            R${props.new_price}
        </div>
      </div>
    </div>
  )
}

export default Items
