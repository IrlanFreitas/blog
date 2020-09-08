import React from "react"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"
import DefaultImagePost from "../../images/banner.svg"
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
  section,
  duration,
  link,
  stack,
}) => {
  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemImage
          src={image ? image : DefaultImagePost}
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
          <S.PostItemTag background={background}>{category}</S.PostItemTag>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default PostItem
