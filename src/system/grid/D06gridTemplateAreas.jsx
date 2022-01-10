import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

// The grid-template-area property defines a grid template by referencing the names of the grid areas which are specified with the grid-area property

function D06gridTemplateAreas() {
  return (
    <Typography component="div" variant="body1">
      <Box
        sx={{
          width: "100%",
          height: "140px",
          color: "#fff",
          "& > .MuiBox-root > .MuiBox-root": {
            p: 1,
            borderRadius: 1
          }
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"header header header header"
        "main main . sidebar"
        "footer footer footer footer"`
          }}
        >
          <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
          <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>Main</Box>
          <Box sx={{ gridArea: "sidebar", bgcolor: "info.main" }}>Sidebar</Box>
          <Box sx={{ gridArea: "footer", bgcolor: "warning.main" }}>Footer</Box>
        </Box>
      </Box>
    </Typography>
  )
}

export default D06gridTemplateAreas
