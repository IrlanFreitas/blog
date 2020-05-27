import React from "react"
import * as S from "./styled"
import links from "./content"

export default function MenuLinks() {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, index) => (
          <S.MenuLinksItem key={`MenuLinksItem-${index}`} >
            <S.MenuLinksLink activeClassName="active" to={link.url}>{link.label}</S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}
