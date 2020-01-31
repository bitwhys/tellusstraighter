/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"

/**
 *  TODO: TopicBadge
 *    - decide on variant pattern (prop, use s-s)
 *    - how to trigger hover state when part of gallery component
 *    - link to associated Dribble Bucket || Topic page
 *
 */
const Base = styled(Link)`
  text-transform: capitalize;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  user-select: none;
  box-shadow: 0 0 0 1px ${p => p.theme.colors.muted};
  border-radius: 3px;
  transition: all 300ms linear;
  min-width: 50px;

  &:hover {
    box-shadow: 0 4px 8px rgb(0, 0, 0, 0.35);
  }
`

const DarkTextTopics = ["javascript", "ml", "comp-sci"]
const PrimaryBackgroundTopics = [
  "design",
  "study",
  "redesign",
  "creative",
  "generative",
]
const TopicBadge = ({ topic, className, solid }) => {
  const color = DarkTextTopics.includes(topic) ? "text" : "#fff"
  let hoverStyles = {}
  let bg = "transparent"
  let boxShadow = "0 0 0 1px muted"
  if (solid) {
    bg = PrimaryBackgroundTopics.includes(topic) ? "primary" : `topics.${topic}`
    boxShadow = "none"
  } else {
    hoverStyles = {
      bg: `${
        PrimaryBackgroundTopics.includes(topic) ? "primary" : `topics.${topic}`
      }`,
      color,
    }
  }
  return (
    <Base
      sx={{
        fontSize: 0,
        px: 2,
        py: 1,
        bg,
        boxShadow,
        color: `${solid ? color : "#a5a5a5"}`,
        "&:hover": hoverStyles,
      }}
      className={className}
    >
      {topic}
    </Base>
  )
}
TopicBadge.defaultProps = {
  className: "",
  solid: false,
}
TopicBadge.propTypes = {
  topic: PropTypes.string.isRequired,
  className: PropTypes.string,
  solid: PropTypes.bool,
}

export default TopicBadge
