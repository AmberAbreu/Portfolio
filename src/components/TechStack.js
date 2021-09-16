import React from 'react'
import "../sass/style.scss"

import html from '../images/tech/html5.svg'
import css from '../images/tech/css3.svg'
import javascript from '../images/tech/javascript.svg'
import react from '../images/tech/react.svg'
import sequelize from '../images/tech/sequelize.svg'
import postgres from '../images/tech/postgresql.svg'
import express from '../images/tech/expressjs.svg'
import node from '../images/tech/nodejs.svg'
import redux from '../images/tech/redux.svg'
import sass from '../images/tech/sass.svg'


export default function TechStack() {
  const technologies = [html, css, javascript, react, redux, postgres, node, express, sequelize, sass]
  return (
    <div className="tech-stack">
      <h1>Tech Stack</h1>
        <ul className="tech-stack-technologies">
          {technologies.map(technology => <div className="tech-stack-technologies-card"> <li> <img src={technology}/></li> </div> )}
        </ul>
    </div>
  )
}
