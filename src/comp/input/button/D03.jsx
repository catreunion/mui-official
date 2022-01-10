import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import Stack from "@mui/material/Stack"

const Input = styled("input")({
  display: "none"
})

function D03() {
  const [file, setFile] = useState(null)

  const handleChange = event => {
    let x = event.target.files[0]
    console.log("x's filename is: ", x.name)
    setFile(x)
    console.log("file name is: ", file)
  }

  const uploadPhoto = event => {
    // let selected =
    console.log(event.target.files[0])
    // if (selected && fileTypes.includes(selected.type)) {
    //   setFile(selected)
    //   setError("")
    //   console.log("File: ", file)
    // } else {
    //   setFile(null)
    //   setError("Please select an image file (png or jpeg)")
    //   console.log("Error: ", error)
    // }
  }

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="id1">
        <Input onChange={handleChange} type="file" accept="image/*" id="id1" multiple />
        <Button component="span" variant="contained" color="secondary">
          Upload
        </Button>
      </label>

      <label htmlFor="id2">
        <Input type="file" accept="image/*" id="id2" />
        <IconButton component="span" color="primary" aria-label="upload picture">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  )
}

export default D03
