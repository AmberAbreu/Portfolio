import React from 'react'

import "../sass/style.scss"



import coder from '../images/coder.svg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <div>
      <header className="showcase">
        <div className="container">
          <div className="showcase-content">
            <div>
              <h1>Hi, I'm Amber!</h1>
              <p className="my-1">
                Software Engineer with Ambition.
              </p>
              {/* <a href="#about" className="btn-primary">
                About Me
              </a>
              <a href="#projects" className="btn-secondary">
                Contact Me
              </a> */}
              <a href="https://twitter.com/AmberCanCode" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="https://www.linkedin.com/in/amber-abreu/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
              <a href="https://github.com/AmberAbreu" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
          
            <img src={coder}/>
          </div>
        </div>
      </header>
    </div>
  )
}
