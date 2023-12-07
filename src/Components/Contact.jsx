import React from 'react'
import  "./Css/Contact.css"
const Contact = () => {
  return (
    <section id='Contact' className='contact'>
      <div className="heading">
        <h1>Get into touch with us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur praesentium optio possimus, obcaecati dolores sequi recusandae iure, aut magni necessitatibus quis. Illo id eum deleniti repellat, inventore voluptates enim architecto.</p>
      </div>
      <div className="main_secion">
      <div className="contact_form">
          <div className="inputs">
            <input type="name" placeholder='Fist name' className='input' />
            <input type="name" placeholder='Last name' className='input' />
            <input type="email" placeholder='Your email' className='input' />
            <input type="phone" placeholder='Your Phone number' className='input' />
          </div>
          <div id='textarea' className="inputs">
            <textarea placeholder='Your massage' className='input' ></textarea>
            <a className='input sub_btn' >Send now</a>
          </div>
        </div>
      <div className="contact_info">
        <div className="card">
          <h2>Address</h2>
<p>(478) 864-85228101 S Marcus St Wrightsville, Georgia(GA), 31096</p>
        </div>
        <div className="card">
          <h2>Phone</h2>
          <p> +923160007187, +924581246288, +92253581436, +92572414821</p>
        </div>
        <div className="card">
          <h2>Email</h2>
          <p>home's100@gmail.com, home's100@outlook.com</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
