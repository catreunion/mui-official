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

// The grid-auto-column property specifies the size of an implicitly-created grid column track or pattern of tracks
// On the demo above, the second non-visible column has a width of 1fr/4 which is approximately equal to 25%

function D07gridAutoColumns() {
  return (
    <div style={{ width: "100%" }}>
      <Typography component="div" variant="body1">
        <Box
          sx={{
            display: "grid",
            gridAutoColumns: "1fr",
            gap: 1
          }}
        >
          <Item sx={{ gridRow: "1", gridColumn: "span 2" }}>span 2</Item>
          {/* The second non-visible column has width of 1/4 */}
          <Item sx={{ gridRow: "1", gridColumn: "4 / 5" }}>4 / 5</Item>
        </Box>
      </Typography>{" "}
    </div>
  )
}

export default D07gridAutoColumns
