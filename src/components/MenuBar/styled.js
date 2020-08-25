import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.nav`
  
  background: var(--background);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  /* padding: 0.8rem 0; */
  width: 100%;
  transition: background 1s;

  /* ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    flex-direction: row;
    position: fixed;
    width: 100%;
    height: auto;
    padding: 0;
    bottom: 0;
  `} */
`

// export const MenuBarGroup = styled.div`
//   display: flex;
//   flex-direction: row;

//   /* ${media.lessThan("large")`
//     flex-direction: row;
//   `} */
// `

export const MenuBarLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: auto;

  &.active {
  }
`

export const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 5px;
  transition: 1s all;

  ${media.lessThan("small")`
    margin-right: 0;
    margin-bottom: 5px;
    width: 1.35rem;
    height: 1.35rem;
  `}
`

export const MenuBarItem = styled.div`
  position: relative;
  color: var(--texts);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  transition: 1s flex-direction;

  ${media.lessThan("small")`
    flex-direction: column;
  `}

  &:hover {
    color: var(--highlight);
  }
`

export const MenuBarItemCentral = styled(MenuBarItem)`
  margin: 0 5.5rem;
  transition: 1s margin;

  ${media.lessThan("320px")`
    margin: 0 3rem;
  `}
`
