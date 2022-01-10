import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
// import { imageSource1 } from "./imageSource1"
import { imageSource2 } from "./imageSource2"
import { Image } from "mui-image"

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

function D03woven() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {imageSource2.map(item => (
        <ImageListItem key={item.img}>
          <Image src={`${item.img}?w=161&fit=crop&auto=format`} srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default D03woven
