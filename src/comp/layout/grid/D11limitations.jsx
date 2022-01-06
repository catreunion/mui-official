import React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `

function D11Limitations() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <Paper sx={{ maxWidth: 400, my: 1, mx: "auto", p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>

          {/* for the item to stay within the container */}
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>

          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default D11Limitations
