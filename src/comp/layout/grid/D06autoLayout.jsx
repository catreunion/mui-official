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

// set the width of one item and the others will automatically resize around it
// the items equitably share the available space
function D06autoLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>A</Item>
        </Grid>

        <Grid item xs={6}>
          <Item>B</Item>
        </Grid>

        <Grid item xs>
          <Item>C</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default D06autoLayout
