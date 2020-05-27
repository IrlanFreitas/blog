import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      background="coral"
      category="misc"
      date="30 de Junho de 2020"
      timeToRead="5"
      title="Diga não ao Medium"
      description="Porque você deveria ter sua plataforma"
    />
  </Layout>
)

export default IndexPage
