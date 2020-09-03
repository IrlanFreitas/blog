// gatsby-config.js
require("dotenv").config()

const postQuery = `{
    posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            title
            category
            background
            date_timestamp: date
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            section
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`

const flattenBlog = arr =>
  arr
    .filter(post => post.node.frontmatter.section === "blog")
    .map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      date_timestamp: parseInt(
        (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
      ),
      ...rest,
    }))

const flattenProject = arr =>
  arr
    .filter(post => post.node.frontmatter.section === "project")
    .map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      date_timestamp: parseInt(
        (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
      ),
      ...rest,
    }))

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flattenBlog(data.posts.edges), // optional
    indexName: process.env.GATSBY_ALGOLIA_POST_INDEX_NAME, // overrides main index name, optional
    settings: {
      attributesToSnippet: [`excerpt:20`],
    },
  },
  {
    query: postQuery,
    transformer: ({ data }) => flattenProject(data.posts.edges), // optional
    indexName: process.env.GATSBY_ALGOLIA_PROJECT_INDEX_NAME, // overrides main index name, optional
    settings: {
      attributesToSnippet: [`excerpt:20`],
    },
  },
]

module.exports = queries
