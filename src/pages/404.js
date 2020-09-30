import React from "react"

import SEO from "../components/seo"
import fourOhFour from "../images/404.svg"

import GlobalStyles from "../styles/global"
import * as S from "../components/NotFound/styled"

import image from "../images/icon.png"

export default function NotFoundPage() {

  return (
    <S.NotFoundWrapper>
      <SEO title="404: Not found" image={image} />
      <GlobalStyles />
      <S.NotFoundImage src={fourOhFour} />
      <S.NotFoundLink to="/">Voltar para a home</S.NotFoundLink>
    </S.NotFoundWrapper>
  )
}
