import React, { useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";


const Menu = () => {
  const { user, isAuthenticated } = useAuth0();
  const [menu,setMenu] = useState("home");


  return (
    <div className='menu'>
      <ul className="nav-menu">
        <li onClick={()=> {setMenu("home")}}><Link style={{textDecoration: 'none', color: '#404950'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("catalogo")}}><Link style={{textDecoration: 'none', color: '#404950'}} to='/catalogo'>Catalogo</Link>{menu==="catalogo"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("mens")}}><Link style={{textDecoration: 'none', color: '#404950'}} to='/mens'>Masculino</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration: 'none', color: '#404950'}} to='/womens'>Feminino</Link>{menu==="womens"?<hr/>:<></>}</li>
      </ul>
      <div className="user_profile">
              {
                isAuthenticated ? 
                <>
                <div className='icon'>
                <CiUser />
                </div>
                <h2>{user.name}</h2>
                </>
                :
                <>
                </>
              }
            </div>
    </div>
  )
}

export default Menu
