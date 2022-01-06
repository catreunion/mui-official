import React from "react"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"

function stringToColor(string) {
  let hash = 0
  let i
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }
  let color = "#"
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }
  return color
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
  }
}

function D03background() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar("Isaac Li")} />
      <Avatar {...stringAvatar("Yiyun Wu")} />
      <Avatar {...stringAvatar("Wenkai Li")} />
    </Stack>
  )
}

export default D03background
