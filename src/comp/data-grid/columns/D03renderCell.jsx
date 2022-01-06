import React from "react"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"

const columns = [
  {
    field: "date",
    headerName: "Year",
    width: 150,
    renderCell: params => (
      <strong>
        {params.value.getFullYear()}
        <Button sx={{ ml: 2 }} variant="contained" color="primary" size="small">
          Open
        </Button>
      </strong>
    )
  }
]

const rows = [
  {
    id: 1,
    date: new Date(1977, 10, 10)
  },
  {
    id: 2,
    date: new Date()
  }
]

function D03renderCell() {
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <DataGrid columns={columns} rows={rows} />
    </Box>
  )
}

export default D03renderCell
