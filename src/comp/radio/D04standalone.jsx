import React, { useState } from "react"
import Radio from "@mui/material/Radio"

function D04standalone() {
  const [selected, setSelected] = useState("a")

  const handleChange = event => {
    setSelected(event.target.value)
  }

  return (
    <>
      <Radio checked={selected === "a"} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ "aria-label": "A" }} />
      <Radio checked={selected === "b"} onChange={handleChange} value="b" name="radio-buttons" inputProps={{ "aria-label": "B" }} />
    </>
  )
}

export default D04standalone
