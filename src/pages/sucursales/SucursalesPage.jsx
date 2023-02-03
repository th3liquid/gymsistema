import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Tablas from '../../components/Tablas'

export const SucursalesPage = () => {
  return (
    <>
    <Grid container>
        <Grid
          item
          sx={{
            display: "flex",

            marginTop: "30px",
            marginBottom: "30px",
          }}
          xs={12}
        >
          <Grid item sx={{ display: "flex", justifyContent: "start" }} xs={6}>
            <Typography variant='h4'>Sucursales</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "end" }} xs={6}>
            <Button variant="contained">Nueva Sucursal</Button>
          </Grid>
        </Grid>
      </Grid>

      <Tablas />
    </>
  )
}
