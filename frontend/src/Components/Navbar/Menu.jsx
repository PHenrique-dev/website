import React, { useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {

  const [menu,setMenu] = useState("home");


  return (
    <div className='menu'>
      <ul className="nav-menu">
        <li onClick={()=> {setMenu("home")}}><Link style={{textDecoration: 'none', color: '#404950'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("catalogo")}}><Link style={{textDecoration: 'none', color: '#404950'}} to='/catalogo'>Catalogo</Link>{menu==="catalogo"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("mens")}}><Link style={{textDecoration: 'none', color: '#404950'}} to='/mens'>Masculino</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration: 'none', color: '#404950'}} to='/womens'>Feminino</Link>{menu==="womens"?<hr/>:<></>}</li>
      </ul>
    </div>
  )
}

export default Menu
