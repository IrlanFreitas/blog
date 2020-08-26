import React from "react"
import Perfil from "../Perfil"
import SocialLinks from "../SocialLinks"
import Nome from "../Nome"
import Kian from "../../images/icons/kian.svg"

import * as S from "./styled"

export default function Home() {
  return (
    <S.HomeWrapper>
      <S.Artist>
        <span style={{marginRight: '7px'}}>designed by</span>
        <S.Logo href="https://www.linkedin.com/in/flaviakian" target="_blank">
          <img
            src={Kian}
            alt="Logomarga do designer que desenhou a página"
            style={{
              width: "2.15rem",
              height: "2.15rem",
            }}
          />
        </S.Logo>
      </S.Artist>
      <S.HomeImage>
        <Perfil />
      </S.HomeImage>
      <S.HomeDescriptions>
        <Nome />
        <S.Developer>/developer</S.Developer>
        <S.Phrase>"Aqui escrevo o que não sei para quem importa, eu."</S.Phrase>
        <SocialLinks />
      </S.HomeDescriptions>
    </S.HomeWrapper>
  )
}
