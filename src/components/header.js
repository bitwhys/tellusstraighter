/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import ToggleColorMode from "@components/ToggleColorMode"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header
      sx={{
        backgroundColor: `background`,
        color: `primary`,
        padding: 4,
      }}
    >
      <ToggleColorMode />
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 sx={{ margin: 0, fontFamily: 'body' }}>
          <Link
            to="/"
            sx={{
              color: `primary`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
