import React, { useContext, useEffect, useState } from 'react'
import "./Css/Listing.css"
import { LuBedDouble } from "react-icons/lu";
import { BiBath } from "react-icons/bi"
import { TbRulerMeasure } from "react-icons/tb";
import { Context } from '../Utils/Context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const Listing = () => {
  const {property} = useContext(Context)
  const {filteredatacommand,setfilteredatacommand} = useContext(Context)
  const {data, setdata} = useContext(Context)
  const Links = document.querySelectorAll(".Link")
  Links.forEach(curelem=>{
    curelem.addEventListener("click", ()=>{
      document.querySelector(".active").classList.remove("active")
      curelem.classList.add("active")
    })
  }) 
  useEffect(()=>{
    if(filteredatacommand !== null ){
     const sortedData =  property.filter(curElem=>{
        return curElem.Category == filteredatacommand
      })
     setdata(sortedData)
    }
    },[filteredatacommand])
  return (
    <section id='Listing' className='listing'>
      <div className="heading">
      <h1>See The Lastest Properties</h1>
       <div className="links">
       <a href=""  className='Link active' onClick={(e)=>{e.preventDefault(); setfilteredatacommand("Buy")}} >Buy</a>
       <a href="" className='Link'  onClick={(e)=>{e.preventDefault(); setfilteredatacommand("Rent")}} >Rent</a>
       <a href="#Contact" className='Link'>Sell</a>
       <a href="#Agents" className='Link'>Agents</a>
       </div>
      </div>
      <div className="properties">
         {
          data?.map((curElem)=>(
          <div className="card">
            <img src={curElem.img} alt="" />
            <div className="content">
             <h2>${curElem.price}</h2>
             <h3>{curElem.Brand_name}</h3>
             <p>{curElem.Address}</p>
            </div>
          </div>
          ))
         }
      </div>
    </section>
  )
}

export default Listing
