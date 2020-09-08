import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"
import * as S from "../components/Post/styled"

import Calendar from "../images/icons/calendar_02.svg"
import Timer from "../images/icons/time-left.svg"

const ProjectPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        {post.frontmatter.image && <S.PostImage src={post.frontmatter.image} />}
        <S.PostDate>
          <span>
            <S.Icon src={Calendar} alt="Ícone de calendário" />
            {post.frontmatter.date}
          </span>
          <span style={{ marginLeft: 30 }}>
            <S.Icon src={Timer} alt="Ícone de relógio" /> {post.timeToRead} min
            de leitura
          </span>
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query PostProjectContent($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD/MM/yyyy")
        image
      }
      html
      timeToRead
    }
  }
`

export default ProjectPost
