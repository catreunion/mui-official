import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import PropTypes from "prop-types"

Item.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
}

function Item(props) {
  const { sx, ...other } = props
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx
      }}
      {...other}
    />
  )
}

// The grid-auto-flow property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

function D09gridAutoFlow() {
  return (
    <div style={{ width: "100%" }}>
      <Typography component="div" variant="body1">
        <Box
          sx={{
            display: "grid",
            gridAutoFlow: "row",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(2, 50px)",
            gap: 1
          }}
        >
          <Item sx={{ gridColumn: "1", gridRow: "1 / 3" }}>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item sx={{ gridColumn: "5", gridRow: "1 / 3" }}>5</Item>
        </Box>
      </Typography>
    </div>
  )
}

export default D09gridAutoFlow
