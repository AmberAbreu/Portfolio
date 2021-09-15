import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-regular-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

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
            <FontAwesomeIcon icon={faTimesCircle} />
              {/* close */}
            </button>
            <div className="pp-thumbnail">
              <img src={project.imgUrl} alt={project.name} />
            </div>
            <h3>App landing page</h3>
          </div>

          <div className="pp-body">
            <div className="description">
              <p>
                Lorem ipsum, dolor sit amet consctetur adipsiscing elit. ONis ab
                nobid eaque optio excepturi tempore, cumque porro ex natus
                repudiandae vero repellendus ipsa possimus illum quisquam hic
                vitae blanditisiis, alias consequuntur?
              </p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  Created: <span>{project.date}</span>
                </li>
                <li>
                  Technologies used: <span>{project.tech}</span>
                </li>
                <li><FontAwesomeIcon icon={faGithub}/>: <a href={project.github} target="_blank"> {project.github} </a> </li>
                <li>WebpageIcon: {project.website}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
