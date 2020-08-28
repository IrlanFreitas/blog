import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.nav`
  background: var(--background);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  transition: background 1s;
`

export const MenuBarLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: auto;
  position: relative;
  color: var(--texts);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 100%;
  transition: 1s flex-direction, 1s font-size, 1s width;

  ${media.lessThan("small")`
    flex-direction: column;
    font-size: 12px;
    width: 5rem;
  `}

  &:hover {
    color: var(--highlight);
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

export const MenuBarItemCentral = styled.div`
  height: 100%;
  margin: 0 4rem;
  transition: 1s margin;

  ${media.lessThan("small")`
    margin: 0 2rem;
  `}
`
