import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function about() {
	return (
		<Layout>

			<p>
				I was born and raised in Brooklyn, NY. I'm a huge foodie and on my free
				time you can catch me trying new cuisine.
			</p>

			<p>
				My Software Engineer first began in college when I attended my first
				hackathon. After seeing how groups of people could come together and
				build full stack applications that could help improve the lives and
				experiences of others just with code, I knew I wanted a career in tech.
			</p>

			<p>
				Now that I am finished with bootcamp, I am searching for a job
				opportunity that will allow me to grow and learn from great minds. In
				the meantime, I am following up on my promise to learn something new
				everyday. Now I am teaching myself Gatsby, GraphQL, and Sass, which is
				how I am creating this portfolio. I also plan to work on my side
				projects that include learning React Native, Solidity, and Web3.
			</p>
			<StaticImage
				src="../images/amber-selfie.png"
				alt="Amber"
				placeholder="blurred"
				layout="fixed"
				width={400}
			/>
		</Layout>
	);
}
