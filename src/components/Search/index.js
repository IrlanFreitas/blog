import React from "react"
import * as S from "./styled"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Hit from './Hit'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexNameBlog: process.env.GATSBY_ALGOLIA_POST_INDEX_NAME,
  indexNameProject: process.env.GATSBY_ALGOLIA_PROJECT_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = ({find}) => {

  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={find === "project" ? algolia.indexNameProject : algolia.indexNameBlog}>
        <SearchBox translations={{placeholder: "Pesquisar..."}} />
        <Stats translations={{stats(nbHits, timesSpentMs) {
            return `${nbHits} resultados encontrados em ${timesSpentMs} ms` 
        }}}/>
        <Hits hitComponent={Hit}/>
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
