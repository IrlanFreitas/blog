import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Home from '../components/Home'

import image from "../images/banner.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="sobre mim" image={image} />
    <Home />
  </Layout>
)

export default IndexPage