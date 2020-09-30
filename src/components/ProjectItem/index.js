import React from "react"
import PropTypes from "prop-types"

import DefaultImagePost from "../../images/banner.svg"
import Calendar from "../../images/icons/calendar_02.svg"
import Timer from "../../images/icons/time-left.svg"
import Checklist from "../../images/icons/lista.svg"

import * as S from "./styled"

const ProjectItem = ({
  slug,
  date,
  timeToRead,
  title,
  description,
  image,
  duration,
}) => {
  return (
    <S.ProjectItemLink to={slug}>
      <S.ProjectItemWrapper>
        <S.ProjectItemImage
          src={image ? image : DefaultImagePost}
          alt={`Image que descreve o post: ${title}`}
        />

        <S.ProjectItemInfo>
          <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
          <S.ProjectItemDescription>{description}</S.ProjectItemDescription>
          <S.ProjectItemDetails>
            <S.ProjectItemDate>
              <S.Icon src={Calendar} alt="Ícone de calendário" />
              {date}
            </S.ProjectItemDate>
            <S.ProjectItemTimeToRead>
              <S.Icon src={Timer} alt="Ícone de relógio" />
              {timeToRead} min de leitura
            </S.ProjectItemTimeToRead>
            <S.ProjectItemDuration>
              <S.Icon src={Checklist} alt="Ícone de checklist" />
              {duration} meses
            </S.ProjectItemDuration>
          </S.ProjectItemDetails>
          {/* <S.ProjectItemTag background={background}>{category}</S.ProjectItemTag> */}
        </S.ProjectItemInfo>
      </S.ProjectItemWrapper>
    </S.ProjectItemLink>
  )
}

ProjectItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  duration: PropTypes.string.isRequired,
}

export default ProjectItem
