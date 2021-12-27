import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

function D01color() {
  return (
    <Typography variant="body1" component="div">
      <Box sx={{ textAlign: "center", color: "primary.main" }}>primary.main</Box>
      <Box sx={{ textAlign: "center", color: "secondary.main" }}>secondary.main</Box>
      <Box sx={{ textAlign: "center", color: "error.main" }}>error.main</Box>
      <Box sx={{ textAlign: "center", color: "warning.main" }}>warning.main</Box>
      <Box sx={{ textAlign: "center", color: "info.main" }}>info.main</Box>
      <Box sx={{ textAlign: "center", color: "success.main" }}>success.main</Box>
      <Box sx={{ textAlign: "center", color: "text.primary" }}>text.primary</Box>
      <Box sx={{ textAlign: "center", color: "text.secondary" }}>text.secondary</Box>
      <Box sx={{ textAlign: "center", color: "text.disabled" }}>text.disabled</Box>
    </Typography>
  )
}

export default D01color
