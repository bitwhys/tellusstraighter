import tw from "tailwind.macro"
import styled from "@emotion/styled"
import React from "react"

import SEO from "@components/seo"
import Grid from "@components/grid"
const Box = styled.div`
  ${tw`bg-gray-300`};
  min-height: 300px;
`
const IndexPage = () => (
  <Grid>
    <Box />
  </Grid>
)

export default IndexPage
