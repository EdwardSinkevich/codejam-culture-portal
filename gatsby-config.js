module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: `team29`,
  },
  pathPrefix: '/gatsby-i18n/gatsby-starter-i18next',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-lingui',
        short_name: 'starter',
        start_url: '/gatsby-i18n/gatsby-starter-i18next/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/movie-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-i18next`,
      options: {
        availableLngs: ['en', 'ru', 'be'],
        fallbackLng: 'en',
        debug: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
