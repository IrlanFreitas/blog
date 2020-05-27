import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as S from "./styled"

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
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
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
