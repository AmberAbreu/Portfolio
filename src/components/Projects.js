import "../sass/style.scss"

import givEth from '../images/givethhome.png'
import movieprops from '../images/moviepropshome.png'

import github from '../images/tech/github.svg'
import heroku from '../images/tech/heroku-icon.svg'

import ProjectDetails from './ProjectDetails'

import React, {useState, useEffect} from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function Projects() {
  const [buttonPopup, setButtonPopup]  = useState(false)
  const [curProj, setCurProj] = useState("")

  const {height, width} = useWindowDimensions()


  const projects = [
    { id:1, name: "givEth", description: "A crowd funding website that allows users to create campaigns and donate to campaigns with Ether.", imgUrl: givEth, date: "August 2021", tech:"PostgreSQL, Express, Sequelize, React, Material UI, Web3.js, Truffle/Ganache, MetaMask", github: "https://github.com/givEth-capstone/givEth/", website:"https://giv-eth.herokuapp.com/"},
    { id:2, name: "MovieProps!", description: "An e-commerce website that allows users to buy famous movie props" , imgUrl: movieprops, date: "July 2021", tech:"PostgreSQL, Express, Sequelize, React/Redux, Bootstrap", github: "https://github.com/graceshopper-Team5/graceshopper", website:"https://graceshopper5team.herokuapp.com/" },
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

          {width < 700 ? (
            <div className="links">
              <a className="phone-btn" href={curProj.github} target="_blank">
                <img src={github} />
              </a>
              <a className="phone-btn" href={curProj.website} target="_blank">
                <img src={heroku} />
              </a>
            </div>
          ) : (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => handleClick(project)}
            >
              Learn more
            </button>
          )}
          {buttonPopup && (
            <ProjectDetails setTrigger={setButtonPopup} project={curProj} />
          )}
        </div>
      ))}
    </div>
  );
}

