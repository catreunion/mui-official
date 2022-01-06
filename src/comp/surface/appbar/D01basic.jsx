import React from "react"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

function D01basic() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton sx={{ mr: 2 }} size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography sx={{ flexGrow: 1 }} variant="h6" component="div">
            News
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default D01basic
