import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const NotFoundWrapper = styled.div`
  background: var(--background);
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const NotFoundImage = styled.img`
  width: 35rem;
  padding: 0 7%;
  transition: 1s all;

  ${media.lessThan("small")`
    width: 100%;
  `}
`

export const NotFoundLink = styled(Link)`
    margin-top: 50px;
    color: var(--highlight);
`