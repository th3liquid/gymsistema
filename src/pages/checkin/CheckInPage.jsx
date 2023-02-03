import { Avatar, Grid, Input, TextField, Typography } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import { Clock } from "../../components/Clock";



export const CheckInPage = () => {
  const focusUsernameInputField = input => {
    if (input) {
      setTimeout(() => {input.focus()}, 100);
    }
  };
  return (
    <>
      <Grid container>
        <Grid sx={{ marginTop: '50px', display: "flex", justifyContent: "center" }} item xs={12}>
          <Typography variant="h3">Sucursal: Santa Elena</Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12}>
          <Typography variant="h4">Direccion del gimnasio</Typography>
        </Grid>
        <Grid sx={{marginTop: '50px', display: "flex", justifyContent: "center" }} item xs={12}>
          <Avatar sx={{width: '200px', height: '200px'}} />
        </Grid>
        <Grid sx={{marginTop: '50px', display: "flex", justifyContent: "center" }} item xs={12}>
          
          <Clock />
        </Grid>
        <Grid sx={{marginTop: '20px', display: "flex", justifyContent: "center" }} item xs={12}>
        <TextField
        sx={{width: '500px'}}
          label="Escribe tu Codigo"
          autoFocus
          id="outlined-size-small"
          type='number'
          size="large"
        />
        </Grid>
      </Grid>
    </>
  );
};
