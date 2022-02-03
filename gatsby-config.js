require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {


	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "ambers-portfolio",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-fontawesome-css`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-notion-api`,
			options: {
				token: process.env.NOTION_API_TOKEN,
				databaseId: process.env.NOTION_API_DATABASE_ID,
				propsToFrontmatter: true,
				lowerTitleLevel: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`limelight`,
					`Nunito`, // you can also specify font weights and styles
					"Praise",
				],
				display: "swap",
			},
		},
	],
};
