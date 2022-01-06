import React, { useState } from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import FormLabel from "@mui/material/FormLabel"
import Button from "@mui/material/Button"

function D08showError() {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState("Choose wisely")

  const handleRadioChange = event => {
    setValue(event.target.value)
    setHelperText("")
    setError(false)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (value === "red") {
      setHelperText("Good")
      setError(false)
    } else if (value === "blue") {
      setHelperText("Brave")
      setError(false)
    } else {
      setHelperText("Make a choice")
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard" component="fieldset">
        <FormLabel component="legend">Choose your pill</FormLabel>
        <RadioGroup onChange={handleRadioChange} value={value} name="question" aria-label="question">
          <FormControlLabel control={<Radio />} label="Red Pill" value="red" />
          <FormControlLabel control={<Radio />} label="Blue Pill" value="blue" />
        </RadioGroup>

        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Submit
        </Button>
      </FormControl>
    </form>
  )
}

export default D08showError
