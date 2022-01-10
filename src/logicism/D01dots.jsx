import React, { useState, useEffect } from "react"
import { colorsRef } from "../firebase-config"
import { onSnapshot, addDoc } from "firebase/firestore"
import { Box, TextField, Button, Link } from "@mui/material"
import Dot from "./Dot"

function D01dots() {
  const [colors, setColors] = useState([{ colorName: "loading...", colorValue: "loading...", id: "loading..." }])
  const [colorName, setColorName] = useState(null)
  const [nameEr, setNameEr] = useState(null)
  const [colorValue, setColorValue] = useState(null)
  const [valueEr, setValueEr] = useState(null)
  const [downloadErr, setDownloadErr] = useState(null)

  useEffect(() => {
    const getColors = async () => {
      await onSnapshot(colorsRef, snapshot => {
        console.log(snapshot)
        if (snapshot.empty) {
          setDownloadErr("No data")
          console.log("No data")
        } else {
          setColors(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
          console.log("Colors downloaded")
        }
      })
    }

    getColors()
  }, [downloadErr])

  const addColor = async () => {
    setNameEr(false)
    setValueEr(false)
    // const docRef = doc(db, "colors", "test2")
    // await setDoc(docRef, payload)

    if (colorName === null) {
      setNameEr(true)
    }
    if (colorValue === null) {
      setValueEr(true)
    }
    if (colorName && colorValue) {
      await addDoc(colorsRef, { colorName, colorValue })
    }
  }

  const editColor = () => {}

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
      </Box>

      {colors.map(color => (
        <Box sx={{ m: 2 }} color={color.colorValue} key={color.id}>
          <Link
            onClick={() => {
              editColor(color.id)
            }}
            sx={{ m: 2 }}
            href="#"
          >
            edit
          </Link>
          <Dot color={color.colorValue} />
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
