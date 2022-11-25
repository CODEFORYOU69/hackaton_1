/* eslint-disable */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// eslint-disable-next-line import/no-extraneous-dependencies,
import AdbIcon from "@mui/icons-material/Adb";
import "../style/Navbar.css";
import { useNavigate } from "react-router-dom";
import animationData from "../assets/img/animationData.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Lottie options={defaultOptions} height={90} width={90} />
          <div className="logo-title">
            <span>THEME </span>
            <span className="park">PARK</span>
            <span>WORLD</span>
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <MenuItem className="menu-item" onClick={handleCloseNavMenu}>
                <Typography className="font-nav" textAlign="center">
                  Accueil
                </Typography>
                <Typography className="font-nav" textAlign="center">
                  Trouver mon parc
                </Typography>
                <Typography className="font-nav" textAlign="center">
                  Mes favoris
                </Typography>
                <Typography className="font-nav" textAlign="center">
                  Contact
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            LOGO
          </Typography>
          <Box
            className="box"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              onClick={() => navigate("/")}
              className="btn font-nav"
              sx={{ my: 2, color: "#FFAB48", display: "block" }}
            >
              Accueil
            </Button>
            <Button
              onClick={() => navigate("/findpark")}
              className="btn font-nav"
              sx={{ my: 2, color: "#FFAB48", display: "block" }}
            >
              Trouver mon parc
            </Button>
            <Button
              onClick={() => navigate("/favorite")}
              className="btn font-nav"
              sx={{ my: 2, color: "#FFAB48", display: "block" }}
            >
              Mes favoris
            </Button>

            <Button
              onClick={() => navigate("/contact")}
              className="btn font-nav"
              sx={{ my: 2, color: "#FFAB48", display: "block" }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
