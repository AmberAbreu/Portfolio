import * as React from "react"
import "../sass/style.scss"


import Link from 'gatsby'

import About from '../components/About'
import Projects from '../components/Projects'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import TechStack from '../components/TechStack'


import hero from '../images/croppedamber.png'

import logic from '../images/logic.svg'




// markup
const Home = () => {
  
  return (
    <div>
       <NavBar/>
      <Header/>
      
      <div  id="about">
      <About/>
      </div>

      <div  id="projects">
      <Projects/>
      </div>
      
      <TechStack/>
      
    </div>
  );
}

export default Home
