import React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"

const columns = [
  {
    field: "date",
    renderHeader: () => (
      <strong>
        {"Birthday "}
        <span role="img" aria-label="enjoy">
          🎂
        </span>
      </strong>
    ),
    width: 150,
    type: "date"
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

function D05renderHeader() {
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <DataGrid columns={columns} rows={rows} />
    </Box>
  )
}

export default D05renderHeader
