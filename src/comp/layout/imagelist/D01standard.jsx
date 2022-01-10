import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
// import { imageSource1 } from "./imageSource1"
// import { imageSource2 } from "./imageSource2"
import { runLogs } from "./runLog"
import { Image } from "mui-image"
import ImageListItemBar from "@mui/material/ImageListItemBar"

function D01standard() {
  return (
    <>
      <ImageList>
        {runLogs.map(item => (
          <ImageListItem key={item.image}>
            <Image src={`${item.image}`} alt={item.desc} />
            <ImageListItemBar title={item.desc} subtitle={<span>{item.date}</span>} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
      {/* 
      <ImageList cols={3}>
        {imageSource2.map(item => (
          <ImageListItem key={item.img}>
            <Image src={`${item.img}`} showLoading={true} duration={4000} shiftDuration={4000} fit="cover" />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList iant="woven" cols={3}>
        {imageSource2.map(item => (
          <ImageListItem key={item.img}>
            <Image src={`${item.img}`} showLoading={true} duration={4000} shiftDuration={4000} fit="cover" />
          </ImageListItem>
        ))}
      </ImageList> */}
    </>
  )
}

export default D01standard
