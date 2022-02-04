import React from "react"

import { navigate } from "gatsby";

import Layout from "../components/Layout"
import ReactMarkdown from 'react-markdown'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLongArrowAltLeft
} from "@fortawesome/free-solid-svg-icons";


export default function Template({ pageContext }) {
	const { post } = pageContext
	return (
		<Layout>
			<div className="standardSpacing" >

				<div className="blog-post-container">
					<div className="preview">
						<div className="backHeader">
							<FontAwesomeIcon icon={faLongArrowAltLeft} size="lg" onClick={() => { navigate(-1) }} />
							<h1>{post.title}</h1>
						</div>
						<h3>written by Amber Abreu</h3>
						<h4>{post.properties.date.value.start}</h4>
						<img src={post.properties.image.value} alt="blog" />
						<span className="description"> <i> {post.properties.description.value} </i></span>

						<div className="blog-post-content">
							<ReactMarkdown>{post.properties.content.value}</ReactMarkdown>

						</div>

					</div>
				</div>
			</div>
		</Layout>
	)
}