import styled from "@emotion/styled"

const DEFAULT_COLUMNS = 12
const DEFAULT_GRID_GAP = 0

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${DEFAULT_COLUMNS}, 1fr);
  grid-gap: ${DEFAULT_GRID_GAP};
  // each grid item takes full width
  > * {
    grid-column-end: span ${DEFAULT_COLUMNS};
  }
`

export default Grid
