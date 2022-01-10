import React from "react"
// import AppBar from "@mui/material/AppBar"
// import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
// import Stack from "@mui/material/Stack"
// import Button from "@mui/material/Button"
// import CardActions from "@mui/material/CardActions"

import { getData } from "./runLog"

const runLogs = getData()

function Running() {
  return (
    <>
      {/* <AppBar position="relative"> */}
      <Container sx={{ p: 4, bgcolor: "background.paper" }} maxWidth="md">
        <Typography variant="h4" align="center" color="text.primary" gutterBottom>
          Running Log
        </Typography>

        <Typography variant="body1" align="center" color="text.secondary">
          Cum recusandae provident distinctio pariatur magni omnis commodi nostrum corrupti esse? Alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>

        {/* <Stack sx={{ p: 2 }} direction="row" justifyContent="center" spacing={2}>
            <Button variant="contained">Button 1</Button>
            <Button variant="outlined">Button 2</Button>
          </Stack> */}
      </Container>

      <Container sx={{ py: 4 }} maxWidth="xl">
        <Grid spacing={4} container>
          {runLogs.map(runLog => (
            <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={runLog.date} item>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia image={runLog.image} component="img" alt="Isaac's running log" />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {runLog.date}
                  </Typography>

                  <Typography>{runLog.desc}</Typography>
                </CardContent>

                {/* <CardActions>
                  <Button size="small">View</Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Running
