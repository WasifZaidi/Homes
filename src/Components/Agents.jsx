import React, { useEffect } from 'react'
import "./Css/Agents.css"
import Agent_1 from "../images/Agents_1.jpg"
import Agent_2 from "../images/Agents_2.jpg"
import Agent_3 from "../images/Agents_3.jpg"
import Agent_4 from "../images/Agents_4.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const Agents = () => {
  return (
    <section id='Agents' className='agents'>
        <div className="heading">
            <h1>Our Top Agents</h1>
        </div>
    <div className="main_section">
    <div className="card">
    <LazyLoadImage src={Agent_1} effect="blur" placeholderSrc={loading_img} />
        <div  className="content">
            <h2> Martin</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid minima expedita velit quaerat consectetur inventore dolorum autem non, tempore animi!</p>
        </div>
    </div>
    <div className="card">
    <LazyLoadImage src={Agent_2} effect="blur" placeholderSrc={loading_img} />
        <div className="content">
            <h2> David</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid minima expedita velit quaerat consectetur inventore dolorum autem non, tempore animi!</p>
        </div>
    </div>
    <div className="card">
    <LazyLoadImage src={Agent_3} effect="blur" placeholderSrc={loading_img} />
        <div className="content">
            <h2> Alexa</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid minima expedita velit quaerat consectetur inventore dolorum autem non, tempore animi!</p>
        </div>
    </div>
    <div className="card">
    <LazyLoadImage src={Agent_4} effect="blur" placeholderSrc={loading_img} />
        <div className="content">
            <h2>Michelle</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid minima expedita velit quaerat consectetur inventore dolorum autem non, tempore animi!</p>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Agents
