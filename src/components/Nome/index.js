import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

export default function Nome() {

    //* Existem dois formatos de imagens que o Gatsby utiliza
    //! o fixed, quando se define a largura e altura 
    //! o fluid, quando se define o máximo de altura e largura
    //* no fluid é importante que o container tenha um tamanho máximo 
    //* para conter a imagem

  const { perfilImage: nomeImage } = useStaticQuery(graphql`
    query {
      perfilImage: file(relativePath: { eq: "nome.png"}) {
          childImageSharp {
              fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
              }
          }
      }
    }
  `)

  return <S.NomeWrapper fluid={nomeImage.childImageSharp.fluid} />
}
