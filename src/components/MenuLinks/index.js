import React from "react"
import * as S from "./styled"
import links from "./content"
import getThemeColor from '../../utils/getThemeColor'

export default function MenuLinks() {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, index) => (
          <S.MenuLinksItem key={`MenuLinksItem-${index}`} >
            <S.MenuLinksLink cover direction="left" bg={getThemeColor()} duration={0.6} activeClassName="active" to={link.url}>{link.label}</S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}
