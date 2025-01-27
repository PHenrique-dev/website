import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NOTICIAS</h2>
        <div className='hero-left-p'>
            <div className="hand-hand-icon">
                <p>NOVA</p>
                <img src={hand_icon} alt="" />
            </div>
        <p>COLEÇÃO</p>
        <p>PARA TODOS!</p>
        </div>
        <div className="hero-latest-btn">
            <div>Coleção mais recente!</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        {/*<img src={hero_image} alt="" />*/}
      </div>
    </div>
  )
}

export default Hero
