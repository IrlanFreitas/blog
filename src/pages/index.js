import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Home from '../components/Home'

const IndexPage = () => (
  <Layout>
    <SEO title="sobre mim" />
    <Home />
  </Layout>
)

export default IndexPage