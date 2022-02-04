import React from 'react';
import { Link } from 'gatsby'

export default function BlogCard({ title, description, image, website, github, recent, slug }) {

	return (

		<div className="card">

			<div className="card-image" style={{ background: `url("${image}") center`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
				{recent && <span className="new">New!</span>}
			</div>
			<div className="card-text">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>

			<div className="card-stats">
				{github ? <div className="buttons">
					<a href={github} target="_blank" rel="noopener noreferrer" className="btn-primary">
						Github
					</a>
					<a href={website} target="_blank" rel="noopener noreferrer" className="btn-secondary">
						Visit Site
					</a>
				</div> :
					<div className="buttons">
						<Link to={`/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">Read More</Link>
					</div>
				}
			</div>

		</div>


	);
}
