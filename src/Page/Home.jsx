import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Value from '../Components/Value'
import Listing from '../Components/Listing'
import Reviews from '../Components/Reviews'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Latest_News from '../Components/Latest_News'
import Footer from '../Components/Footer'
import Agents from '../Components/Agents'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Listing/>
      <About/>
      <Value/>
      <Agents/>
      <Reviews/>
      <Contact/>
      <Latest_News/>
      <Footer/>
    </div>
  )
}

export default Home
