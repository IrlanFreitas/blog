import React from "react"

import SEO from "../components/seo"


import fourOhFour from "../images/404.svg"

import GlobalStyles from "../styles/global"
import * as S from "../components/NotFound/styled"

export default function NotFoundPage() {
  // const { fourOhFour } = useStaticQuery(graphql`
  //   query {
  //     fourOhFour: file(relativePath: { eq: "404.svg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 80) {
  //           ...GatsbyImageSharpFluid_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <S.NotFoundWrapper>
      <SEO title="404: Not found" />
      <GlobalStyles />
      <S.NotFoundImage src={fourOhFour} />
      <S.NotFoundLink to="/">Voltar para a home</S.NotFoundLink>
    </S.NotFoundWrapper>
  )
}
