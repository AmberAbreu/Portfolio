import React from "react"

import { StaticImage } from "gatsby-plugin-image";

import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLongArrowAltLeft
} from "@fortawesome/free-solid-svg-icons";


export default function Template({ pageContext }) {
	const { post } = pageContext
	console.log(post)
	return (
		<Layout>
			<div >
				<Link to="/" className="btn-secondary" style={{ margin: '25px 0 0 50px', }}><FontAwesomeIcon icon={faLongArrowAltLeft} style={{ backgroundColor: 'black' }} /></Link>
				<div className="blog-post-container">
					<div className="preview">
						<h2>{post.title}</h2>
						<h3>written by Amber Abreu</h3>
						<img src={post.properties.image.value} style={{ width: '40%', height: '500px' }} />
						{/* <h4>{post.properties.date.value.start}</h4> */}
						<span> <i> {post.properties.description.value} </i></span>

						<div className="blog-post-content" />
						{/* {post.properties.body.value} */}
					</div>
				</div>
			</div>
		</Layout>
	)
}