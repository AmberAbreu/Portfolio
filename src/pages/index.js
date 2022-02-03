import React from "react";

import "../sass/style.scss";
import { StaticImage } from "gatsby-plugin-image";
import { getAllBlogs } from '../utils/getAllBlogs'

import html from "../images/tech/html5.svg";
import css from "../images/tech/css3.svg";
import javascript from "../images/tech/javascript.svg";
import typescript from '../images/tech/typescript.svg'
import react from "../images/tech/react.svg";
import gatsby from '../images/tech/gatsbyjs-icon.svg'
import sequelize from "../images/tech/sequelize.svg";
import prisma from '../images/tech/prisma.svg'
import postgres from "../images/tech/postgresql.svg";
import express from "../images/tech/expressjs.svg";
import node from "../images/tech/nodejs.svg";
import redux from "../images/tech/redux.svg";
import sass from "../images/tech/sass.svg";

import { Link } from "gatsby";

import givEth from "../images/giveth.png";
import alacranstudio from "../images/alacranstudio.png";
import cody from '../images/cody.png'

import BlogCard from '../components/BlogCard'
import Layout from "../components/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faLinkedin,
	faTwitter,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";


const Home = () => {

	const data = getAllBlogs()

	const technologies = [
		html,
		css,
		javascript,
		typescript,
		react,
		gatsby,
		redux,
		postgres,
		node,
		express,
		sequelize,
		prisma,
		sass,
	];

	const projects = [
		{
			id: 2,
			name: "Alacran Studio",
			description:
				"Working as a contributor creating websites for small businesses",
			image: alacranstudio,
			date: "July 2021",
			github: "https://github.com/Alacran-Digital-Services",
			website: "https://alacrandigitalservices.com/",

		},
		{
			id: 3,
			name: "Cody's Portfolio",
			description:
				"A learning module made to teach bootcamp students how to create a simple personal portfolio site using Gatsby.js and Netlify",
			image: cody,
			date: "Dec 2021",
			website: "https://naughty-turing-499ad5.netlify.app/",
			github: "https://github.com/AmberAbreu/codyportfolio-boilerplate",
		},
		{
			id: 1,
			name: "givEth",
			description:
				"A crowd funding website that allows users to create campaigns and donate to campaigns with Ether.",
			image: givEth,
			date: "August 2021",
			github: "https://github.com/givEth-capstone/givEth/",
			website: "https://giv-eth.herokuapp.com/",
		},

	];

	return (
		<Layout>
			<header className="showcase">
				<div className="container">
					<div className="showcase-content">
						<div className="showcase-content-words">
							<h1>I'm Amber Abreu</h1>
							<h2>Software Developer from Brooklyn, NY</h2>
							<div className="buttons">
								{/* <Link to="/about" className="btn-primary">
									About Me
								</Link>
								<a href="#projects" className="btn-secondary">
									Contact Me
								</a> */}
							</div>
							<div className="icons">
								<a
									href="https://twitter.com/amberabreudev"
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={faTwitter} size="lg" />
								</a>
								<a
									href="https://www.linkedin.com/in/amber-abreu/"
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={faLinkedin} size="lg" />
								</a>
								<a
									href="https://github.com/AmberAbreu"
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={faGithub} size="lg" />
								</a>
							</div>
						</div>
						<StaticImage
							src="../images/amber-selfie.png"
							alt="Amber"
							placeholder="blurred"
							layout="fixed"
							width={400}
						/>
					</div>
				</div>
			</header>

			<div className="preview">
				<h1>Blog Posts</h1>
				<hr
				/>
				<div className="preview-cards">
					{data.allNotion.edges.filter(item => item.node.properties.type.value[0].name === 'Blog').map(item => <BlogCard title={item.node.title} description={item.node.properties.description.value} image={item.node.properties.image.value} slug={item.node.properties.slug.value} key={item.node.id} />)}
				</div>

				<div className="buttons">
					<Link to={`/blog`} className="btn-decorated">View All</Link>
				</div>

			</div>

			<div className="preview">
				<h1>Experience</h1>
				<hr
				/>
				<div className="preview-cards">
					{projects.map(project => <BlogCard key={project.id} title={project.name} description={project.description} image={project.image} github={project.github} website={project.website} />)}
				</div>
			</div>


			<div className="preview">
				<h1>Tech Stack</h1>
				<hr
				/>
			</div>
			<div className="logo-slider">
				<div>
					{technologies.map((technology) => (
						<img src={technology} key={technology} />
					))}
				</div>
				<div>
					{technologies.map((technology) => (
						<img key={technology} src={technology} alt={technology} />
					))}
				</div>
			</div>

		</Layout>

	);
};

export default Home;
