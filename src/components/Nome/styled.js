import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const NomeWrapper = styled(Img)`
  width: 25rem;
  transition: 1s width;

  ${media.lessThan("medium")` 
    width: 22rem; 
  `}

  ${media.lessThan("small")` 
    width: 100%; 
  `}
`
