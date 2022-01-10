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

function D04justifyContent() {
  return (
    <Box sx={{ width: "100%", borderBottom: "solid 1px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>flex-start 1</Item>
        <Item>flex-start 2</Item>
        <Item>flex-start 3</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>flex-end 1</Item>
        <Item>flex-end 2</Item>
        <Item>flex-end 3</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>center 1</Item>
        <Item>center 2</Item>
        <Item>center 3</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>between 1</Item>
        <Item>between 2</Item>
        <Item>between 3</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>around 1</Item>
        <Item>around 2</Item>
        <Item>around 3</Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <Item>evenly 1</Item>
        <Item>evenly 2</Item>
        <Item>evenly 3</Item>
      </Box>
    </Box>
  )
}

export default D04justifyContent
