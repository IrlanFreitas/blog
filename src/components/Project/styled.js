import styled from "styled-components"
import media from "styled-media-query"

export const ProjectHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 0 5rem 0;
  transition: 1s all;

  ${media.lessThan("medium")`
    padding: 0;
    max-width: 100%;
  `}
`

export const ProjectImage = styled.img`
  padding: 0 1.4rem;
  height: 15rem;
`

export const Icon = styled.img`
  display: inline-block;
  height: 14px;
  width: 14px;
  margin-right: 3px;
`

export const ProjectTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  transition: 1s all;

  ${media.lessThan("medium")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const ProjectDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;
  transition: 1s all;

  ${media.lessThan("medium")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const ProjectDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
  transition: 1s all;
  margin-top: 2rem;
`

export const ProjectStack = styled.div`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
  transition: 1s all;
  margin-top: 2rem;
`

export const ProjectIcon = styled.span`
  margin-left: 30px;
  display: inline-block;

  ${media.lessThan("375px")`
    margin-top: 5px;
    margin-left: 0
  `}
`

export const ProjectLink = styled.a`
  text-decoration: none;
  color: var(--postColor);
`

export const ProjectStackItem = styled.span`
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 21px;
  color: black;
  font-size: 0.8rem;
  min-height: auto;
  width: max-content;
  padding: 4px 9px;
  margin: 5px;
  text-transform: lowercase;
  transition: 1s all;
  font-weight: 700;
  display: inline-block;
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;
  transition: 1s all;

  ${media.lessThan("medium")`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan("medium")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;

    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;

    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;

    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan("large")`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--postColor);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
