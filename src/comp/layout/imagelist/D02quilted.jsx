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

function D02quilted() {
  return (
    <ImageList sx={{ width: 600, height: 820 }} variant="quilted" cols={3} rowHeight={200}>
      {imageSource2.map(item => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <Image {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default D02quilted
