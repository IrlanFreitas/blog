import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = ({ location: { search } }) => {

  return (
    <Layout>
      <SEO title="Search" />
      <Search find={search.slice(6)}/>
    </Layout>
  )
}

export default SearchPage
