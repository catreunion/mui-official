import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
// import { imageSource1 } from "./imageSource1"
import { imageSource2 } from "./imageSource2"
import { Image } from "mui-image"

function D01standard() {
  return (
    <ImageList sx={{ width: 600, height: 820 }} cols={3} rowHeight={200}>
      {imageSource2.map(item => (
        <ImageListItem key={item.img}>
          <Image src={`${item.img}`} sx={{ width: 200, height: 200 }} showLoading={true} duration={4000} shiftDuration={4000} fit={"cover"} />

          {/* <img src={`${item.img}?w=200&h=200&fit=crop&auto=format`} alt={item.title} loading="lazy" /> */}
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default D01standard
