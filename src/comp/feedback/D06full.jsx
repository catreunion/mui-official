import React, { useState, forwardRef } from "react"
import CloseIcon from "@mui/icons-material/Close"

import { Button, Dialog, ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography, Slide } from "@mui/material"

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function D06full() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpen} variant="outlined">
        Open full-screen dialog
      </Button>

      <Dialog onClose={handleClose} fullScreen open={open} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton onClick={handleClose} edge="start" color="inherit" aria-label="close">
              <CloseIcon />
            </IconButton>

            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>

            <Button onClick={handleClose} autoFocus color="inherit">
              save
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />

          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </>
  )
}

export default D06full
