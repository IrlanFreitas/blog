import React from "react"

import Calendar from "../../images/icons/calendar_02.svg"
import Timer from "../../images/icons/time-left.svg"

import * as S from "./styled"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
  image,
}) => {

  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemImage
          src={`/${image}`}
          alt={`Image que descreve o post: ${title}`}
        />

        <S.PostItemInfo>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
          <S.PostItemDetails>
            <S.PostItemDate>
              <S.Icon src={Calendar} alt="Ícone de calendário" />
              {date}
            </S.PostItemDate>
            <S.PostItemTimeToRead>
              <S.Icon src={Timer} alt="Ícone de relógio" />
              {timeToRead} min de leitura
            </S.PostItemTimeToRead>
          </S.PostItemDetails>
          {/* {category && (
            <S.PostItemTag background={background}>{category}</S.PostItemTag>
          )} */}
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

export default PostItem
