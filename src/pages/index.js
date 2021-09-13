import * as React from "react"
import "../sass/style.scss"

import Link from 'gatsby'

import About from '../components/About'

import hero from '../images/croppedamber.png'

import logo from '../images/AmberLogo.png'
import react from '../images/react.png'
import sequelize from '../images/sequelize.png'
import postgres from '../images/postgresql.png'
import metamask from '../images/metamask.png'
import web3 from '../images/web3.png'
import express from '../images/Expressjs.png'
import truffle from '../images/truffle.png'
import node from '../images/node.png'
import redux from '../images/redux.png'

// markup
const Home = () => {
  const technologies = [react, redux, postgres, node, express, sequelize, truffle, web3, metamask]
  return (
    <div>
      <header className="showcase">
        <div className="container">
          <nav>
            <h1 className="logo"><img src={logo}/></h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </nav>
          
          <div className="showcase-content">
            <div>
              <h1>I'm Amber</h1>
              <p className="my-1">
                Software Engineer.
              </p>
              {/* <a href="#about" className="btn-primary">
                My Story
              </a> */}
              <a href="#" className="btn-secondary">
                Contact Me
              </a>
            </div>
            <img src={hero}/>
          </div>
        </div>
      </header>
      <div  id="about">
      <About/>
      </div>
      
      <div className="tech-stack">
        <h1>Tech Stack</h1>
        <ul className="tech-stack-technologies">
          {technologies.map(technology => <div className="tech-stack-technologies-card"> <li> <img src={technology}/></li> </div> )}
        </ul>
      </div>
      
    </div>
  );
}

export default Home
