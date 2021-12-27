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

function D03flexWrap() {
  return (
    <Box sx={{ width: "100%", borderBottom: "solid 1px" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          maxWidth: 600
        }}
      >
        <Item>No Wrap 1</Item>
        <Item>No Wrap 2</Item>
        <Item>No Wrap 3</Item>
        <Item>No Wrap 4</Item>
        <Item>No Wrap 5</Item>
        <Item>No Wrap 6</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          maxWidth: 600
        }}
      >
        <Item>With Wrap 1</Item>
        <Item>With Wrap 2</Item>
        <Item>With Wrap 3</Item>
        <Item>With Wrap 4</Item>
        <Item>With Wrap 5</Item>
        <Item>With Wrap 6</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap-reverse",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          maxWidth: 600
        }}
      >
        <Item>Wrap Reverse 1</Item>
        <Item>Wrap Reverse 2</Item>
        <Item>Wrap Reverse 3</Item>
        <Item>Wrap Reverse 4</Item>
        <Item>Wrap Reverse 5</Item>
        <Item>Wrap Reverse 6</Item>
      </Box>
    </Box>
  )
}

export default D03flexWrap
