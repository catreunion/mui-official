import React, { useState } from "react"
import Radio from "@mui/material/Radio"

function D05size() {
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
      <Radio {...controlProps("a")} size="small" />
      <Radio {...controlProps("b")} />
      <Radio
        {...controlProps("c")}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 28
          }
        }}
      />
    </>
  )
}

export default D05size
