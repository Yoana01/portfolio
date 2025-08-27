import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.85)"
          : "rgba(255,255,255,0.2)",
        color: "black",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: "bold",
            color: location.pathname === "/" ? "#32620e" : "black",
            textDecoration: "none",
            cursor: "pointer",
            transition: "color 0.3s",
          }}
        >
          Yoana's Portfolio
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navLinks.map((link) => (
            <Typography
              key={link.name}
              component={Link}
              to={link.path}
              sx={{
                cursor: "pointer",
                fontWeight: 500,
                color: location.pathname === link.path ? "#32620e" : "black",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              {link.name}
            </Typography>
          ))}
        </Box>

        {/* Mobile Hamburger Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="end"
            onClick={handleMenuOpen}
            sx={{ color: "#32620e" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {navLinks.map((link) => (
              <MenuItem
                key={link.name}
                component={Link}
                to={link.path}
                onClick={handleMenuClose}
                sx={{
                  color: location.pathname === link.path ? "#32620e" : "black",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
