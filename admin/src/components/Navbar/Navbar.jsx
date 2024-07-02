import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav>
        <img src={assets.logo} alt="Logo" className='logo'/>
        <img src={assets.profile_image} alt="Profile" className='profile' />
    </nav>
  )
}

export default Navbar;