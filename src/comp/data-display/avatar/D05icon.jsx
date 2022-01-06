import React from "react"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import FolderIcon from "@mui/icons-material/Folder"
import PageviewIcon from "@mui/icons-material/Pageview"
import AssignmentIcon from "@mui/icons-material/Assignment"
import { green, pink } from "@mui/material/colors"

function D05icon() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <FolderIcon />
      </Avatar>

      <Avatar sx={{ bgcolor: pink[500] }}>
        <PageviewIcon />
      </Avatar>

      <Avatar sx={{ bgcolor: green[500] }}>
        <AssignmentIcon />
      </Avatar>
    </Stack>
  )
}

export default D05icon
