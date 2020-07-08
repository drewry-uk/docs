module.exports = {
  siteMetadata: {
    title: 'Drewry Container Benchmark Index',
    shortName: 'Documentation',
    description: 'Composable Benchmark Container Rate Index',
  },
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..', // defaults to '.'
        icon: './src/images/logo.png', // This path is relative to the root of the site.
      },
    },
  ],
}