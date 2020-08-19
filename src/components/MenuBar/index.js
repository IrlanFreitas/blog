import React, { useState, useEffect } from "react"

import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"

import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "@styled-icons/boxicons-regular/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ListUl as List } from "@styled-icons/boxicons-regular/ListUl"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"
import './style.css'

export default function MenuBar() {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)

    setDisplay(window.__display)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarLink
        cover
        direction="top"
        bg={getThemeColor()}
        duration={0.6}
        to="/"
        activeClass="active"
      >
        <S.MenuBarItem>
          <S.HomeStyled />
          <div>sobre mim</div>
        </S.MenuBarItem>
      </S.MenuBarLink>

      {/* Ter o mesmo comportamento do spotify, depois de outro click vira uma página de pesquisa */}
      <S.MenuBarLink
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        to="/projetos"
      >
        <S.MenuBarItem>
          <S.CrownStyled /> <div>projetos</div>
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        to="/blog"
      >
        <S.MenuBarItem>
          <S.FlagStyled /> <div>blog</div>
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarItem
        style={{ position: "absolute", right: 0 }}
        title="Artista que desenhou a página"
      >
        <S.Artist href="https://www.linkedin.com/in/flaviakian" target="_blank">
          /designed by kian
        </S.Artist>
      </S.MenuBarItem>
    </S.MenuBarWrapper>
  )
}
