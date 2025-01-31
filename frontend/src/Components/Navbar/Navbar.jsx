import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/435762163_2822109891280408_7450111231118052636_n-removebg-preview.ico'
import { FaRegUserCircle } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { HomeContext } from '../../Context/HomeContext';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { getTotalCartItems } = useContext(HomeContext)
  
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
              <FaRegUserCircle className='lgn'/>
              {
                isAuthenticated ?
                <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
                :
                <div className='btn'>
                <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
              }
      <div className="nav-login-cart">
        <Link to='/cart'><MdOutlineShoppingCart className='cart'/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
    
  )
}

export default Navbar
