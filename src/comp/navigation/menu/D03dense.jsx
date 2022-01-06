import React from "react"
import Paper from "@mui/material/Paper"
import MenuList from "@mui/material/MenuList"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Check from "@mui/icons-material/Check"
import Divider from "@mui/material/Divider"

function D03dense() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  )
}

export default D03dense
