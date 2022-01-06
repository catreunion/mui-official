import React from "react"
import Stack from "@mui/material/Stack"
import Badge from "@mui/material/Badge"
import MailIcon from "@mui/icons-material/Mail"

function D04visibility2() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
      <Badge color="secondary" badgeContent={0}>
        <MailIcon />
      </Badge>

      <Badge color="secondary" badgeContent={0} showZero>
        <MailIcon />
      </Badge>
    </Stack>
  )
}

export default D04visibility2
