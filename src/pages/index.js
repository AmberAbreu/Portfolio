import * as React from "react";
import "../sass/style.scss";
import { StaticImage } from "gatsby-plugin-image";

import Link from "gatsby";

import Projects from "../components/Projects";
import TechStack from "../components/TechStack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import hero from "../images/croppedamber.png";
import logo from "../images/AmberLogo.png";

const Home = () => {
  return (
    <div>
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
      <header className="showcase">
        <div className="container">
          <div className="showcase-content">
            <div>
              <h1>Amber Abreu</h1>
              <p>
                I was born and raised in Brooklyn, NY. I'm a huge foodie and on
                my free time you can catch me trying new cuisine.
              </p>

              <p>
                My Software Engineer first began in college when I attended my
                first hackathon. After seeing how groups of people could come
                together and build full stack applications that could help
                improve the lives and experiences of others just with code, I
                knew I wanted a career in tech.
              </p>

              <p></p>

              <p>
                Now that I am finished with bootcamp, I am searching for a job
                opportunity that will allow me to grow and learn from great
                minds. In the meantime, I am following up on my promise to learn
                something new everyday. Now I am teaching myself Gatsby,
                GraphQL, and Sass, which is how I am creating this portfolio. I
                also plan to work on my side projects that include learning
                React Native, Solidity, and Web3.
              </p>
              {/* <a href="#about" className="btn-primary">
                About Me
              </a>
              <a href="#projects" className="btn-secondary">
                Contact Me
              </a> */}
              <a href="https://twitter.com/AmberCanCode" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/in/amber-abreu/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/AmberAbreu" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <StaticImage src="../images/logic.svg" alt="image of Amber" />
          </div>
        </div>
      </header>

      <div id="projects">
        <Projects />
      </div>

      <TechStack />
    </div>
  );
};

export default Home;
