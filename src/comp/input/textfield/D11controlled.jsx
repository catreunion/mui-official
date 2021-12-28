import React, { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

function D10fullWidth() {
  const [name, setName] = useState("Cat in the Hat")
  const handleChange = event => {
    setName(event.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="id" label="Name" value={name} onChange={handleChange} />
      <TextField id="id" label="Uncontrolled" defaultValue="foo" />
    </Box>
  )
}

export default D10fullWidth
