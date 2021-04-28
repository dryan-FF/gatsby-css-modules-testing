module.exports = {
  plugins: [
    {
      options: {
        postCssPlugins: [require('postcss-nested')()],
      },
      resolve: `gatsby-plugin-postcss`,
    },
  ],
}