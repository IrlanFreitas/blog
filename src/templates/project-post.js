import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"
import * as S from "../components/Project/styled"

import Calendar from "../images/icons/calendar_02.svg"
import Timer from "../images/icons/time-left.svg"
import Checklist from "../images/icons/lista.svg"
import Github from "../images/icons/github_fill.svg"
import Link from "../images/icons/link.svg"

const ProjectPost = ({ data, pageContext }) => {
  const project = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description}
        image={project.frontmatter.image}
      />
      <S.ProjectHeader>
        {project.frontmatter.image && (
          <S.ProjectImage src={project.frontmatter.image} />
        )}
        <S.ProjectDate>
          <span style={{ display: "inline-block" }}>
            <S.Icon src={Calendar} alt="Ícone de calendário" />
            {project.frontmatter.date}
          </span>
          <span style={{ marginLeft: 30, display: "inline-block" }}>
            <S.Icon src={Timer} alt="Ícone de relógio" /> {project.timeToRead}
            min de leitura
          </span>
          <S.ProjectIcon>
            <S.Icon src={Checklist} alt="Ícone de checklist" />
            {project.frontmatter.duration} meses
          </S.ProjectIcon>
        </S.ProjectDate>
        <S.ProjectDate>
          <S.ProjectLink
            href={project.frontmatter.repo}
            title={`Github do ${project.frontmatter.title}`}
            target="_black"
            rel="noopener noreferrer"
            style={
              project.frontmatter.repo === ""
                ? { pointerEvents: "none", color: "#1e1e1e" }
                : {}
            }
          >
            <S.Icon src={Github} alt="Ícone do github" /> Repositório
          </S.ProjectLink>
          <S.ProjectLink
            href={project.frontmatter.publication}
            title={`Publicação do ${project.frontmatter.title}`}
            target="_black"
            rel="noopener noreferrer"
            style={
              project.frontmatter.publication === ""
                ? { marginLeft: 30, pointerEvents: "none", color: "#1e1e1e" }
                : { marginLeft: 30 }
            }
          >
            <S.Icon src={Link} alt="Ícone de link" /> Publicação
          </S.ProjectLink>
        </S.ProjectDate>
        <S.ProjectStack>
          {project.frontmatter.stack &&
            project.frontmatter.stack.split(",").map(item => {
              return <S.ProjectStackItem>{item}</S.ProjectStackItem>
            })}
        </S.ProjectStack>
        <S.ProjectTitle>{project.frontmatter.title}</S.ProjectTitle>
        <S.ProjectDescription>
          {project.frontmatter.description}
        </S.ProjectDescription>
      </S.ProjectHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={project.fields.slug} title={project.frontmatter.title} />
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
        duration
        repo
        publication
        stack
      }
      html
      timeToRead
    }
  }
`

export default ProjectPost
