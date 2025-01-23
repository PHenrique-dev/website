import React from 'react'
import './Navbar.css'
import logo from '../Assets/435762163_2822109891280408_7450111231118052636_n-removebg-preview.ico'
import { FaRegUserCircle } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className='search_box'>
              <input
              type="text"
              value=''
              placeholder="O que você deseja?"></input>
              <button><BiSearchAlt2/></button>
              </div>
      <div className="nav-login-cart">
      <FaRegUserCircle className='lgn'/>
        <button>Login</button>
        <MdOutlineShoppingCart className='cart'/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
    
  )
}

export default Navbar
