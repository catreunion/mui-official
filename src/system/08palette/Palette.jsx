import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import D01color from "./D01color"
import D02bgcolor from "./D02bgcolor"

function PaletteDemo() {
  return (
    <>
      <Typography variant="h4" component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>Palette Demo</Box>
      </Typography>

      <D01color />
      <D02bgcolor />
    </>
  )
}

export default PaletteDemo
