import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/><FacebookIcon/><LinkedInIcon/><TwitterIcon/><EmailIcon/>
      </div>
      <p> &copy; 2023 juicebar.com</p>
    </div>
  )
}

export default Footer