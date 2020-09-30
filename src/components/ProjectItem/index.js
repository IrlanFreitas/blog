import React from "react"

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
          src={`/${image}`}
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
              Duração de {duration} meses
            </S.ProjectItemDuration>
          </S.ProjectItemDetails>
          {/* <S.ProjectItemTag background={background}>{category}</S.ProjectItemTag> */}
        </S.ProjectItemInfo>
      </S.ProjectItemWrapper>
    </S.ProjectItemLink>
  )
}

export default ProjectItem
