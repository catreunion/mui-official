import React, { useState } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"

const options = ["Show some love to MUI", "Show all notification content", "Hide sensitive notification content", "Hide all notification content"]

function D04selected() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(1)
  const open = Boolean(anchorEl)
  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <List component="nav" aria-label="Device settings" sx={{ bgcolor: "background.paper" }}>
        <ListItem button id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClickListItem}>
          <ListItemText primary="When device is locked" secondary={options[selectedIndex]} />
        </ListItem>
      </List>

      <Menu
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox"
        }}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        id="lock-menu"
      >
        {options.map((option, index) => (
          <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default D04selected
