import "../sass/style.scss"

import givEth from '../images/givethhome.png'
import movieprops from '../images/moviepropshome.png'

import ProjectDetails from './ProjectDetails'

import React, {useState} from 'react'


export default function Projects() {
  const [buttonPopup, setButtonPopup]  = useState(false)
  const [curProj, setCurProj] = useState("")
  const projects = [
    { id:1, name: "givEth", imgUrl: givEth, date: "August 2021", tech:"PostgreSQL, Express, Sequelize, React, Material UI, Web3.js, Truffle/Ganache, MetaMask", github: "https://github.com/givEth-capstone/givEth/", website:"https://giv-eth.herokuapp.com/"},
    { id:2, name: "MovieProps!", imgUrl: movieprops, date: "July 2021", tech:"PostgreSQL, Express, Sequelize, React/Redux, Bootstrap", github: "https://github.com/graceshopper-Team5/graceshopper", website:"https://graceshopper5team.herokuapp.com/" },
  ];
  function handleClick(proj) {
    setButtonPopup(true)
    setCurProj(proj)
  }
  return (
    <div className="projects">
      {projects.map((project) => (
        <div className="project">
          <img className="homepage" src={project.imgUrl} alt={project.name} />
          
          <button type="button" className="btn-secondary" onClick={() => handleClick(project)} >
            Learn more
          </button>
          {buttonPopup && <ProjectDetails  setTrigger={setButtonPopup} project={curProj}/> }
        </div>
      ))}
    </div>
  );
}

