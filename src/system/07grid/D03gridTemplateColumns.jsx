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
        m: 1,
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

// defines the line names and track sizing functions of the grid columns

function D03gridTemplateColumns() {
  return (
    <div style={{ width: "100%" }}>
      <Typography component="div" variant="body1">
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
        </Box>
      </Typography>
    </div>
  )
}

export default D03gridTemplateColumns
