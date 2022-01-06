import React, { useState } from "react"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import MobileDatePicker from "@mui/lab/MobileDatePicker"
import TextField from "@mui/material/TextField"
import Container from "@mui/material/Container"

function D03responsive() {
  const [date, setDate] = useState(new Date())

  return (
    // <Container sx={{ p: 1, mt: 3, ml: 2 }}>
    <Container sx={{ p: 0, m: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          onChange={newDate => {
            setDate(newDate)
          }}
          renderInput={params => <TextField {...params} />}
          value={date}
          label="Date"
          disableFuture
        />
      </LocalizationProvider>
    </Container>
  )
}

export default D03responsive
