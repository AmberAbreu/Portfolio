import React from 'react';

import { Link } from 'gatsby'

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faNewspaper,
	faEnvelope,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
	return (
		<nav>
			<div>
				<StaticImage
					src="../images/logo.png"
					alt="logo"
					placeholder="blurred"
					layout="fixed"
					width={150}
					height={150}
				/>
			</div>
			<ul>
				<li>
					<Link to="/about">
						<FontAwesomeIcon icon={faUser} />
						<p>About</p>
					</Link>
				</li>
				<li>
					<Link to="blog">
						<FontAwesomeIcon icon={faNewspaper} />
						<p>Blog</p>
					</Link>
				</li>
				{/* <li>
					<Link to="">
						<FontAwesomeIcon icon={faEnvelope} />
						<p>Contact</p>
					</Link>
				</li> */}
			</ul>
		</nav>
	);
}
