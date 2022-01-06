import * as React from "react"
import { styled } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import MoreIcon from "@mui/icons-material/MoreVert"

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128
  }
}))

function D07prominent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton sx={{ mr: 2 }} edge="start" color="inherit" aria-label="open menu">
            <MenuIcon />
          </IconButton>

          <Typography sx={{ flexGrow: 1, alignSelf: "flex-end" }} variant="h5" noWrap component="div">
            CATREUNION
          </Typography>

          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>

          <IconButton aria-label="show more" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default D07prominent
