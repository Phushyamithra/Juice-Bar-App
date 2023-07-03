import React from 'react'
import bgImage from '../Assets/about_bg.webp'
import '../styles/About.css'
const About = () => {
  return (
    <div className='about'>  
        <div className='aboutTop' style={{backgroundImage : ` url(${bgImage})`}}>
        </div>
        <div className='aboutBottom'>
            <h2> About Us </h2>
            <p>  <code>Lorem ipsum dolor </code> sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat,<b> odit, tenetur error, </b>harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit</p>
        </div>
    </div>
  )
}

export default About