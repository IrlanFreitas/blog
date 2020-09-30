import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

import { ArrowIosForwardOutline as ArrowForward } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline"
import { ArrowIosBackOutline as ArrowBack } from "@styled-icons/evaicons-outline/ArrowIosBackOutline"
import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    <Link
      to={!isFirst ? prevPage : " "}
      style={isFirst ? { pointerEvents: "none", color: "#1e1e1e" } : {}}
    >
      <ArrowBack style={{ width: "16px", marginRight: "-9px" }} />
      <ArrowBack style={{ width: "16px", marginRight: "5px" }} />
      página anterior
    </Link>

    <p>
      {currentPage}/{numPages}
    </p>

    <Link
      to={!isLast ? nextPage : " "}
      style={isLast ? { pointerEvents: "none", color: "#1e1e1e" } : {}}
    >
      próxima pagina
      <ArrowForward style={{ width: "16px", marginLeft: "5px" }} />
      <ArrowForward style={{ width: "16px", marginLeft: "-9px" }} />
    </Link>
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
