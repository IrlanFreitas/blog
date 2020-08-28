import styled from "styled-components"
import media from "styled-media-query"

export const ListWrapper = styled.section`
  padding: 0px 18%;
  transition: 1s all;

  ${media.lessThan("medium")`
    padding: 0px 8%;
  `}
`
