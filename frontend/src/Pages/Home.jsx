import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <NewCollections/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
