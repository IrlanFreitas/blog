import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Avatar() {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpg"}) {
          childImageSharp {
              fixed(width: 80, height: 80) {
                  ...GatsbyImageSharpFixed_tracedSVG
              }
          }
      }
    }
  `)

  return <Img fixed={avatarImage.childImageSharp.fixed} style={{borderRadius: 50}} />
}
