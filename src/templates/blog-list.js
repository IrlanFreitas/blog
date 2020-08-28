import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="blog" description={"Blog com posts sobre experiências no desenvolvimento"}/>
      <S.ListWrapper>
        {postList?.map(
          ({
            node: {
              id,
              frontmatter: { title, description, date, category, background, image },
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
              image={image}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD/MM/yyyy")
            description
            category
            background
            image
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
