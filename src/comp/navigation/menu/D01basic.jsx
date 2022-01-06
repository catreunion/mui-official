import React, { useState } from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

function D01basic() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button onClick={handleClick} aria-controls={open ? "basic-menu" : undefined} aria-expanded={open ? "true" : undefined} aria-haspopup="true" id="basic-button">
        Dashboard
      </Button>

      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
        id="basic-menu"
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default D01basic
