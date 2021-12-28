import React, { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const ariaLabel = { "aria-label": "description" }

function D14color() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField label="Filled success" variant="filled" color="success" focused />
      <TextField label="Standard warning" variant="standard" color="warning" focused />
    </Box>
  )
}

export default D14color
