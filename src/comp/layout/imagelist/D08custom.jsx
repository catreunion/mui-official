import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import IconButton from "@mui/material/IconButton"
import StarBorderIcon from "@mui/icons-material/StarBorder"
// import { imageSource1 } from "./imageSource1"
import { imageSource5 } from "./imageSource5"
import { Image } from "mui-image"

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

function D08custom() {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)"
      }}
      rowHeight={200}
      gap={1}
    >
      {imageSource5.map(item => {
        const cols = item.featured ? 2 : 1
        const rows = item.featured ? 2 : 1

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <Image {...srcset(item.img, 250, 200, rows, cols)} alt={item.title} loading="lazy" />
            <ImageListItemBar
              sx={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " + "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton sx={{ color: "white" }} aria-label={`star ${item.title}`}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default D08custom
