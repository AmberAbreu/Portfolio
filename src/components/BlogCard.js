import React from 'react';
import { Link } from 'gatsby'

export default function BlogCard({ title, description, image, website, slug }) {

	return (
		<Link to={website ? website : `blog/${slug}`}>
			<div className="card">
				{<div className="card-image" style={{ background: `url("${image}")` }}></div>}
				<div className="card-text">
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
			</div>
		</Link>

	);
}
