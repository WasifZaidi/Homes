import React from 'react'
import "./Css/About.css"
import about_image from "../images/about_image.jpg"
import { PiHouse } from "react-icons/pi";
import { BiSolidLeaf } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const About = () => {
  return (
    <section id='About' className='about'>
         <div className="left">
          <div className="img">
          <LazyLoadImage src={about_image} effect="blur" placeholderSrc={loading_img} />
          </div>
         </div>
         <div className="right">
          <h2>About Us</h2>
          <h1>From more than 25 years we have provided real estate services with honesty trust and transparency</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat debitis temporibus voluptates dolore. Culpa quia provident, laudantium vero temporibus molestias magnam commodi, officia odit animi aut corporis, sunt quis.</p>
          <a href="">Learn More</a>
         </div>
    </section>
  )
}

export default About
