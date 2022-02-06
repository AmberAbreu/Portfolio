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
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					process.env.GA_TRACKING_ID, // Google Analytics / GA
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					optimize_id: 'OPT_CONTAINER_ID',
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					exclude: ['/preview/**'],
				},
			},
		},
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
