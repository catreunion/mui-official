import React from "react"
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

function D09flexShrink() {
  return (
    <Box sx={{ width: "100%", borderBottom: "solid 1px" }}>
      <Box sx={{ display: "flex", p: 1, m: 1, bgcolor: "background.paper" }}>
        <Item sx={{ width: "100%" }}>Item 1</Item>
        <Item sx={{ flexShrink: 1 }}>Item 2</Item>
        <Item sx={{ flexShrink: 0 }}>Item 3</Item>
      </Box>
    </Box>
  )
}

export default D09flexShrink
