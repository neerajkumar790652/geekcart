import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar-main'>
    <div className='navbar-title'> 
        <h1>GeekCart</h1>
    </div>
    <div className='navbar-list'>
        
            <Link to='/'>Home</Link>
            <Link to='/product'>Products</Link>
            <Link to='/cart'>Cart</Link>
        
    </div>
    </div>

  )
}

export default Navbar
