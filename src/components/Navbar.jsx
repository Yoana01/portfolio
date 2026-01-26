import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

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
        {/* Logo / Title */}
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
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
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

          {/* Modern Rounded CV Button */}
          <Button
            component="a"
            href="/CV UX Yoana.pdf"
            target="_blank"
            variant="outlined"
            sx={{
              ml: 2,
              borderColor: "#32620e",
              color: "#32620e",
              fontWeight: 500,
              borderRadius: "50px",
              px: 3,
              py: 1,
              textTransform: "none",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              "&:hover": {
                bgcolor: "#32620e",
                color: "white",
                borderColor: "#32620e",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              },
            }}
          >
            CV
          </Button>
        </Box>

        {/* Mobile Hamburger Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton edge="end" onClick={toggleDrawer(true)} sx={{ color: "#32620e" }}>
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                height: "100vh",
                backgroundColor: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
              },
            }}
            TransitionComponent={Slide}
            transitionDuration={400}
          >
            <Box sx={{ textAlign: "center", mt: 3 }}>
              {/* Close Button */}
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "#32620e",
                  fontSize: "2rem",
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>

              {/* Menu Items */}
              <Box sx={{ mt: 8 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    component={Link}
                    to={link.path}
                    onClick={toggleDrawer(false)}
                    sx={{
                      display: "block",
                      fontSize: "1.5rem",
                      color: location.pathname === link.path ? "#32620e" : "black",
                      textDecoration: "none",
                      my: 2,
                    }}
                  >
                    {link.name}
                  </Button>
                ))}

                {/* CV Button in Drawer */}
                <Button
                  component="a"
                  href="/CV UX updated.pdf"
                  target="_blank"
                  onClick={toggleDrawer(false)}
                  variant="outlined"
                  sx={{
                    mt: 3,
                    borderColor: "#32620e",
                    color: "#32620e",
                    fontWeight: 500,
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.2rem",
                    "&:hover": {
                      bgcolor: "#32620e",
                      color: "white",
                      borderColor: "#32620e",
                    },
                  }}
                >
                  CV
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
