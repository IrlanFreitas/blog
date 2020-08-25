import React from "react"

import SobreMim from "../../images/icons/icon_sobremim.svg"
import SobreMimFill from "../../images/icons/icon_sobremim_fill.svg"
import Projetos from "../../images/icons/icon_projetos.svg"
import ProjetosFill from "../../images/icons/icon_projetos_fill.svg"
import Blog from "../../images/icons/icon_blog.svg"
import BlogFill from "../../images/icons/icon_blog_fill.svg"


import * as S from "./styled"
import "./style.css"

const icons = {
  sobreMim: SobreMim,
  sobreMimFill: SobreMimFill,
  projetos: Projetos,
  projetosFill: ProjetosFill,
  blog: Blog,
  blogFill: BlogFill,
}

export default function MenuBar() {

  const changeIconOver = (e, flag) => {
    e.currentTarget.children[0].src = icons[flag]
  }

  const changeIconLeave = (e, flag) => {
    e.currentTarget.children[0].src = icons[flag]
  }


  return (
    <S.MenuBarWrapper>
      <S.MenuBarLink to="/" activeclass="testeSobreMim">
        <S.MenuBarItem
          onMouseOver={e => changeIconOver(e, "sobreMimFill")}
          onFocus={e => changeIconOver(e, "sobreMimFill")}
          onMouseLeave={e => changeIconLeave(e, "sobreMim")}
        >
          <S.Icon src={icons.sobreMim} alt="Icone que representa a página: sobre mim"/>
          <div>sobre mim</div>
        </S.MenuBarItem>
      </S.MenuBarLink>

      {/* Ter o mesmo comportamento do spotify, depois de outro click vira uma página de pesquisa */}
      <S.MenuBarLink to="/projetos">
        <S.MenuBarItemCentral
          onMouseOver={e => changeIconOver(e, "projetosFill")}
          onFocus={e => changeIconOver(e, "projetosFill")}
          onMouseLeave={e => changeIconLeave(e, "projetos")}
        >
          <S.Icon src={icons.projetos} alt="Icone que representa a página: projetos" />
          <div>projetos</div>
        </S.MenuBarItemCentral>
      </S.MenuBarLink>

      <S.MenuBarLink to="/blog">
        <S.MenuBarItem
          onMouseOver={e => changeIconOver(e, "blogFill")}
          onFocus={e => changeIconOver(e, "blogFill")}
          onMouseLeave={e => changeIconLeave(e, "blog")}
        >
          <S.Icon src={icons.blog} alt="Icone que representa a página: blog" />
          <div>blog</div>
        </S.MenuBarItem>
      </S.MenuBarLink>

    </S.MenuBarWrapper>
  )
}
