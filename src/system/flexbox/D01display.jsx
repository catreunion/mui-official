import React from "react"
import Box from "@mui/material/Box"

function D01display() {
  return (
    <Box sx={{ width: "70%", borderBottom: "solid 1px" }}>
      <Box sx={{ display: "flex", p: 1, m: 1, bgcolor: "background.paper" }}>{"A container uses flex"}</Box>
      <Box sx={{ display: "inline-flex", p: 1, m: 1, bgcolor: "background.paper" }}>{"A container uses inline-flex"}</Box>
    </Box>
  )
}

export default D01display
