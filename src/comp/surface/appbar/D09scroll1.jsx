import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

function D09scroll1(props) {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to Hide App Bar
          </Typography>
        </Toolbar>
      </AppBar>

      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(22)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default D09scroll1
