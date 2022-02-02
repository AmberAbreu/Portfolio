import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLongArrowAltLeft
} from "@fortawesome/free-solid-svg-icons";


import { getAllBlogs } from '../utils/getAllBlogs'

import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";

const BlogPage = () => {

	const data = getAllBlogs()

	const blogPreviews = data.allNotion.edges.map((item) =>
		<BlogCard title={item.node.title} description={item.node.properties.description.value} image={item.node.properties.image.value} slug={item.node.properties.slug.value} key={item.node.id} />
	)

	return (
		<Layout>
			<Link to="/" className="btn-secondary" style={{ margin: '25px 0 0 50px', }}><FontAwesomeIcon icon={faLongArrowAltLeft} style={{ backgroundColor: 'black' }} /></Link>
			<div className="preview">
				<h1>Blog Posts</h1>
				<div className="standardSpacing">
					<div className="preview-cards" >{blogPreviews}</div>
				</div>
			</div>
		</Layout>
	)
}

export default BlogPage