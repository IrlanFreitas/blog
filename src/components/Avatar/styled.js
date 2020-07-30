import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

//* Feito de forma diferente com os (),
//* para que se consiga estilizar a tag Img do gatsby-image

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;
  width: 3.75rem;
  margin: auto;

  ${media.lessThan("large")` 

    height: 1.875rem;
    width: 1.875rem;

    `}
`
