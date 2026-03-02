import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  Slide,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/Logo.svg";

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
      setScrolled(window.scrollY > 40);
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
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
        py: 1.5,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "80px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={Logo}
            alt="Yoana Creative Logo"
            style={{
              height: 60,
              width: "auto",
              objectFit: "contain",
              transition: "all 0.3s ease",
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Button
                key={link.name}
                component={Link}
                to={link.path}
                sx={{
                  fontWeight: active ? 600 : 500,
                  fontSize: "0.95rem",
                  color: active ? "#2C3E5F" : "#222",
                  textTransform: "none",
                  position: "relative",
                  "&::after": active
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: -6,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#2C3E5F",
                      }
                    : {},
                }}
              >
                {link.name}
              </Button>
            );
          })}

          {/* CV Button */}
          <Button
            component="a"
            href="/CV Yoana Churkina.pdf"
            target="_blank"
            variant="outlined"
            sx={{
              ml: 2,
              borderColor: "#2C3E5F",
              color: "#2C3E5F",
              fontWeight: 500,
              borderRadius: "50px",
              px: 3,
              py: 1,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#2C3E5F",
                color: "white",
                borderColor: "#2C3E5F",
              },
            }}
          >
            CV
          </Button>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ color: "#2C3E5F" }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                height: "100vh",
                backgroundColor: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(12px)",
              },
            }}
            TransitionComponent={Slide}
            transitionDuration={400}
          >
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  color: "#2C3E5F",
                }}
              >
                <CloseIcon />
              </IconButton>

              <img
                src={Logo}
                alt="Yoana Creative Logo"
                style={{
                  height: 60,
                  width: "auto",
                  marginTop: 40,
                }}
              />

              <Box sx={{ mt: 6 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    component={Link}
                    to={link.path}
                    onClick={toggleDrawer(false)}
                    sx={{
                      display: "block",
                      fontSize: "1.5rem",
                      fontWeight:
                        location.pathname === link.path ? 600 : 400,
                      color:
                        location.pathname === link.path
                          ? "#2C3E5F"
                          : "#222",
                      textTransform: "none",
                      my: 2,
                    }}
                  >
                    {link.name}
                  </Button>
                ))}

                <Button
                  component="a"
                  href="/CV Yoana Churkina.pdf"
                  target="_blank"
                  onClick={toggleDrawer(false)}
                  variant="outlined"
                  sx={{
                    mt: 4,
                    borderColor: "#2C3E5F",
                    color: "#2C3E5F",
                    fontWeight: 500,
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#2C3E5F",
                      color: "white",
                      borderColor: "#2C3E5F",
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