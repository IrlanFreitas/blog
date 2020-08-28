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
  padding-bottom: 4.5rem;
  transition: background, color 0.5s;
  width: 100%;
`
