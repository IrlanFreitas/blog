import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  width: 350px;
  margin-left: 0;
  margin-top: 10%;
  transition: 1s all;

  ${media.lessThan("medium")`
    margin-top: 5%;
    width: 100%;
  `}
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  text-decoration: none;
`

export const Icon = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`
