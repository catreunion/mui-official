import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

function Container() {
  return (
    <>
      <Typography component="div">
        <Box sx={{ textAlign: "center", m: 1 }}>container - center your content horizontally While containers can be nested, most layouts do not require a nested container.</Box>
      </Typography>

      <Box sx={{ bgcolor: "#000000", height: "80vh" }} />

      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }} />
      </Container>
    </>
  )
}

export default Container
