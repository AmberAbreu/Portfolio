import { useStaticQuery, graphql } from "gatsby";

export function GetAllBlogs() {
	return useStaticQuery(graphql`
	query MyQuery {
		allNotion {
		  nodes {
			id
			title
			properties {
			  content {
				value
			  }
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
			  date {
				value {
				  start(formatString: "MM/DD/yyy")
				}
			  }
			}
			markdownString
		  }
		}
	  }
	`)
}
