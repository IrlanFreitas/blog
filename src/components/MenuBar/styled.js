import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Home } from "@styled-icons/boxicons-solid/Home"
import { Crown } from "@styled-icons/fa-solid/Crown"
import { Flag } from "@styled-icons/boxicons-regular/Flag"

export const MenuBarWrapper = styled.nav`
  
  background: var(--background);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  /* padding: 0.8rem 0; */
  width: 100%;
  transition: background 0.5s;

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

export const MenuBarLink = styled(AniLink)`
  display: block;
  text-decoration: none;

  /* &.active {
    color: var(--highlight) !important;
    /* span {
    } 
  }*/
`

export const HomeStyled = styled(Home)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 5px;
`

export const CrownStyled = styled(Crown)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 5px;
`

export const FlagStyled = styled(Flag)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 5px;
`

export const MenuBarItem = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--texts);
  cursor: pointer;
  /* width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem; */
  width: auto;
  height: 100%;
  padding: 10px;

  /* ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  } */

  &:hover {
    color: var(--highlight);
  }
`

export const Artist = styled.a`
  text-decoration: underline;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #787878;
  text-transform: lowercase;
  opacity: 1;
`
