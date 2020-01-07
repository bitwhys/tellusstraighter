import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import Grid, { Column } from "@components/grid"

const Box = styled.div`
  ${tw`bg-gray-300`};
  min-height: 300px;
`

const Heading = styled.h1`
  ${tw`text-2xl`};
  font-family: "alverata", serif;
  font-weight: 300;
`
const IndexPage = () => (
  <Grid>
    <Column span={6}>
      <Box>
        <Heading>Tell Us Straighter</Heading>
      </Box>
    </Column>
  </Grid>
)

export default IndexPage
