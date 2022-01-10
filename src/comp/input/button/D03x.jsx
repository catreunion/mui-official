import React, { useState } from "react"
// import { Stack, Button, IconButton } from "@mui/material"
// import { styled } from "@mui/material/styles"
// import PhotoCamera from "@mui/icons-material/PhotoCamera"

// const Input = styled("input")({
//   display: "none"
// })

const D03 = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const fileTypes = ["image/png", "image/jpeg"]


  return (
    <form>
      <input type="file" onChange={uploadPhoto} />
      <span>+</span>
      {file && }
      {error && <div>error: {error}</div>}

      {/* </label> */}
    </form>
  )
}

export default D03
