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

function D07order() {
  return (
    <Box sx={{ width: "100%", borderBottom: "solid 1px" }}>
      <Box sx={{ display: "flex", p: 1, m: 1, bgcolor: "background.paper" }}>
        <Item sx={{ order: 2 }}>Item 1</Item>
        <Item sx={{ order: 3 }}>Item 2</Item>
        <Item sx={{ order: 1 }}>Item 3</Item>
      </Box>
    </Box>
  )
}

export default D07order
