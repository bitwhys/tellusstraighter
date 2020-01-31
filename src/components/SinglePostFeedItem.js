/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"

// local
import { TopicBadge } from "@components/elements"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`

const MetaData = styled.div``

const Heading = styled.div``

const Excerpt = styled.div`
  position: relative;
  padding-left: 15px;
  &:before {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #000;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`

const SinglePostFeedItem = ({ topic, title, date, keywords, excerpts }) => {
  return (
    <GridContainer sx={{ padding: 1 }}>
      <TopicBadge topic={topic} solid />
      <MetaData>
        <Heading>
          <h3>{title}</h3>
          {/* TODO: format date : <Month> <Date>, <Year> */}
          <div>{date}</div>
        </Heading>
        {excerpts.map(excerpt => (
          // FIXME: change the key prop
          <Excerpt key={Math.random()}>{excerpt}</Excerpt>
        ))}
        <div sx={{ display: "flex" }}>
          {keywords.map(keyword => (
            <TopicBadge topic={keyword} sx={{ mr: 2 }} />
          ))}
        </div>
      </MetaData>
    </GridContainer>
  )
}

SinglePostFeedItem.defaultProps = {
  keywords: [],
}

SinglePostFeedItem.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpts: PropTypes.arrayOf(PropTypes.string).isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SinglePostFeedItem
