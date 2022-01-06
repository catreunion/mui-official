import React, { useState } from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

function D03controlled() {
  const [value, setValue] = useState("female")

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row onChange={handleChange} value={value} defaultValue="male" aria-label="gender" name="controlled-radio-buttons-group">
        <FormControlLabel control={<Radio />} label="Female" value="female" />
        <FormControlLabel control={<Radio />} label="Male" value="male" />
        <FormControlLabel control={<Radio />} label="Other" value="other" />
        <FormControlLabel control={<Radio />} label="Disabled" value="disabled" disabled />
      </RadioGroup>
    </FormControl>
  )
}

export default D03controlled
