import React from "react"
import propTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"
import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://irlanfreitas.me${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        samesite="none"
        shortname="irlanfreitas"
        identifier={completeURL}
        title={title}
        url={completeURL}
        language="pt-br"
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}

export default Comments
