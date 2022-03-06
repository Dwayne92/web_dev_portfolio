import '../App.css';
import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {

  return(
    <>
    <nav>

         <Link to='/'>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/selfie">Selfie Time</Link>






    </nav>
    </>
  )
}

export default NavBar
