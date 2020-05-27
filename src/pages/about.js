import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Page</h1>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about"  activeStyle={{ color: "red" }}>About (gatsby link)</Link>
      </li>
    </ul>
  </Layout>
)

export default AboutPage
