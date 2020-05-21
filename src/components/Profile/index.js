import React from "react"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

export default function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          position
          description
          title
        }
      }
    }
  `)

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}

// function ProfileStatic() {
//   const query = graphql`
//     query MySiteMetadata {
//       site {
//         siteMetadata {
//           position
//           description
//           title
//         }
//       }
//     }
//   `

//   return (
//     <>
//       <StaticQuery
//         query={query}
//         render={({
//           site: {
//             siteMetadata: { title, position, description },
//           },
//         }) => (
//           <div className="Profile-wrapper">
//             <h1>{title}</h1>
//             <h2>{position}</h2>
//             <p>{description}</p>
//           </div>
//         )}
//       />
//     </>
//   )
// }
