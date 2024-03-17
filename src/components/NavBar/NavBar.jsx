import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button';
import AboveNav from './AboveNav';
import './NavBar.css'
import '../Button/Button.css'
import { BsHouseHeartFill } from "react-icons/bs";
const NavBar = () => {
  
  return (
    <>
      <div>
        <AboveNav />
      </div>
      <nav className="navbar">
        <h1> VILLA </h1>
        <BsHouseHeartFill   className='icon-house'/>
        <ul >
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/propert" className={({ isActive }) => isActive ? 'active' : ''}>Properties</NavLink></li>
          <li><NavLink to="/propertydetails" className={({ isActive }) => isActive ? 'active' : ''}>Property Details</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
        </ul>
        <div>
          <Button

            clName='buttonnav'
            buttonUrl="/propertydetails"
            title=' Schedule a visit' />
        </div>
      </nav></>
  )
}

export default NavBar