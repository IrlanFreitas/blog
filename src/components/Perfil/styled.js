import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

//* Feito de forma diferente com os (),
//* para que se consiga estilizar a tag Img do gatsby-image

export const PerfilWrapper = styled(Img)`
  width: 23rem;
  transition: 1s all;

  ${media.lessThan("medium")` 
    width: 100%;
    margin: 20px auto 10px auto;
  `}

  ${media.lessThan("small")` 
    width: 75%;
    margin: 20px auto 10px auto;
  `}
`
