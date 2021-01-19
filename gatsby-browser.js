/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//! Aqui são passados todas as variáveis ou libs que queiramos utilizar no frontend
//* Aqui são para itens relacionados ao coisas fora do react, document, third-parties

import 'lazysizes'
import React from 'react'
import ReactDOM from 'react-dom'
import SWUpdater from './src/components/SWUpdater'

require("prismjs/themes/prism-tomorrow.css")

function onServiceWorkerUpdateReady() {
    const root = document.createElement('div')
    document.body.appendChild(root)

    ReactDOM.render(<SWUpdater />, root)
}

export { onServiceWorkerUpdateReady }