import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import Box from "@mui/material/Box"

const columns = [
  { field: "name", headerName: "Name", width: 180 },
  {
    field: "rating",
    headerName: "Rating",
    type: "number",
    width: 140
  },
  {
    field: "dateCreated",
    headerName: "Created on",
    width: 180,
    type: "date"
  },
  {
    field: "isAdmin",
    headerName: "Is admin?",
    width: 180,
    type: "boolean"
  }
]

function D02predefined() {
  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 5
  })

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <DataGrid rows={data.rows} columns={columns} />
    </Box>
  )
}

export default D02predefined
