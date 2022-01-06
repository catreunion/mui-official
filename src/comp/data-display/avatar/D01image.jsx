import React from "react"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"

function D01basic() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Isaac Li" src="./img/avatar/isaacli.jpeg" />
      <Avatar alt="Yiyun Wu" src="./img/avatar/yiyunwu.jpeg" />
      <Avatar alt="Wenkai Li" src="./img/avatar/wenkaili.jpeg" />
    </Stack>
  )
}

export default D01basic
