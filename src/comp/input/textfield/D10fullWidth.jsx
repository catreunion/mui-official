import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

function D10fullWidth() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%"
      }}
    >
      <TextField fullWidth label="fullWidth" id="id" />
    </Box>
  )
}

export default D10fullWidth
