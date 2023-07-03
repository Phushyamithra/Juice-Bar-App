import React from 'react'
import bgImage from '../Assets/contact_bg.webp'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage : `url(${bgImage})`}}>
        </div>
        <div className='rightSide'>
            <h1>Contact Us :</h1>
            <form id="contact-form" action="POST">
              <label htmlFor="name">Full Name :</label>
              <input type="text" placeholder='Enter your full name ...' />
              <label htmlFor="email">Email :</label>
              <input type="email" placeholder='Enter your Email ...' />
              <label htmlFor="message">Message :</label>
              <textarea name="message" rows="6" placeholder='Enter message ' required></textarea>
              <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact