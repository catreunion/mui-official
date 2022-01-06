import React, { useState, useCallback, useMemo } from "react"
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { randomCreatedDate, randomUpdatedDate } from "@mui/x-data-grid-generator"
import DeleteIcon from "@mui/icons-material/Delete"

const initialRows = [
  {
    id: 1,
    name: "Damien",
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true
  },
  {
    id: 2,
    name: "Kate",
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false
  }
]

function D06properties() {
  const [rows, setRows] = useState(initialRows)

  const deleteUser = useCallback(
    id => () => {
      setTimeout(() => {
        setRows(prevRows => prevRows.filter(row => row.id !== id))
      })
    },
    []
  )

  // const toggleAdmin = useCallback(
  //   id => () => {
  //     setRows(prevRows => prevRows.map(row => (row.id === id ? { ...row, isAdmin: !row.isAdmin } : row)))
  //   },
  //   []
  // )

  // const duplicateUser = useCallback(
  //   id => () => {
  //     setRows(prevRows => {
  //       const rowToDuplicate = prevRows.find(row => row.id === id)
  //       return [...prevRows, { ...rowToDuplicate, id: Date.now() }]
  //     })
  //   },
  //   []
  // )

  const columns = useMemo(
    () => [
      { field: "name", headerName: "Name", type: "string" },
      { field: "age", headerName: "Age", type: "number", width: 60 },
      { field: "dateCreated", headerName: "Date Created", type: "date", width: 120 },
      { field: "lastLogin", headerName: "Last Login", type: "dateTime", width: 170 },
      { field: "isAdmin", headerName: "Admin", type: "boolean", width: 70 },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 90,
        getActions: params => [<GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={deleteUser(params.id)} showInMenu />]
      }
    ],
    [deleteUser]
  )

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  )
}

export default D06properties
