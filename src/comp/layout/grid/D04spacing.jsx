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

function D04spacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>

        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>

        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>

        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default D04spacing
