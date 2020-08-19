//* Importando a lib que usaremos para estilizar os componentes
//* com CCS-in-JS
import styled from "styled-components"
import media from "styled-media-query"

//* Componente que irá encapsular toda tela
export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

//* Onde terá o conteúdo principal da página
export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 3rem 3rem 4.5rem 3rem;
  transition: background, color 0.5s;
  width: 100%;

  /* ${media.lessThan("large")`
    padding: 0;
    margin: 3.5rem 0;
  `} */

  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";

  }
`
