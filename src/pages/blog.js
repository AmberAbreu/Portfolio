import { useStaticQuery, graphql, Link, navigate } from "gatsby";
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
			<div className="preview">
				<div className="backHeader">
					<FontAwesomeIcon icon={faLongArrowAltLeft} onClick={() => { navigate(-1) }} size="lg" />
					<h1>Blog Posts</h1>

				</div>
				<hr
				/>
				<div className="standardSpacing">
					<div className="preview-cards" >{blogPreviews}</div>
				</div>
			</div>
		</Layout>
	)
}

export default BlogPage