import React, { useState } from "react"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import Stack from "@mui/material/Stack"
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker"
import MobileDatePicker from "@mui/lab/MobileDatePicker"
// import TimePicker from "@mui/lab/TimePicker"
// import DateTimePicker from "@mui/lab/DateTimePicker"
import TextField from "@mui/material/TextField"

function D00() {
  const [value, setValue] = useState(new Date())

  const handleDate = e => {
    setValue(e.toDateString())
    console.log(value)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        {/* <DesktopDatePicker onChange={handleDate} renderInput={params => <TextField {...params} />} inputFormat="MM/dd/yyyy" label="Date" value={value} /> */}

        <MobileDatePicker onChange={handleDate} renderInput={params => <TextField {...params} />} inputFormat="MM/dd/yyyy" label="Date" value={value} />

        {/* <TimePicker onChange={handleDate} renderInput={params => <TextField {...params} />} inputFormat="MM/dd/yyyy" label="Date" value={value} /> */}

        {/* <DateTimePicker onChange={handleDate} renderInput={params => <TextField {...params} />} inputFormat="MM/dd/yyyy" label="Date" value={value} /> */}
      </Stack>
    </LocalizationProvider>
  )
}

export default D00
