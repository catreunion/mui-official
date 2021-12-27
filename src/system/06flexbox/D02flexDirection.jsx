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

function D02flexDirection() {
  return (
    <Box sx={{ width: "100%", borderBottom: "solid 1px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>Row 1</Item>
        <Item>Row 2</Item>
        <Item>Row 3</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>Row Reverse 1</Item>
        <Item>Row Reverse 2</Item>
        <Item>Row Reverse 3</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "flex-start",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>Column 1</Item>
        <Item>Column 2</Item>
        <Item>Column 3</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "flex-start",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>Column Reverse 1</Item>
        <Item>Column Reverse 2</Item>
        <Item>Column Reverse 3</Item>
      </Box>
    </Box>
  )
}

export default D02flexDirection
