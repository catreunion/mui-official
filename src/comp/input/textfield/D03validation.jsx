import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

function D03Validation() {
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
      component="form"
    >
      <div>
        <TextField error label="Error" defaultValue="Hello" id="id" />
        <TextField error label="Error" defaultValue="Hello" helperText="helperText" id="id" />
      </div>
      <div>
        <TextField error label="Error" defaultValue="Hello" variant="filled" id="id" />
        <TextField error label="Error" defaultValue="Hello" helperText="helperText" variant="filled" id="id" />
      </div>
      <div>
        <TextField error label="Error" defaultValue="Hello" variant="standard" id="id" />
        <TextField error label="Error" defaultValue="Hello" helperText="helperText" variant="standard" id="id" />
      </div>
    </Box>
  )
}

export default D03Validation
