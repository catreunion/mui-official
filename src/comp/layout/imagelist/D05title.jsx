import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ListSubheader from "@mui/material/ListSubheader"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import IconButton from "@mui/material/IconButton"
import InfoIcon from "@mui/icons-material/Info"
// import { imageSource1 } from "./imageSource1"
// import { imageSource3 } from "./imageSource3"
import { runLogs } from "./runLog"
import { Image } from "mui-image"

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

function D05title() {
  return (
    <>
      {/* <ImageList>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>

        {runLogs.map(item => (
          <ImageListItem key={item.image}>
            <Image src={`${item.image}?w=248&fit=crop&auto=format`} srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.desc} loading="lazy" />
            <ImageListItemBar
              title={item.desc}
              subtitle={item.date}
              actionIcon={
                <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about ${item.title}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList> */}
      <ImageList>
        {runLogs.map(item => (
          <ImageListItem key={item.image}>
            <Image src={`${item.image}?w=248&fit=crop&auto=format`} srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.desc} loading="lazy" />
            <ImageListItemBar title={item.desc} subtitle={<span>by: {item.date}</span>} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}

export default D05title
