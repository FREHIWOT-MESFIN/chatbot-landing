import React from 'react'
import './nav.css'

function Nav() {
  return (
    <nav>
      <ul>
        <li>Best Selling</li>
        <li>About Us</li>
        <li className='active'>Yummy Donuts</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      </nav>
  )
}

export default Nav
