import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  background: #000;
  display: flex;

  & .icon {
    ${media.lessThan("small")`
      display: none;
    `}
  }
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: #000;
  color: #787878;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan("medium")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    color: var(--highlight);
  }
  &.previous {
    justify-content: flex-end;
  }
  &.next {
    justify-content: flex-start;
  }
`
