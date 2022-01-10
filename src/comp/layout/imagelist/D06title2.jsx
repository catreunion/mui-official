import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
// import { imageSource1 } from "./imageSource1"
import { imageSource3 } from "./imageSource3"
import { Image } from "mui-image"

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

function D06title2() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {imageSource3.map(item => (
        <ImageListItem key={item.img}>
          <Image src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
          <ImageListItemBar title={item.title} subtitle={<span>by: {item.author}</span>} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default D06title2
