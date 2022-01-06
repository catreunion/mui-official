import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"

function D02rowHeight() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 6,
    maxColumns: 6
  })

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rowHeight={52} {...data} />
    </div>
  )
}
export default D02rowHeight

// This section goes in details on the aspects of ...

// By default, the rows have a height of 52 pixels. This matches the normal height in the Material Design guidelines.
