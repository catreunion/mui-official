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

// The row-gap and column-gap CSS properties allow for specifying the row and column gaps independently

function D05rowGapColumnGap() {
  return (
    <div style={{ width: "100%" }}>
      <Typography component="div" variant="body1">
        <Box
          sx={{
            display: "grid",
            columnGap: 3,
            rowGap: 1,
            gridTemplateColumns: "repeat(2, 1fr)"
          }}
        >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Box>
      </Typography>
    </div>
  )
}

export default D05rowGapColumnGap
