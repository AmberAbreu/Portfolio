import React from 'react'
import "../sass/style.scss"


import logo from '../images/AmberLogo.png'

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={logo} />
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
