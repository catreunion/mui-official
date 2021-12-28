import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: theme => (theme.palette.mode === "light" ? "rgba(255, 0, 0, 0.1)" : "rgb(255 132 132 / 25%)")
      }}
    />
  )
}

function D09Margin() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "25ch" }
      }}
    >
      <RedBar />
      <TextField label={'margin="none"'} id="id" />
      <RedBar />
      <TextField label={'margin="dense"'} id="id" margin="dense" />
      <RedBar />
      <TextField label={'margin="normal"'} id="id" margin="normal" />
      <RedBar />
    </Box>
  )
}

export default D09Margin
