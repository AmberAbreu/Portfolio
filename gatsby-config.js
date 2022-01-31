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
		`gatsby-plugin-fontawesome-css`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
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
