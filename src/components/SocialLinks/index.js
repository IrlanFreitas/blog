import React from "react"

import Icons from "./Icons"
import Links from "./content"

import * as S from "./styled"

export default function SocialLinks() {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {Links.map((link, i) => {
          const Icon = Icons[link.label]

          return (
            <S.SocialLinksItem key={`SocialLink-${i}`}>
              <S.SocialLinksLink
                href={link.url}
                title={link.label}
                target="_black"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}
