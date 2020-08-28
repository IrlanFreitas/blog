import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//! Não é mais necessário
//import Img from "gatsby-image"

import * as S from "./styled"

export default function Avatar() {
  //* Existem dois formatos de imagens que o Gatsby utiliza
  //! o fixed, quando se define a largura e altura
  //! o fluid, quando se define o máximo de altura e largura
  //* no fluid é importante que o container tenha um tamanho máximo
  //* para conter a imagem

  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}
