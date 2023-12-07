import React, { useContext } from 'react'
import "./Css/Latest_News.css"
import property_8 from "../images/property-8.jpg"
import { Context } from '../Utils/Context'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const Latest_News = () => {
  const {news} = useContext(Context)
  return (
    <div id='News' className='latest_news'>
      <div className="heading">
        <h1>Latest News and Blogs</h1>
      </div>
      <div className="main_section">
       {
        news?.map((curelem)=>(
      <div className="card">
        <img src={curelem.image} alt="" />
        <div className="content">
        <h3>{curelem.title}</h3>
        <p>{curelem.desc}</p>
      </div>
      </div>
        ))
       }
      </div>
    </div>
  )
}

export default Latest_News
