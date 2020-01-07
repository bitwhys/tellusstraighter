import styled from "@emotion/styled"
import PropTypes from "prop-types"

const DEFAULT_COLUMNS = 12
const DEFAULT_GRID_GAP = 0
const GRID_GAPS = {
  xxxxs: "0.125rem",
  xxxs: "0.25rem",
  xxs: "0.375rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1.25rem",
  lg: "2rem",
  xl: "3.25rem",
  xxl: "5.25rem",
  xxxl: "8.5rem",
  xxxxl: "13.75rem",
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${p => p.columns || DEFAULT_COLUMNS}, 1fr);
  grid-gap: ${p => (p.gridGap && GRID_GAPS[p.gridGap]) || DEFAULT_GRID_GAP};
  // each grid item takes full width (this is used to facilitate mobile first design)
  > * {
    grid-column-end: span ${DEFAULT_COLUMNS};
  }
`

Grid.propTypes = {
  columns: PropTypes.string,
  gridGap: PropTypes.oneOf([
    "xxxxs",
    "xxxs",
    "xxs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "xxxl",
    "xxxxl",
  ]),
}

export const Column = styled.div`
  grid-column-end: span ${p => p.span || 1};
`

Column.propTypes = {
  // FIXME: this assumes I would never create a Grid with more than 12 columns
  span: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

export default Grid
