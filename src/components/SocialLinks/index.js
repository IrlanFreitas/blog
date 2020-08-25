import React from "react"
import SocialMedia from "./content"

import * as S from "./styled"

export default function SocialLinks() {
  const changeIconOver = (e, socialMedia) => {
    e.target.src = socialMedia.iconFill
  }

  const changeIconLeave = (e, socialMedia) => {
    e.target.src = socialMedia.icon
  }

  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {SocialMedia.map((socialMedia, i) => {
          return (
            <S.SocialLinksItem key={`SocialLink-${i}`}>
              <S.SocialLinksLink
                href={socialMedia.url}
                title={socialMedia.label}
                target="_black"
                rel="noopener noreferrer"
              >
                <S.Icon
                  src={socialMedia.icon}
                  style={{width: socialMedia.label === "URI" && '2rem', height: socialMedia.label === "URI" && '2rem'}}
                  onMouseOver={e => changeIconOver(e, socialMedia)}
                  onFocus={e => changeIconOver(e, socialMedia)}
                  onMouseLeave={e => changeIconLeave(e, socialMedia)}
                  onBlur={e => changeIconLeave(e, socialMedia)}
                />
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}
