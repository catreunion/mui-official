import React, { useState } from "react"
import Box from "@mui/material/Box"
import Badge from "@mui/material/Badge"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import MailIcon from "@mui/icons-material/Mail"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"

function D03visibility() {
  const [count, setCount] = useState(1)
  const [invisible, setInvisible] = useState(false)

  // use invisible prop to control badge visibility
  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2
        },
        "& .MuiBadge-root": {
          marginRight: 4
        }
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>

        <ButtonGroup>
          <Button
            onClick={() => {
              setCount(Math.max(count - 1, 0))
            }}
            aria-label="reduce"
          >
            <RemoveIcon fontSize="small" />
          </Button>

          <Button
            onClick={() => {
              setCount(count + 1)
            }}
            aria-label="increase"
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>

      <div>
        <Badge invisible={invisible} color="secondary" variant="dot">
          <MailIcon />
        </Badge>
        <FormControlLabel sx={{ color: "text.primary" }} control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />} label="Show Badge" />
      </div>
    </Box>
  )
}

export default D03visibility
