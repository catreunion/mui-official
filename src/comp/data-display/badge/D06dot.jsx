import React from "react"
import Box from "@mui/material/Box"
import Badge from "@mui/material/Badge"
import MailIcon from "@mui/icons-material/Mail"

function D06dot() {
  return (
    <Box sx={{ color: "action.active" }}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    </Box>
  )
}

export default D06dot
