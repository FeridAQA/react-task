import React, { useState } from 'react'
import './index.scss'

import { Link, NavLink } from 'react-router-dom'


import { RxHamburgerMenu } from "react-icons/rx";


import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';

function Navbar() {

  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  console.log(open);

  return (
    <div id='big_nav'>
      <div className="nav_pos">

        <div className='for_mob_nav'>
          <div className={`nav_roots ${open ? "open" : ""}`}>
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
            <NavLink to="/register" onClick={() => setOpen(false)}>Sign Up</NavLink>
          </div>
        </div>
        <div id='navbar'>
          <div className="con">
            <div className="logo">
              <Link to='/'>
                <h1>Exclusive</h1>
              </Link>
            </div>

            <div className="mobil_nav">
              <Button className="mobil_btn" onClick={toggleOpen}>
                <RxHamburgerMenu />
              </Button>
            </div>


            <div className="roots">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/register'>Sing Up</NavLink>
            </div>
            <div className="icons">
              <div className="input">
                <input type="text" placeholder="What are you looking for?" />
                <SearchIcon className='sIcon' />
              </div>
              <FavoriteBorderIcon className='d_icon' />
              <AddShoppingCartIcon className='d_icon' />
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>

  )
}

export default Navbar