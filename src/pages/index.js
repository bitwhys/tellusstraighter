import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

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
