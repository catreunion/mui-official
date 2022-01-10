import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
// import D01basic from "./D01basic"
// import D02upload from "./D02upload"
import D03 from "./D03"

function Button() {
  return (
    <>
      <Typography component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>x</Box>
      </Typography>

      <D03 />
    </>
  )
}

export default Button
