module.exports = {
  siteMetadata: {
    title: "The Home Page of Soeren Martius. Entrepreneur and technologist who loves building and delivering digital products and managing and scaling engineering teams.",
    author: "Soeren Martius",
    description: ""
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: '',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
