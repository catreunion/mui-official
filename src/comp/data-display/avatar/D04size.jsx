import React from "react"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"

function D04size() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Yiyun Wu" src="./img/avatar/yiyunwu.jpeg" sx={{ width: 30, height: 30 }} />
      <Avatar alt="Yiyun Wu" src="./img/avatar/yiyunwu.jpeg" />
      <Avatar alt="Yiyun Wu" src="./img/avatar/yiyunwu.jpeg" sx={{ width: 50, height: 50 }} />
    </Stack>
  )
}

export default D04size
