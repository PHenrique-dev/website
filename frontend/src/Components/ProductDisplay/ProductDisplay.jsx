import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { HomeContext } from '../../Context/HomeContext'

const ProductDisplay = (props) => {
    const {product} = props
    const { addToCart } = useContext(HomeContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="product-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-rigth-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(1345)</p>
        </div>
        <div className="productdisplay-prices">
            R${product.new_price}
        </div>
        <div className="productdisplay-description">
            Este conjunto feminino infantil é perfeito para as meninas que adoram estar na moda com muito conforto.
            <br/>
            Composição: 100% Algodão<br/>
            Cores disponíveis: Rosa, azul, lilás, e outras opções vibrantes<br/>
            Tamanhos: Disponível em tamanhos para crianças de 2 a 8 anos<br/>
            Detalhes: Blusa com estampa divertida e saia ou calça com elástico ajustável<br/>
            Ideal para: Passeios, festas, e momentos de diversão
        </div>
        <div className="productdisplay-size">
            <h1>Selecione o tamanho:</h1>
            <div className="productdisplay-sizes">
                <div>P</div>
                <div>M</div>
                <div>G</div>
                <div>GG</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Adicionar ao Carrinho</button>
        <p className='productdisplay-category'><span>Categoria: </span>Feminino, Camiseta</p>
        <p className='productdisplay-category'><span>Tags: </span>Moderno, Lançamento</p>
      </div>
    </div>
  )
}

export default ProductDisplay
