import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ProjectItem from "../components/ProjectItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styled"

const ProjectList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPageProject, numPagesProject } = props.pageContext
  const isFirst = currentPageProject === 1
  const isLast = currentPageProject === numPagesProject
  const prevPage =
    currentPageProject - 1 === 1
      ? `/project/`
      : `/project/page/${currentPageProject - 1}`
  const nextPage = `/project/page/${currentPageProject + 1}`

  return (
    <Layout>
      <SEO
        title="projetos"
        description={"Posts sobre experiências com projetos"}
      />
      <S.ListWrapper>
        {postList
          ?.map(
            ({
              node: {
                id,
                frontmatter: {
                  title,
                  description,
                  date,
                  image,
                  duration,
                },
                timeToRead,
                fields: { slug },
              },
            }) => (
              <ProjectItem
                key={id}
                slug={slug}
                date={date}
                timeToRead={timeToRead}
                title={title}
                description={description}
                image={image}
                duration={duration}
              />
            )
          )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPageProject}
        numPages={numPagesProject}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query ProjectList($skipProject: Int!, $limitProject: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limitProject
      skip: $skipProject
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD/MM/yyyy")
            description
            image
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
      }
    }
  }
`

export default ProjectList
