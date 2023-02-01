import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Tablas from "../../components/Tablas";

export const ClientsPage = () => {
  return (
    <>
      <Typography variant="h2" sx={{ fontSize: "30px" }}>
        Listado de clientes
      </Typography>

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
            <Typography>Texto</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "end" }} xs={6}>
            <Button variant="contained">Nuevo Cliente</Button>
          </Grid>
        </Grid>
      </Grid>

      <Tablas />
    </>
  );
};
