import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 1rem 2rem;
  width: 100%;
  transition: 1s flex-direction, align-items;

  ${media.lessThan("600px")`
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 21px;
  color: var(--postColor);
  font-size: 0.8rem;
  min-height: auto;
  width: max-content;
  padding: 4px 9px;
  margin-top: 15px;
  text-transform: lowercase;
  transition: 1s all;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  transition: 1s margin;

  ${media.lessThan("425px")`
    margin: 0;
  `}
`

export const PostItemDetails = styled.time`
  font-size: 0.75rem;
  margin-top: 10px;
  margin-left: 2px;
`

export const PostItemDate = styled.div`
  display: inline-block;
  margin-right: 15px;
`

export const PostItemTimeToRead = styled.div`
  display: inline-block;
`

export const Icon = styled.img`
  display: inline-block;
  height: 14px;
  width: 14px;
  margin-right: 5px;
`

export const PostItemImage = styled.img`
  height: 125px;
  width: 225px;
  margin-right: 10px;
  border-radius: 10px;
  /* box-shadow: 0px 0px 10px #282828; */
  transition: 1s margin, width;

  ${media.lessThan("600px")`
    margin: 0 auto 10px auto;
    width: 100%;
  `}
`

export const PostItemTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: #da94ff;
`

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1;
`
