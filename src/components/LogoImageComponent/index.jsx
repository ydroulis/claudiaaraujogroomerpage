import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styles'
import Img from "gatsby-image";


const LogoImageComponent = () => {
  const { img } = useStaticQuery(
    graphql`
      query {
        img: file(relativePath: { eq: "Logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
      <S.ImgContainer fluid={img.childImageSharp.fluid} />
  )
}

export default LogoImageComponent
