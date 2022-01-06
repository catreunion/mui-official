import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import Box from "@mui/material/Box"

function D03disable() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 4,
    maxColumns: 6
  })

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <DataGrid
        {...data}
        columns={data.columns.map(column => ({
          ...column,
          filterable: false
        }))}
      />
    </Box>
  )
}

export default D03disable

// Filters are enabled by default
// the disableColumnFilter prop
// <DataGrid disableColumnFilter />
