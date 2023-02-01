import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RouterGym } from "../router/RouterGym";
import { links } from "./data";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { NavLink } from "react-router-dom";
import MiniDrawer from "./MiniDrawer";

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
      
        <MiniDrawer />
        
      
    </>
  );
};
