import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AzeemTourism from "../assets/navlogo.png";

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
    { name: "Visas", link: "/visas" },
    { name: "Hotels", link: "/hotels" },
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
  const getGradient = () => {
    if (location.pathname.includes("/packages")) {
      return "linear-gradient(90deg, #fabe95 0%, #182848 100%)";
    } else if (location.pathname.includes("/tours")) {
      return "linear-gradient(90deg, #6BC4A6 0%, #182848 100%)";
    } else if (location.pathname.includes("/tickets")) {
      return "linear-gradient(90deg, #DFC5FE -20%, #182848 100%)";
    }else if (location.pathname.includes("/about")) {
      return "linear-gradient(90deg, #7ec7b3 0%, #182848 100%)";
    }else if (location.pathname.includes("/contact")) {
      return "linear-gradient(90deg, #95A3AE 0%, #182848 100%)";
    }else if (location.pathname.includes("/visas")) {
      return "linear-gradient(90deg, #6BC4A6 0%, #182848 100%)";
    }
    else if (location.pathname.includes("/hotels")) {
        return "linear-gradient(90deg, #fabe95 0%, #182848 100%)";
    }  else {
      return "linear-gradient(90deg, #4b6cb8 0%, #182848 100%)";
    }
  };

  const getColors = () => {
    if (location.pathname.includes("/packages")) {
      return "#fabe95";
    } else if (location.pathname.includes("/tours")) {
      return "#6BC4A6";
    } else if (location.pathname.includes("/tickets")) {
      return "#DFC5FE";
    }else if (location.pathname.includes("/about")) {
      return "#7ec7b3";
    }else if (location.pathname.includes("/visas")) {
        return "#6BC4A6";
    }
    else if (location.pathname.includes("/hotels")) {
        return "#fabe95";
      
    } else {
      return "#4b6cb8";
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: getGradient(),
        border: 1,
        borderRadius: 3,
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1)",
      }}
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
                width={35}
                height={35}
              />
              <p className="lg:text-xl font-bold font-inter text-white text-center pt-0">
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
                  color: location.pathname === item.link ? "white" : "#fff",
                  backgroundColor:
                    location.pathname === item.link
                      ? getColors()
                      : "transparent",
                  display: "block",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "lg",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: getColors()
                  },
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
