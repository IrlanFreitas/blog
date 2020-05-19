import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>

    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>


  </Layout>
)

export default IndexPage
