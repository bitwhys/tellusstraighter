/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

// --------- local ---------
import { mq } from "@utils"
import Container from "@components/elements/Container"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  background-attachment: fixed;
  height: 400px;
  ${mq[1]} {
    height: 500px;
  }
`

const TextBox = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
`

const Hero = () => {
  const {
    mdx: { frontmatter: image },
    site: { info: blog },
  } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { title: { eq: "hero-image" } }) {
        frontmatter {
          credit: bannerCredit
          banner {
            sharp: childImageSharp {
              fluid(quality: 80, maxWidth: 1920, grayscale: true) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      site {
        info: siteMetadata {
          tagLine
          description
        }
      }
    }
  `)
  return (
    <ImageBackground Tag="div" fluid={image.banner.sharp.fluid}>
      <TextBox>
        <h1>
          Providing colored commentary, in{" "}
          <span sx={{ color: "primary" }}>black&nbsp;&&nbsp;white.</span>
        </h1>
        <p>{blog.description}</p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
