import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"

const pages = ["Products", "Pricing", "Blog"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]

const D03logo = () => {
  const [anchorNav, setAnchorNav] = useState(null)
  const [anchorUser, setAnchorUser] = useState(null)

  const openNavMenu = event => {
    setAnchorNav(event.currentTarget)
  }

  const closeNavMenu = () => {
    setAnchorNav(null)
  }

  const openUserMenu = event => {
    setAnchorUser(event.currentTarget)
  }

  const closeUserMenu = () => {
    setAnchorUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* computer */}
          <Typography sx={{ mr: 2, display: { xs: "none", md: "flex" } }} variant="h6" noWrap component="div">
            CAT
          </Typography>

          {/* computer */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(page => (
              <Button sx={{ display: "block", color: "white", my: 2 }} onClick={closeNavMenu} key={page}>
                {page}
              </Button>
            ))}
          </Box>

          {/* phone */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={openNavMenu} aria-controls="menu-appbar" aria-haspopup="true" color="inherit" aria-label="account of current user">
              <MenuIcon />
            </IconButton>

            <Menu
              open={Boolean(anchorNav)}
              onClose={closeNavMenu}
              anchorEl={anchorNav}
              // anchorOrigin={{
              //   vertical: "bottom",
              //   horizontal: "left"
              // }}
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "left"
              // }}
              id="menu-appbar"
              keepMounted
            >
              {pages.map(page => (
                <MenuItem onClick={closeNavMenu} key={page}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* phone */}
          <Typography sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} variant="h6" noWrap component="div">
            CATREUNION
          </Typography>

          {/* both compute and phone */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={openUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              open={Boolean(anchorUser)}
              onClose={closeUserMenu}
              anchorEl={anchorUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "right"
              // }}
              id="menu-appbar"
              keepMounted
            >
              {settings.map(setting => (
                <MenuItem onClick={closeNavMenu} key={setting}>
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default D03logo
