import React from "react"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"

function D08grouped() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Isaac Li" src="./img/avatar/isaacli.jpeg" />
      <Avatar alt="Yiyun Wu" src="./img/avatar/yiyunwu.jpeg" />
      <Avatar alt="Wenkai Li" src="./img/avatar/wenkaili.jpeg" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  )
}

export default D08grouped
