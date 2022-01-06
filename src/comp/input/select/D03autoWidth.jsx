import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={age} onChange={handleChange} autoWidth label="Age">
          <MenuItem value={0.5}>0.5</MenuItem>
          <MenuItem value={1.0}>1.0</MenuItem>
          <MenuItem value={1.5}>1.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
