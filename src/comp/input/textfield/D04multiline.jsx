import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

function D04Multiline() {
  const [value, setValue] = React.useState("Controlled")

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField multiline label="Note" maxRows={4} value={value} onChange={handleChange} id="id" />
        <TextField multiline label="Note" placeholder="required" id="id" />
        <TextField multiline label="Note" rows={4} defaultValue="..." id="id" />
      </div>
      <div>
        <TextField multiline label="Note" maxRows={4} value={value} onChange={handleChange} variant="filled" id="id" />
        <TextField multiline label="Note" placeholder="required" variant="filled" id="id" />
        <TextField multiline label="Note" rows={4} defaultValue="..." variant="filled" id="id" />
      </div>
      <div>
        <TextField multiline label="Note" maxRows={4} value={value} onChange={handleChange} variant="standard" id="id" />
        <TextField multiline label="Note" placeholder="required" variant="standard" id="id" />
        <TextField multiline label="Note" rows={4} defaultValue="..." variant="standard" id="id" />
      </div>
    </Box>
  )
}

export default D04Multiline
