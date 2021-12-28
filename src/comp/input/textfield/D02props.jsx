import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

function D02props() {
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
        <TextField required label="Required" defaultValue="Hello World" id="id" />
        <TextField disabled label="Disabled" defaultValue="Hello World" id="id" />
        <TextField type="password" label="Password" autoComplete="current-password" id="id" />
        <TextField
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          id="id"
        />
        <TextField
          type="number"
          label="Number"
          InputLabelProps={{
            shrink: true
          }}
          id="id"
        />
        <TextField type="search" label="Search" id="id" />
        <TextField label="" helperText="hint" id="id" />
      </div>

      <div>
        <TextField required label="Required" defaultValue="Hello World" id="id" variant="filled" />
        <TextField disabled label="Disabled" defaultValue="Hello World" id="id" variant="filled" />
        <TextField type="password" label="Password" autoComplete="current-password" id="id" variant="filled" />

        <TextField
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          id="id"
          variant="filled"
        />
        <TextField
          type="number"
          label="Number"
          InputLabelProps={{
            shrink: true
          }}
          id="id"
          variant="filled"
        />

        <TextField type="search" label="Search" id="id" variant="filled" />
        <TextField label="" helperText="hint" id="id" variant="filled" />
      </div>

      <div>
        <TextField required label="Required" defaultValue="Hello World" id="id" variant="standard" />
        <TextField disabled label="Disabled" defaultValue="Hello World" id="id" variant="standard" />
        <TextField type="password" label="Password" autoComplete="current-password" id="id" variant="standard" />

        <TextField
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          id="id"
          variant="standard"
        />
        <TextField
          type="number"
          label="Number"
          InputLabelProps={{
            shrink: true
          }}
          id="id"
          variant="standard"
        />

        <TextField type="search" label="Search" id="id" variant="standard" />
        <TextField label="" helperText="hint" id="id" variant="standard" />
      </div>
    </Box>
  )
}

export default D02props
