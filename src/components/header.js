/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Container from "@components/Container"
import ToggleColorMode from "@components/ToggleColorMode"
import { StyledLink } from "@utils"

const menu = ["Topics", "Videos", "About"]

const Brand = styled(StyledLink)``
const MenuItem = styled(StyledLink)`
  text-transform: capitalize;
`

const Header = ({ homePage }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <Container
        sx={{ display: "flex", py: 4, justifyContent: "space-between" }}
      >
        <Brand to="/">
          {/* FIXME: use the theme to set the font-size */}
          <h1 sx={{ fontFamily: "body", color: "primary", fontSize: "1.5rem" }}>
            {title}
          </h1>
        </Brand>
        <div sx={{ display: "flex" }}>
          <nav>
            {menu.map(link => (
              <MenuItem
                activeClassName="active"
                sx={{
                  px: 2,
                  fontFamily: "heading",
                  fontSize: 3,
                  fontWeight: "bold",
                  "&:link, &:visited": {
                    color: "text",
                  },
                  "&.active": {
                    color: "primary",
                  },
                }}
                to={`/${link.toLowerCase()}`}
              >
                {link}
              </MenuItem>
            ))}
          </nav>
          <ToggleColorMode sx={{ ml: 4 }} />
        </div>
      </Container>
    </header>
  )
}

export default Header
