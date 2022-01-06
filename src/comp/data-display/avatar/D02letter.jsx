import React from "react"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import { deepOrange, deepPurple } from "@mui/material/colors"

function D02letter() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>I</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>Y</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>WL</Avatar>
    </Stack>
  )
}

export default D02letter
