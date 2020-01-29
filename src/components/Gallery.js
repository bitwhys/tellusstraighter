import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

import GalleryItem from "@components/GalleryItem"

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 16px;
`
const Gallery = () => {
  const {
    allFile: { images },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/featured$/" } }) {
        images: nodes {
          name
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <FlexBox>
      {images.map(image => (
        <GalleryItem
          key={image.name}
          image={image.sharp.fluid}
          topic={image.name.split("-")[0]}
        />
      ))}
    </FlexBox>
  )
}

export default Gallery
