import React, { useState, useEffect, useRef } from "react"
import { Box, Button, Dialog, DialogActions, DialogContent, List, ListItem, ListItemText, DialogTitle, RadioGroup, Radio, FormControlLabel } from "@mui/material"

const options = ["None", "Atria", "Callisto", "Dione", "Ganymede", "Hangouts Call", "Luna", "Oberon", "Phobos", "Pyxis", "Sedna", "Titania", "Triton", "Umbriel"]

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props
  const [value, setValue] = useState(valueProp)
  const radioGroupRef = useRef(null)

  useEffect(() => {
    if (!open) {
      setValue(valueProp)
    }
  }, [valueProp, open])

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onClose(value)
  }

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Dialog sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }} maxWidth="xs" TransitionProps={{ onEntering: handleEntering }} open={open} {...other}>
      <DialogTitle>Phone Ringtone</DialogTitle>

      <DialogContent dividers>
        <RadioGroup ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
          {options.map(option => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}

function D09confirm() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("Dione")

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = newValue => {
    setOpen(false)

    if (newValue) {
      setValue(newValue)
    }
  }

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="div" role="group">
        <ListItem button disabled divider>
          <ListItemText primary="Interruptions" />
        </ListItem>

        <ListItem button onClick={handleOpen} divider aria-haspopup="true" aria-controls="ringtone-menu" aria-label="phone ringtone">
          <ListItemText primary="Phone ringtone" secondary={value} />
        </ListItem>

        <ListItem button disabled divider>
          <ListItemText primary="Default notification ringtone" secondary="Tethys" />
        </ListItem>

        <ConfirmationDialogRaw open={open} onClose={handleClose} value={value} id="ringtone-menu" keepMounted />
      </List>
    </Box>
  )
}

export default D09confirm
