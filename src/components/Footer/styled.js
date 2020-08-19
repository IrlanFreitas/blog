import styled from "styled-components"
import media from "styled-media-query"

export const FooterWrapper = styled.footer`
  /* align-items: center; */
  /* border-right: 1px solid var(--borders);*/
  background: var(--background); 
  display: flex;
  /* flex-direction: column; */
  height: 4.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 5px;
  box-shadow: 0px -5px 8px #282828;
  /* text-align: center; */

  /* ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `} */
`