import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] yyyy")
              description
              category
              background
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      {edges?.map(
        ({
          node: {
            id,
            frontmatter: { title, description, date, category, background },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            key={id}
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
