import React, { useContext } from 'react'
import "./Css/Reviews.css"
import { Context } from '../Utils/Context'
import { RiStarSFill } from "react-icons/ri";
const Reviews = () => {
  const {reviews} = useContext(Context)
  return (
    <section id='Reviews' className='Reviews'>
     <div className="heading">
      <h1>What are our clients saying about us</h1>
     </div>
     <div className="main_section">
     {
      reviews?.map(curElem=>(
        <div className="card">
        <img src={curElem.image} alt="" />
        <div className="content">
         <div className="data">
         <div className="avatar">
              <img src={curElem.avatar} alt="" />
            </div>
          <div className="name">
            <h2>{curElem.Name}</h2>
            <div className="stars">
            <RiStarSFill className='icon'/>
            <RiStarSFill className='icon'/>
            <RiStarSFill className='icon'/>
            <RiStarSFill className='icon'/>
            <RiStarSFill className='icon'/>
            <p>5.0</p>
            </div>
          </div>
         </div>
         <div className="review">
          <p>{curElem.Review}</p>
         </div>
        </div>
      </div>
      ))
     }
     </div>
    </section>
  )
}

export default Reviews
