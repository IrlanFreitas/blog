import React from "react"
import propTypes from "prop-types"
import { ArrowIosForwardOutline as ArrowForward } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline"
import { ArrowIosBackOutline as ArrowBack } from "@styled-icons/evaicons-outline/ArrowIosBackOutline"

import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const RecommendedPosts = ({ next, previous }) => {
  return (
    <S.RecommendedWrapper>
      {previous && (
        <S.RecommendedLink
          to={previous.fields.slug}
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          className="previous"
        >
          <ArrowBack className="icon" style={{ width: "16px", marginRight: "-9px" }} />
          <ArrowBack className="icon" style={{ width: "16px" }} /> {previous.frontmatter.title}
        </S.RecommendedLink>
      )}
      {next && (
        <S.RecommendedLink
          to={next.fields.slug}
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          className="next"
        >
          {next.frontmatter.title} <ArrowForward className="icon" style={{ width: "16px" }} />
          <ArrowForward className="icon" style={{ width: "16px", marginLeft: "-9px" }} />
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  )
}

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
