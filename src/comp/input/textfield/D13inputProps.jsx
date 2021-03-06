import React, { useState } from "react"
import Box from "@mui/material/Box"
import Input from "@mui/material/Input"

const ariaLabel = { "aria-label": "description" }

function D13inputProps() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 }
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="Hello world" inputProps={ariaLabel} />
      <Input placeholder="Placeholder" inputProps={ariaLabel} />
      <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
      <Input defaultValue="Error" error inputProps={ariaLabel} />
    </Box>
  )
}

export default D13inputProps
