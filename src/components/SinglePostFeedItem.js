/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"

// local
import { TopicBadge } from "@components/elements"

const FlexBox = styled.div`
  display: flex;
  max-width: 680px;
  align-items: flex-start;
  border-radius: 3px;
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
    background: ${p => p.theme.colors.muted};
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`

const SinglePostFeedItem = ({ topic, title, date, keywords, excerpts }) => {
  return (
    <FlexBox sx={{ padding: 3, bg: "card", mb: 3 }}>
      <TopicBadge topic={topic} solid />
      <MetaData sx={{ px: 3 }}>
        <Heading>
          <h3 sx={{ fontSize: 3, mb: 1 }}>{title}</h3>
          {/* TODO: format date : <Month> <Date>, <Year> */}
          <div sx={{ color: "muted" }}>{date}</div>
        </Heading>
        <div sx={{ py: 2 }}>
          {excerpts.map(excerpt => (
            // FIXME: change the key prop
            <Excerpt key={Math.random()} sx={{ color: "subdued", fontSize: 1 }}>
              {excerpt}
            </Excerpt>
          ))}
        </div>
        <div sx={{ display: "flex", mt: 3 }}>
          {keywords.map(keyword => (
            <TopicBadge topic={keyword} sx={{ mr: 2 }} />
          ))}
        </div>
      </MetaData>
    </FlexBox>
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
