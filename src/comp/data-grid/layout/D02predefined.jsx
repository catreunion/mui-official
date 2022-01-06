import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"

function D02predefined() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 6
  })

  return (
    <div style={{ width: "100%", height: 400 }}>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid {...data} />
      </div>
    </div>
  )
}

export default D02predefined
