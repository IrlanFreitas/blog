import styled from 'styled-components'
import Img from "gatsby-image"

//* Feito de forma diferente com os (),
//* para que se consiga estilizar a tag Img do gatsby-image

export const AvatarWrapper = styled(Img)`
    border-radius: 50%;
    height: 3.75rem;
    margin: auto;
    width: 3.75rem;
`