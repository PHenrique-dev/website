import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Navbar/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import CatalogoCategory from './Pages/CatalogoCategory'
import Catalogo from './Pages/Catalogo'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<CatalogoCategory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<CatalogoCategory banner={women_banner} category='women'/>}/>
        <Route path='/catalogo' element={<Catalogo category='catalogo'/>}>
          <Route path=':catalogoID' element={<Catalogo/>}/>
        </Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
