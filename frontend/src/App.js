import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Navbar/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import CatalogoCategory from './Pages/CatalogoCategory'
import Catalogo from './Pages/CatalogoCategory'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/Cart'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<CatalogoCategory category='men'/>}/>
        <Route path='/womens' element={<CatalogoCategory category='women'/>}/>
        <Route path='/catalogo' element={<Catalogo/>}>
          <Route path=':catalogoID' element={<Catalogo/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
