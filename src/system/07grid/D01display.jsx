import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

// define a grid container
// specify the display CSS property to have one of the values: grid or inline-grid

function D01display() {
  return (
    <div style={{ width: "100%" }}>
      <Typography component="div" variant="body1">
        <Box
          sx={{
            display: "grid",
            p: 1,
            bgcolor: "primary.main",
            borderRadius: 1,
            color: "white"
          }}
        >
          {"I'm a grid container!"}
        </Box>
      </Typography>
    </div>
  )
}

export default D01display
