import React from 'react'
import "./Css/Navbar.css"
import { RiMenuFill } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className='navbar'>
   <section className="top_section">
    <p>Join/Login</p>
    <p><MdOutlineSettings/>Preferences</p>
   </section>
   <section className="mid_section">
      <h1>Home's.com</h1>
      <div className="links">
        <a href="#Header">Home</a>
        <a href="#About">About</a>
        <a href="#Listing">Listing</a>
        <a href="#Agents"> Agents</a>
        <a href="#News">News</a>
        <a href="#Reviews">Reviews</a>
        <a href="#Contact">Sell</a>
        <a href="#Contact">Contact Us Now</a>
      </div>
      <div className="res_nav_icon">
      <RiMenuFill className='icon'/>
      </div>
   </section>
   <section className="bottom_section">
    <div className="left">
      <h1>Find a home that suits your lifestyle.</h1>
    </div>
    <div className="right">
      <div className="links">
        <a href="" className='active'>Buy</a>
        <a href="">Rent</a>
        <a href="">Sell</a>
        <a href="">Agents</a>
      </div>
      <div className="search">
         <IoSearchSharp className='icon'/>
         <a href="">Search here</a>
         <div className="arrow_icon">
          <p><IoIosArrowRoundForward className='icon'/></p>
         </div>
      </div>
    </div>
   </section>
    </nav>
  )
}

export default Navbar
