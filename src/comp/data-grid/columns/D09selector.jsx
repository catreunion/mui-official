import React from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"

function D09selector() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 6
  })

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar
        }}
      />
    </div>
  )
}

export default D09selector
