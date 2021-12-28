import React from "react"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"

function D08Size() {
  return (
    <Stack
      component="form"
      sx={{
        width: "25ch"
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField hiddenLabel defaultValue="Small" variant="filled" size="small" id="id" />
      <TextField hiddenLabel defaultValue="Normal" variant="filled" id="id" />
    </Stack>
  )
}

export default D08Size
