import { useColorMode } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const BREAK_POINTS = [568, 768, 992, 1200]
export const mq = BREAK_POINTS.map(bp => `@media (min-width: ${bp}px)`)

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus {
    outline: none;
  }
`
