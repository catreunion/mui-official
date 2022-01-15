import React, { useState, useEffect } from "react"
import { colorsRef } from "../firebase-config"
import { addDoc, onSnapshot } from "firebase/firestore"
import { Box, TextField, Button, IconButton } from "@mui/material"
// import Dot from "./Dot"
import { editColor, deleteColor, qDeleteColor } from "./utils"

import EditIcon from "@mui/icons-material/Edit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

function D01dots() {
  const [colors, setColors] = useState([{ colorName: "loading...", id: "loading..." }])

  const [colorName, setColorName] = useState(null)
  const [colorValue, setColorValue] = useState(null)
  const [nameEr, setNameEr] = useState(null)
  const [valueEr, setValueEr] = useState(null)
  // const [downloadErr, setDownloadErr] = useState(null)

  useEffect(() => {
    const getColors = async () => {
      const unsub = await onSnapshot(colorsRef, snapshot => {
        if (snapshot.empty) {
          // setDownloadErr("No data")
          console.log("No data")
        } else {
          setColors(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
          console.log("Colors downloaded")
          // console.log(downloadErr)
        }
      })
      return unsub
    }
    getColors()
  }, [])

  const addColor = async () => {
    setNameEr(false)
    setValueEr(false)

    if (colorName === null) {
      setNameEr(true)
    }
    if (colorValue === null) {
      setValueEr(true)
    }
    if (colorName && colorValue) {
      const newColor = await addDoc(colorsRef, { colorName, colorValue })
      console.log("The ID of the new color is: ", newColor.id)
    }
  }

  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1 }
        }}
        autoComplete="off"
        component="form"
        noValidate
      >
        <TextField
          onChange={event => {
            setColorName(event.target.value)
          }}
          sx={{ width: 130 }}
          label="Color Name"
          id="colorName"
          error={nameEr}
          required
        />

        <TextField
          onChange={event => {
            setColorValue(event.target.value)
          }}
          sx={{ width: 130 }}
          label="Color Value"
          id="colorValue"
          error={valueEr}
          required
        />

        <Button onClick={addColor} variant="contained">
          Add Color
        </Button>

        <Button onClick={qDeleteColor} variant="contained">
          Query delete Color
        </Button>
      </Box>

      {colors.map(color => (
        <Box sx={{ m: 2 }} color={color.colorValue} key={color.id}>
          <IconButton
            onClick={() => {
              editColor(color.id)
            }}
            aria-label="edit color"
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              deleteColor(color.id)
            }}
            aria-label="delete color"
          >
            <DeleteForeverIcon />
          </IconButton>

          <Box sx={{ width: 25, height: 25, backgroundColor: color.colorValue, borderRadius: "50%", display: "inline-block", mx: 1 }} color={color.colorValue} />
          {color.colorName}
        </Box>
      ))}
    </>
  )
}

export default D01dots

// red #f00
// green #0f0
// blue #00f
// pink #f0f
// black #000

// import React from "react"

// function Dot({ color }) {
//   const style = {
//     width: 25,
//     height: 25,
//     backgroundColor: color,
//     borderRadius: "50%",
//     display: "inline-block",
//     margin: "0px 10px"
//   }
//   return <span style={style}></span>
// }

// export default Dot
