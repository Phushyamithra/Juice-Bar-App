import React, { useState } from 'react'
import logo from "../Assets/Logo.png";
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
import ReorderIcon from '@mui/icons-material/ReorderRounded'; // Reorder icon in left top when screen size is less than 600px

function NavBar() {
  const [burgerButton, setBurgerButton] = useState(false);

  const changeToggleBar = () => {
    setBurgerButton(!burgerButton);
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={burgerButton ? "open" : "close"}>
        <img src={logo} alt="Logo Juice" />
        <div className='hiddenLinks'>
          <Link to='/'> Home</Link>
          <Link to='/menu'> Menu</Link>
          <Link to='/contact'> Contact</Link>
          <Link to='/about'> About</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'> Home</Link>
        <Link to='/menu'> Menu</Link>
        <Link to='/contact'> Contact</Link>
        <Link to='/about'> About</Link>
        <button onClick={changeToggleBar}>
          <ReorderIcon className='reorderButton' />
        </button>
        {/* {
          windowSize.current.innerWidth > 600 ? changeToggleBar() : alert(windowSize.current.innerWidth)
        } */}
      </div>
    </div>
  )
}

export default NavBar