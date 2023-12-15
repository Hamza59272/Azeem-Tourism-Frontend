import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import React from "react";
import { useState, useRef, useEffect } from "react";
import AzeemTourism from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const pages = [
    { name: "Home", link: "/" },
    { name: "Packages", link: "/packages" },
    { name: "Tours", link: "/tours" },
    { name: "Tickets", link: "/tickets" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white" }}
      className="animate-fade-down"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse no-underline cursor-pointer">
              <img
                src={AzeemTourism}
                alt="Azeem Toursim logo"
                width={64}
                height={64}
              />
              <p className="lg:text-xl font-bold font-inter text-zinc-800 text-center pt-3">
                Azeem Tourism
              </p>
            </div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => navigate(page.link)}
                  sx={{
                    backgroundColor:
                      location.pathname === page.link
                        ? "#27272a"
                        : "transparent",
                  }}
                >
                  <Typography
                    textAlign="center"
                    style={{
                      color:
                        location.pathname === page.link ? "white" : "#27272a",
                      fontFamily: "Inter",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse no-underline cursor-pointer">
              <img
                src={AzeemTourism}
                className="h-8 lg:h-16"
                alt="Azeen Toursim logo"
              />
              {/* <p className="lg:text-xl font-bold font-inter text-zinc-800 text-center pt-2">
                Azeem Tourism
              </p> */}
            </div>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
                justifyContent: "space-around",
              },
              px: 10,
            }}
          >
            {pages.map((item) => (
              <Button
                key={item.name}
                onClick={() => navigate(item.link)}
                sx={{
                  color: location.pathname === item.link ? "white" : "#27272a",
                  backgroundColor:
                    location.pathname === item.link ? "#27272a" : "transparent",
                  display: "block",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "lg",
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
