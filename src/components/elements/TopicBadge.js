/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
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
  user-select: none;
  box-shadow: 0 0 0 1px ${p => p.theme.colors.muted};
  border-radius: 3px;
  color: #bbbbbb;
  background-color: transparent;
  transition: all 300ms linear;
`
const TopicBadge = ({ topic, className }) => (
  <Base
    sx={{
      fontSize: 0,
      px: 2,
      py: 1,
      "&:hover": {
        bg: "primary",
        boxShadow: "0 4px 8px rgb(0, 0, 0, 0.35)",
        color: "#fff",
      },
    }}
    className={className}
  >
    {topic}
  </Base>
)

export default TopicBadge
