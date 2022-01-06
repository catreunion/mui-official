import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"

function D08menu() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 5
  })

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid {...data} disableColumnMenu />
    </div>
  )
}

export default D08menu
