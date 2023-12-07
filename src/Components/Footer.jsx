import React from 'react'
import "./Css/Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
const Footer = () => {
  return (
    <footer className='footer'>
    <div className="upper_section">
    <div className="heading">
      <h1>Philosophy</h1>
      <div className="social_media">
       <FaFacebook style={{color: 'rgb(19,160,239)'}} className='icon'/>
       <AiFillInstagram style={{color: 'palevioletred'}}  className='icon'/>
       <TiSocialLinkedinCircular style={{color: 'skyBlue'}} className='icon'/>
       <FaPinterest style={{color: 'red'}}  className='icon'/>
      </div>
     </div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quis. Vel dolor doloribus dignissimos deserunt iusto, hic dolore repellat? Reiciendis et harum saepe, rerum voluptatem perferendis dicta ipsa culpa cum?</p>
    </div>
    <div className="lower_section">
    <ul className='links'>
       <li><a href="#Header">Home</a></li> 
       <li><a href="#About">About</a></li>
        <li><a href="#Listing">Listing</a></li>
         <li><a href="#Agents"> Agents</a></li>
      <li><a href="#News">News</a></li>
       <li><a href="#Reviews">Reviews</a></li>
       <li><a href="#Contact">Sell</a></li>
   <li><a href="#Contact">Contact Us Now</a></li>
    </ul>
     <div className="subscribe">
       <p>Subscribe Us Right Now To Get The Notification Of Our Latest Blogs & News</p>
     <div className="inputs">
     <input type="email" placeholder='Your email' />
           <a href="#">Subscribe</a>
     </div>
     </div>
    </div>
    <div className="copy_right">
    <p>Copyright ©2023 All rights reserved | This portfolio is made by Syed wasif</p>
    </div>
   </footer>
  )
}

export default Footer
