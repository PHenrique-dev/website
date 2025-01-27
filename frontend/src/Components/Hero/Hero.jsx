import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEWSSS</h2>
        <div className='hero-left-p'>
            <div className="hand-hand-icon">
                <p>NEW</p>
                <img src={hand_icon} alt="" />
            </div>
        <p>collections</p>
        <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
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
