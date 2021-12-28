import React, { useState } from "react"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import Stack from "@mui/material/Stack"
import MobileDatePicker from "@mui/lab/MobileDatePicker"
import DesktopDatePicker from "@mui/lab/DesktopDatePicker"
import DatePicker from "@mui/lab/DatePicker"
import TextField from "@mui/material/TextField"

function D03responsive() {
  const [value, setValue] = useState(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDatePicker
          label="For mobile"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />

        <DesktopDatePicker
          label="For desktop"
          value={value}
          minDate={new Date("2017-01-01")}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />

        <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={["year", "month", "day"]}
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  )
}

export default D03responsive
