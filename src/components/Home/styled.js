import styled from "styled-components"
import media from "styled-media-query"

export const HomeWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
  transition: 1s flex-direction;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const HomeImage = styled.section`
  width: 42%;
  display: flex;
  justify-content: flex-end;
  transition: 1s width;

  ${media.lessThan("small")`
    width: 100%;
  `}
`

export const HomeDescriptions = styled.section`
  width: 58%;
  padding: 0 40px;

  ${media.lessThan("small")`
    transition: 1s all;
    width: 100%;
    padding: 0;
  `}
`
export const Developer = styled.h2`
  text-align: left;
  font-size: 37px;
  letter-spacing: 0px;
  color: #787878;
  text-transform: lowercase;
  margin-bottom: 30px;
  margin-top: -10px;
  margin-left: 10px;
  transition: 1s all;

  ${media.lessThan("small")` 
    font-size: 22px;
    margin-bottom: 10px;
  `}
`

export const Phrase = styled.p`
  font-size: 23px;
  color: #c4c4c4;
  transition: 1s all;

  ${media.lessThan("320px")` 
    font-size: 12px;
  `}

  ${media.lessThan("small")` 
    font-size: 16px;
    margin: 30px 0;
  `}

  ${media.lessThan("medium")` 
    text-align: center;
  `}
`
export const Logo = styled.a``

export const Artist = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: #787878;
  font-size: 12px;
  font-weight: 300;
  align-items: center;
  margin-right: 15px;
  margin-top: 6px;
  display: flex;
  align-items: center;
`
