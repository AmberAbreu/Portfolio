import { useStaticQuery, graphql } from "gatsby";

export function getAllBlogs() {
	return useStaticQuery(graphql`
	query MyQuery {
		allNotion {
		  edges {
			node {
			  id
			  title
			  properties {
				description {
				  value
				}
				image {
				  value
				}
				slug {
				  value
				}
				type {
				  value {
					name
				  }
				}
			  }
			}
		  }
		}
	  }
	`)
}
