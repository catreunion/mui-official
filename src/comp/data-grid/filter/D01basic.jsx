import React from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import Box from "@mui/material/Box"

function D01basic() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6
  })

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: "commodity",
                  operatorValue: "contains",
                  value: "rice"
                }
              ]
            }
          }
        }}
      />
    </Box>
  )
}

export default D01basic
