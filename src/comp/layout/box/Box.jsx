import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

function BoxDemo() {
  return (
    <>
      <Typography component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>Box - Serve as a wrapper component for most of the CSS utility needs</Box>
      </Typography>

      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      />

      <Box sx={{ p: 2, border: "1px dashed grey" }} component="span">
        <Button>Save</Button>
      </Box>

      <Button sx={{ border: "1px dashed grey" }}>Save</Button>
    </>
  )
}

export default BoxDemo
