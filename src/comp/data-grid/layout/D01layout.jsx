import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"

function D01layout() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 6
  })

  return (
    <div style={{ width: "100%", height: 400 }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid {...data} />
        </div>
      </div>
    </div>
  )
}

export default D01layout

// the flex container allows a flexible layout, resizes well, and works on all devices.
