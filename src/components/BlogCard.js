import React from 'react';
import { Link } from 'gatsby'

export default function BlogCard({ title, description, image, website, slug }) {

	return (
		<Link to={website ? website : `blog/${slug}`}>
			<div className="card">
				<div className="card-image" style={{ background: `url("${image}")`, backgroundPosition: 'center center' }}></div>
				<div className="card-text">
					<h2>{title}</h2>
					<p>{description}</p>

				</div>

				<div className="card-stats">
					{website ? <div className="buttons">
						<a href="#about" className="btn-primary">
							Github
						</a>
						<a href="#projects" className="btn-secondary">
							Heroku
						</a>
					</div> :

						<div className="buttons">
							<a href="#projects" className="btn-secondary">
								Read More
							</a>
						</div>
					}

				</div>

			</div>
		</Link>

	);
}
