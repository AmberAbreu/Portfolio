import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-regular-svg-icons'

import github from '../images/tech/github.svg'
import heroku from '../images/tech/heroku-icon.svg'

import givEth from '../images/givethhome.png'
import movieprops from '../images/moviepropshome.png'

export default function ProjectDetails(props) {
  console.log("props of project details", props)
  
  console.log(props.project)
  const {project} = props 
  return  (
    <div className="portfolio-popup">
      <div className="pp-inner">
        <div className="pp-content">
          <div className="pp-header">
            <button type="button" className="btn" onClick={()=> props.setTrigger(false)}>
            <FontAwesomeIcon icon={faTimesCircle} className="icon" />
            </button>
            <div className="pp-thumbnail">
              <img src={project.imgUrl} alt={project.name} />
            </div>
            <h3>{project.name}</h3>
          </div>

          <div className="pp-body">
            <div className="description">
              <p>
                {project.description}
              </p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  <span>{project.date}</span>
                </li>
                <li>
                  <span>{project.tech}</span>
                </li>
                <a href={project.github}  target="_blank"><img src={github}/></a>
                <a href={project.website}  target="_blank"><img src={heroku}/></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
