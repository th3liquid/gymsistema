import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RouterGym } from "../router/RouterGym";
import { links } from "./data";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && isNavOpen) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, [isNavOpen]);

  return (
    <>
      <div className=""> 
        <Grid container sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white'}} xs={12}>
          <Grid item xs={6}>
            <Typography sx={{padding: '10px'}} variant='h6'>Sistema</Typography>
          </Grid>
          <Grid item xs={6} sx={{display: 'flex', justifyContent: 'end', padding: '10px'}}>

          <button
            className="sidebar-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span class="material-symbols-outlined">
              {isNavOpen ? "toggle_on" : "toggle_off"}
            </span>
          </button>
          </Grid>
          
        </Grid>
        <nav className={`nav ${isNavOpen ? "nav-open" : "nav-closed"}`}>
          <Grid sx={{display: 'flex', justifyContent: 'center'}}>
            <RocketLaunchIcon sx={{ fontSize: "100px" }} />
          </Grid>

          <ul>
            {links.map((link) => (
              <li>
                <a className="links" href="">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <RouterGym />
      </div>
    </>
  );
};
