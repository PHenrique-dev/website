import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newletter'>
      <h1>Receba ofertas exclusivas no seu Email</h1>
      <p>Assine nossa newsletter e fique atualizado</p>
      <div>
        <input type="email" placeholder='Seu Email' />
        <button>Inscreva</button>
      </div>
    </div>
  )
}

export default NewsLetter
