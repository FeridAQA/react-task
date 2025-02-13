import React from 'react'
import './index.scss'

import { Link, NavLink } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Navbar() {

  return (
    <>
      <div id='navbar'>
        <div className="con">
          <div className="logo">
            <Link to='/'>
              <h1>Exclusive</h1>
            </Link>
          </div>
          <div className="roots">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/singin'>Sing Up</NavLink>
          </div>
          <div className="icons">
            <div className="input">
              <input type="text" placeholder="What are you looking for?" />
              <SearchIcon className='sIcon' />
            </div>
            <FavoriteBorderIcon />
            <AddShoppingCartIcon />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>

  )
}

export default Navbar