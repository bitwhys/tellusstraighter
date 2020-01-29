import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import TopicBadge from "@components/elements/TopicBadge"

const Image = styled(Img)`
  filter: grayscale(100%);
  transition: all 300ms linear;
  border-radius: 3px;
  height: 160px;

  :hover {
    filter: none;
    box-shadow: 0 4px 8px rgb(0, 0, 0, 0.25);

    & + a {
      background-color: #ff0844;
      box-shadow: 0 4px 8px rgb(0, 0, 0, 0.25);
      color: #fff;
    }
  }
`

const Wrapper = styled.div`
  max-width: 260px;
  // add margin to the TopicBadge
  a {
    margin: 1rem 0;
  }
`

const GalleryItem = ({ image, topic }) => {
  return (
    <Wrapper>
      <Link to="#">
        <Image fluid={image} />
      </Link>
      <TopicBadge topic={topic} />
    </Wrapper>
  )
}

GalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  topic: PropTypes.string.isRequired,
}

export default GalleryItem
