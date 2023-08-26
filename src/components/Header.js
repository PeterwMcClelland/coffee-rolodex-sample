import React, { useState, useEffect } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [value, setValue] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`nav_bar ${showNav ? "" : "nav-hidden"}`}>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1 className="home-h1">Coffee Rolodex</h1>
          </NavLink>

          {isMobile ? (
            <Accordion
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "inherit",
              }}
            >
              <AccordionSummary>
                <Typography>Menu</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <NavLink
                  to="/tds"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography>TDS</Typography>
                </NavLink>
                <NavLink
                  to="/coffees"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography>All Coffees</Typography>
                </NavLink>
                <NavLink
                  to="/add"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography>Add Coffee</Typography>
                </NavLink>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Tabs
              sx={{ ml: "auto" }}
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={NavLink} to="/tds" label="TDS" />
              <Tab LinkComponent={NavLink} to="/coffees" label="All Coffees" />
              <Tab LinkComponent={NavLink} to="/add" label="Add Coffee" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
