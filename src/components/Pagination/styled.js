import styled from "styled-components"
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  align-items: center;
  color: #787878;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  transition: 1s all;

  ${media.lessThan("550px")`
    font-size: .81rem;
    padding: 1rem;
  `}

  a {
    color: #787878;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }

  > * {
    margin: 0 30px;

    ${media.lessThan("550px")`
      margin: 0 16px;
    `}
  }
`
