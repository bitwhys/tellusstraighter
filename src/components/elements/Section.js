/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import Container from "@components/elements/Container"

const SectionHeading = styled.h2`
  border-bottom: 1px solid;
  text-transform: capitalize;
  //  gray-200 from tailwind css
`

const Section = ({ heading, children }) => {
  return (
    <section sx={{ mt: 5 }}>
      <Container>
        <SectionHeading
          sx={{
            py: 3,
            fontSize: 3,
            borderColor: "muted",
            mt: 0,
            mb: 4,
            fontFamily: "body",
          }}
        >
          {heading}
        </SectionHeading>
        {children}
      </Container>
    </section>
  )
}

export default Section
