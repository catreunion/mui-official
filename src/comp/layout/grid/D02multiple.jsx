import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}))

function D02multiple() {
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>A</Item>
        </Grid>

        <Grid item xs={6} md={4}>
          <Item>B</Item>
        </Grid>

        <Grid item xs={6} md={4}>
          <Item>C</Item>
        </Grid>

        <Grid item xs={6} md={8}>
          <Item>D</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default D02multiple
