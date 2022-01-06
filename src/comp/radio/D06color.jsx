import React, { useState } from "react"
import Radio from "@mui/material/Radio"
import { pink } from "@mui/material/colors"

function D06color() {
  const [selected, setSelected] = useState("a")

  const handleChange = event => {
    setSelected(event.target.value)
  }

  const controlProps = item => ({
    checked: selected === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item }
  })

  return (
    <>
      <Radio {...controlProps("a")} />
      <Radio {...controlProps("b")} color="secondary" />
      <Radio {...controlProps("c")} color="success" />
      <Radio {...controlProps("d")} color="default" />
      <Radio
        {...controlProps("e")}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600]
          }
        }}
      />
    </>
  )
}

export default D06color
