import React from 'react'
import './index.scss'

import { NavLink } from 'react-router-dom'
import About from '../../pages/about'
import Home from '../../pages/home'
import Contact from '../../pages/contact'

function Navbar() {

  return (
    <div id='navbar'>
      <div className="con">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="roots">
          <NavLink to='/'><Home/></NavLink>
          <NavLink to='/about'><About/></NavLink>
          <NavLink to='/contact'><Contact/></NavLink>
          <NavLink to='/singin'><Contact/></NavLink>
        </div>
        <div className="icons">

        </div>
      </div>
    </div>
  )
}

export default Navbar