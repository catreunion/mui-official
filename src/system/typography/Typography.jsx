import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function TypographyDemo() {
  return (
    <>
      <Box sx={{ typography: "h1" }}>h1</Box>
      <Box sx={{ typography: "h2" }}>h2</Box>
      <Box sx={{ typography: "h3" }}>h3</Box>
      <Box sx={{ typography: "h4" }}>h4</Box>
      <Box sx={{ typography: "h5" }}>h5</Box>
      <Box sx={{ typography: "h6" }}>h6</Box>
      <Box sx={{ typography: "body1" }}>body1</Box>
      <Box sx={{ typography: "body2" }}>body2</Box>
      <Box sx={{ typography: "subtitle1" }}>subtitle1</Box>
      <Box sx={{ typography: "subtitle2" }}>subtitle2</Box>
      <Typography component="div">
        <Box sx={{ textAlign: "justify", m: 1 }}>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>
        <Box sx={{ textAlign: "left", m: 1 }}>Left aligned text.</Box>
        <Box sx={{ textAlign: "center", m: 1 }}>Center aligned text.</Box>
        <Box sx={{ textAlign: "right", m: 1 }}>Right aligned text.</Box>
      </Typography>
      <Typography component="div">
        <Box sx={{ fontWeight: "light", m: 1 }}>Light</Box>
        <Box sx={{ fontWeight: "regular", m: 1 }}>Regular</Box>
        <Box sx={{ fontWeight: "medium", m: 1 }}>Medium</Box>
        <Box sx={{ fontWeight: 500, m: 1 }}>500</Box>
        <Box sx={{ fontWeight: "bold", m: 1 }}>Bold</Box>
      </Typography>
      <Typography component="div">
        <Box sx={{ fontSize: "default", m: 1 }}>Default</Box>
        <Box sx={{ fontSize: "h6.fontSize", m: 1 }}>h6.fontSize</Box>
        <Box sx={{ fontSize: 16, m: 1 }}>16px</Box>
      </Typography>
      <Typography component="div">
        <Box sx={{ fontStyle: "normal", m: 1 }}>Normal font style.</Box>
        <Box sx={{ fontStyle: "italic", m: 1 }}>Italic font Style.</Box>
        <Box sx={{ fontStyle: "oblique", m: 1 }}>Oblique font style.</Box>
      </Typography>{" "}
    </>
  )
}

export default TypographyDemo
