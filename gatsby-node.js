/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//! Serve para poder trabalhar com a api do Gatsby, praticamente todos os conjuntos de dados são passados aqui

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    if (node.fileAbsolutePath.includes("/posts/")) {

      createNodeField({
        node,
        name: "slug",
        value: `/blog/${slug.slice(12)}`,
      })
    }

    if (node.fileAbsolutePath.includes("/projects/")) {
      createNodeField({
        node,
        name: "slug",
        value: `/project/${slug.slice(12)}`,
      })
    }
  }
}

const path = require(`path`)

//! Criar páginas do blog e de projetos
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postPerPage = 5

  await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC },
          filter: { fileAbsolutePath: { regex: "/posts/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                date
                image
                category
                background
              }
              timeToRead
              fields {
                slug
              }
            }
            next {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {

    const allPosts = result.data.allMarkdownRemark.edges

    allPosts.forEach(({ node, next, previous }) => {

      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    const numPagesBlog = Math.ceil(allPosts.length / postPerPage)

    Array.from({ length: numPagesBlog }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog/` : `/blog/page/${index + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limitBlog: postPerPage,
          skipBlog: index * postPerPage,
          numPagesBlog,
          currentPageBlog: index + 1,
        },
      })
    })

  })

  await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC },
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                image
                date
                duration
                repo
                publication
                stack
              }
              timeToRead
              fields {
                slug
              }
            }
            next {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const allPosts = result.data.allMarkdownRemark.edges
    
    allPosts.forEach(({ node, next, previous }) => {
      
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/project-post.js"),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    const numPagesProject = Math.ceil(allPosts.length / postPerPage)

    Array.from({ length: numPagesProject }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/project/` : `/project/page/${index + 1}`,
        component: path.resolve("./src/templates/project-list.js"),
        context: {
          limitProject: postPerPage,
          skipProject: index * postPerPage,
          numPagesProject,
          currentPageProject: index + 1,
        },
      })
    })
  })

}
