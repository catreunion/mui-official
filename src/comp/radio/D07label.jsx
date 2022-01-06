import React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

function D07label() {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">labelPlacement</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel control={<Radio />} labelPlacement="top" label="Top" value="top" />
          <FormControlLabel control={<Radio />} labelPlacement="bottom" label="Bottom" value="bottom" />
          <FormControlLabel control={<Radio />} labelPlacement="start" label="Start" value="start" />
          <FormControlLabel control={<Radio />} labelPlacement="end" label="End" value="end" />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default D07label
