import React from "react"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import AssignmentIcon from "@mui/icons-material/Assignment"
import { deepOrange, green } from "@mui/material/colors"

function D06variant() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        N
      </Avatar>

      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
    </Stack>
  )
}

export default D06variant
