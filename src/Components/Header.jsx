import React from 'react'
import "./Css/Header.css"
import { IoLocationSharp } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { TiTickOutline } from "react-icons/ti";
const handleopendata = (type)=>{
  if(type == "property_type"){
    document.getElementById("range_data").style.display = "none"
    document.getElementById("location_data").style.display = "none"
    document.getElementById("property_data").style.display = "block"
  }
  if(type == "range_type"){
    document.getElementById("property_data").style.display = "none"
    document.getElementById("location_data").style.display = "none"
    document.getElementById("range_data").style.display = "block"
  }
  if(type == "location_type"){
    document.getElementById("property_data").style.display = "none"
    document.getElementById("range_data").style.display = "none"
    document.getElementById("location_data").style.display = "block"
  }
}
const Header = () => {
  
  return (
    <header id='Header' className='header'>
      <section className="upper">
        <h1>Browse The Modern, Luxury, Best Houses, With House's </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus minus atque, quas perspiciatis praesentium, maxime quisquam repellendus a voluptas rem enim unde illo nostrum tempore esse eos laboriosam corporis id.</p>
      </section>
      <section className="bottom">
      <div className="section">
          <h2>Property location <IoLocationSharp className='icon' /></h2>
          <a href="" onClick={(e)=>{e.preventDefault(); handleopendata("location_type")}}>Select property location</a>
          <div id='location_data' className="data">
            <p>Random Location</p>
            <p>Random Location</p>
            <p>Random Location</p>
            <p>Random Location</p>
          </div>
        </div>
        <div className="section">
          <h2>Property type <FaHouse className='icon' /></h2>
          <a href="" onClick={(e)=>{e.preventDefault(); handleopendata("property_type")}}>Select property type</a>
          <div id='property_data' className="data">
            <p>Random type</p>
            <p>Random type</p>
            <p>Random type</p>
            <p>Random type</p>
          </div>
        </div>
        <div className="section">
          <h2>Property range <GiMoneyStack className='icon' /></h2>
          <a href=""  onClick={(e)=>{e.preventDefault(); handleopendata("range_type")}}>Select property range</a>
          <div id='range_data' className="data">
          <p>Price High</p>
            <p>Random Medium</p>
            <p>Random Low</p>
          </div>
        </div>
        <div className="section">
        <h2>Submit now <TiTickOutline  className='icon' /></h2>
          <a href="#Listing" className='find'>Find House Now</a>
        </div>
      </section>
    </header>
  )
}

export default Header
