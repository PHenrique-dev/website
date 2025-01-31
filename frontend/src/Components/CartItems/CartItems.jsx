import React, { useContext } from 'react'
import './CartItems.css'
import { HomeContext } from '../../Context/HomeContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeToCart } = useContext(HomeContext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Produtos</p>
        <p>Titulo</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr/>
      {all_products.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div key={e.id}>
                        <div className="cartitems-format">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>R${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>R${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeToCart(e.id)}} alt="" />
                        </div>
                        <hr/>
                    </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Valor Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>R${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Taxa de envio</p>
                    <p>free</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>R${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROSSIGA PARA O CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
