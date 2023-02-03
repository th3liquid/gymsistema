import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { Avatar, Grid } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { LoginPage } from "../pages/login/LoginPage";
import { RouterGym } from "../router/RouterGym";
import { CheckInPage } from "../pages/checkin/CheckInPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { ClientsPage } from "../pages/clients/ClientsPage";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import StoreIcon from "@mui/icons-material/Store";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { UsuariosPage } from "../pages/usuarios/UsuariosPage";
import { PagosPage } from "../pages/pagos/PagosPage";
import { SucursalesPage } from "../pages/sucursales/SucursalesPage";
import { MembresiasPage } from "../pages/membresias/MembresiasPage";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Footer } from "../pages/footer/Footer";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <DiamondIcon sx={{ fontSize: "100px" }} />
      </Grid>

      <Divider />

      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          xs={12}
        >
          <DashboardIcon />
          <NavLink to="/" component={<DashboardPage />}>
            <Typography sx={{ marginLeft: "30px" }}>Dashboard</Typography>
          </NavLink>
        </Grid>
      </Grid>

      <Divider />
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          xs={12}
        >
          <CheckCircleIcon />
          <NavLink to="checkin" component={<CheckInPage />}>
            <Typography sx={{ marginLeft: "30px" }}>Check In</Typography>
          </NavLink>
        </Grid>
      </Grid>

      <Divider />

      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          xs={12}
        >
          <PeopleAltIcon />
          <NavLink to="clientes" component={<ClientsPage />}>
            <Typography sx={{ marginLeft: "30px" }}>Clientes</Typography>
          </NavLink>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          xs={12}
        >
          <BookmarkAddedIcon />
          <NavLink to="membresias" component={<MembresiasPage />}>
            <Typography sx={{ marginLeft: "30px" }}>Membresias</Typography>
          </NavLink>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          xs={12}
        >
          <StoreIcon />
          <NavLink to="sucursales" component={<SucursalesPage />}>
            <Typography sx={{ marginLeft: "30px" }}>Sucursales</Typography>
          </NavLink>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          xs={12}
        >
          <MonetizationOnIcon />
          <NavLink to="pagos" component={<PagosPage />}>
            <Typography sx={{ marginLeft: "30px" }}>Pagos</Typography>
          </NavLink>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          xs={12}
        >
          <PeopleAltIcon />
          <NavLink to="usuarios" component={<UsuariosPage />}>
            <Typography sx={{ marginLeft: "30px" }}>Usuarios</Typography>
          </NavLink>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Grid container>
            <Grid item sx={{display: 'flex'}} xs={12}>
              <Grid item xs={6}>
                <Typography variant="h6" noWrap component="div">
                  Sistema Gym
                </Typography>
              </Grid>
              <Grid item sx={{display: 'flex', justifyContent: 'end'}} xs={6}>
                <Avatar></Avatar>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <RouterGym />
        <Footer />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
