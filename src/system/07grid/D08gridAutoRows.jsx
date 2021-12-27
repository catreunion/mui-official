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

// The grid-auto-rows property specifies the size of an implicitly-created grid row track or pattern of tracks

function D08gridAutoRows() {
  return (
    <div style={{ width: "100%", height: 220 }}>
      <Typography component="div" variant="body1">
        <Box
          sx={{
            display: "grid",
            gridAutoRows: "40px",
            gap: 1
          }}
        >
          <Item sx={{ gridColumn: "1", gridRow: "span 2" }}>span 2</Item>
          {/* The second non-visible row has height of 40px */}
          <Item sx={{ gridColumn: "1", gridRow: "4 / 5" }}>4 / 5</Item>
        </Box>
      </Typography>
    </div>
  )
}

export default D08gridAutoRows
