import React from "react"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Badge from "@mui/material/Badge"
import MailIcon from "@mui/icons-material/Mail"

function D01basic() {
  return (
    <Container sx={{ my: 2 }}>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>

        <Badge badgeContent={4} color="secondary">
          <MailIcon color="action" />
        </Badge>

        <Badge badgeContent={4} color="success">
          <MailIcon color="action" />
        </Badge>
      </Stack>
    </Container>
  )
}

export default D01basic
