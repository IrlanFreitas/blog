
//* Importando a lib que usaremos para estilizar os componentes
//* com CCS-in-JS
import styled from "styled-components"

//* Componente que irá encapsular toda tela
export const LayoutWrapper = styled.section`
  display: flex;
`

//* Onde terá o conteúdo principal da página
export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  body#grid & {
    grid-template-areas: 
      "posts" 
      "pagination";
    
  }
`
