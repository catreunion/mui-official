import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { randomCreatedDate, randomTraderName, randomUpdatedDate } from "@mui/x-data-grid-generator"

export default function D01basic() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

const columns = [
  { field: "name", headerName: "Name", width: 180, editable: true },
  { field: "age", headerName: "Age", type: "number", editable: true },
  {
    field: "dateCreated",
    headerName: "Date Created",
    type: "date",
    width: 180,
    editable: true
  },
  {
    field: "lastLogin",
    headerName: "Last Login",
    type: "dateTime",
    width: 220,
    editable: true
  }
]

const rows = [
  {
    id: 4,
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 5,
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  }
]
