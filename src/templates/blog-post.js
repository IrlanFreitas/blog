import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  return (
    <>
      <h1>Title: {data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </>
  )
}

export const query = graphql`
  query PostContent($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost
