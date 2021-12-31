const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulHomePetShop {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulHomePetShop.edges.forEach(edge => {
    createPage({
      path: `/index/${edge.node.slug}`,
      component: path.resolve("./src/templates/dog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}