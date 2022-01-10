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

function D10alignSelf() {
  return (
    <Box sx={{ width: "100%", borderBottom: "solid 1px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          height: 124
        }}
      >
        <Item>Item 1</Item>
        <Item sx={{ alignSelf: "flex-end" }}>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
    </Box>
  )
}

export default D10alignSelf
