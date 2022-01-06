import React, { useState } from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

function D01basic() {
  const [age, setAge] = useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Box sx={{ maxWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="id1">Age</InputLabel>
        <Select onChange={handleChange} value={age} label="Age" labelId="id1" id="id2">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default D01basic
