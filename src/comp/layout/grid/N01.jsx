import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
// import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

function N01() {
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>A</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>B</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>C</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>D</Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default N01
