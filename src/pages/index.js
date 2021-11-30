import React, { useState, useEffect } from "react";
import "../sass/style.scss";
import { StaticImage } from "gatsby-plugin-image";
import github from "../images/tech/github.svg";
import heroku from "../images/tech/heroku-icon.svg";

import html from "../images/tech/html5.svg";
import css from "../images/tech/css3.svg";
import javascript from "../images/tech/javascript.svg";
import react from "../images/tech/react.svg";
import sequelize from "../images/tech/sequelize.svg";
import postgres from "../images/tech/postgresql.svg";
import express from "../images/tech/expressjs.svg";
import node from "../images/tech/nodejs.svg";
import redux from "../images/tech/redux.svg";
import sass from "../images/tech/sass.svg";

import Link from "gatsby";
import givEth from "../images/givethhome.png";
import movieprops from "../images/moviepropshome.png";
import TechStack from "../components/TechStack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../images/AmberLogo.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Home = () => {
  const technologies = [
    html,
    css,
    javascript,
    react,
    redux,
    postgres,
    node,
    express,
    sequelize,
    sass,
  ];
  const [buttonPopup, setButtonPopup] = useState(false);
  const [curProj, setCurProj] = useState("");
  function handleClick(proj) {
    setButtonPopup(true);
    setCurProj(proj);
  }
  const { height, width } = useWindowDimensions();
  const projects = [
    {
      id: 1,
      name: "givEth",
      description:
        "A crowd funding website that allows users to create campaigns and donate to campaigns with Ether.",
      imgUrl: givEth,
      date: "August 2021",
      tech: "PostgreSQL, Express, Sequelize, React, Material UI, Web3.js, Truffle/Ganache, MetaMask",
      github: "https://github.com/givEth-capstone/givEth/",
      website: "https://giv-eth.herokuapp.com/",
    },
    {
      id: 2,
      name: "MovieProps!",
      description:
        "An e-commerce website that allows users to buy famous movie props",
      imgUrl: movieprops,
      date: "July 2021",
      tech: "PostgreSQL, Express, Sequelize, React/Redux, Bootstrap",
      github: "https://github.com/graceshopper-Team5/graceshopper",
      website: "https://graceshopper5team.herokuapp.com/",
    },
  ];

  return (
    <div>
      <nav>
        <div className="logo">
          <p>Amber Abreu</p>
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
            <div className="showcase-content-words">
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
              <a
                href="https://twitter.com/amberabreudev"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/in/amber-abreu/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/AmberAbreu"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <StaticImage
              src="../images/croppedamber.png"
              alt="image of Amber"
              placeholder="blurred"
              layout="fixed"
            />
          </div>
        </div>
      </header>

      <div className="projects">
        {projects.map((project) => (
          <div className="project">
            <img className="homepage" src={project.imgUrl} alt={project.name} />
            {width < 700 ? (
              <div className="links">
                <a href={curProj.github} target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            ) : (
              <div className="project-links">
                <p>{project.name}</p>
                <a>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a>Demo</a>
              </div>
            )}
          </div>
        ))}
      </div>
      <p>Tech Stack</p>
      <div className="tech-stack">
        <div className="slider">
          <div className="sliderTrack">
            {technologies.map((technology) => (
              <img src={technology} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
