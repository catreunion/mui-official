import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
// import D01basic from "./D01basic"
// import D02props from "./D02props"
import D03autoWidth from "./D03autoWidth"

function Select() {
  return (
    <>
      <Typography component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>x</Box>
      </Typography>

      {/* <D01basic /> */}
      {/* <D02props /> */}
      <D03autoWidth />
    </>
  )
}

export default Select
