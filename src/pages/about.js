import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function about() {
	return (
		<Layout>
			<div className="aboutPage">
				<div className="aboutPage-content">
					<h1>Welcome to my Personal Portfolio Website!</h1>
					<p>
						My name is Amber Abreu. I was born and raised in Brooklyn, NY
						and come from Dominican/Puerto Rican 🇩🇴🇵🇷 roots.
					</p>
					<br></br>
					<p>I'm a huge foodie and on my free
						time you can catch me trying new cuisine.</p>
					<br></br>
					<p>
						My Software Engineer journey first began in college where I studied Linguistics during undergrad.
						After taking my first Computational Linguistics class, I absolutely fell in love with the problem solving
						aspect of coding, so I went on to take CompLin II the next semester.
						Wanting to immerse myself into the tech community, I spontaneously signed up to go to an all day Hackathon. Although I did not have
						Web Development experience. After seeing how groups of future engineers could come together and
						build full stack applications that could help improve the lives and
						experiences of others, I knew I wanted to be a part of this community and develop my skills to this level.
					</p>
					<br></br>
					<p>
						After graduating from college with my Linguistics degree,
						I knew I wanted to further my education and pursue something I was genuinely passionate about,
						where I would always keep learning. In 2021, with the support of my family, I took the leap
						and decided to teach myself web development. I was able to get into Fullstack Academy and can confidently say
						that this is the best decision I could have made for myself.
					</p>
					<br></br>
					<p>
						After finishing bootcamp, I returned to become a Teaching Fellow and become a resource
						to students who are on a similar journey to pursuing their dream careers in Software Engineering.
					</p>
					<br></br>
					<p>
						As an ambitious person who is passionate about innovation, my next steps involve pursuing opportunities
						that will challenge me and allow me to grow not only as a Software Engineer but also as a leader.
					</p>
				</div>

				<StaticImage
					src="../images/amber-selfie.png"
					alt="Amber"
					placeholder="blurred"
					layout="fixed"
					width={400}
				/>
			</div>
		</Layout>
	);
}
