import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const random = Math.floor(Math.random()*100)
  return (
    <nav className="navbar">
       
        <div className="links">
        <Link to="/">Home</Link>
            <Link to="/error">Error</Link>
            <Link to={'/'+ random}>404</Link>
           
        </div>
        </nav>
  )
}
