import React, { useState } from "react"
// import PropTypes from "prop-types"
import { Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Avatar, Button, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import PersonIcon from "@mui/icons-material/Person"
import AddIcon from "@mui/icons-material/Add"

const emails = ["username@gmail.com", "user02@gmail.com"]

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = value => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map(email => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick("addAccount")}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  )
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired
// }

function D01basic() {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(emails[1])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = value => {
    setOpen(false)
    setSelectedValue(value)
  }

  return (
    <>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </>
  )
}

export default D01basic
