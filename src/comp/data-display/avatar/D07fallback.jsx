import React from "react"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import { deepOrange } from "@mui/material/colors"

function D07fallback() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Isaac Li" src="/broken-image.jpg">
        B
      </Avatar>

      <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Isaac Li" src="/broken-image.jpg" />
      <Avatar src="/broken-image.jpg" />
    </Stack>
  )
}

export default D07fallback

// the provided children
// the 1st letter of the alt text
// a generic avatar icon
