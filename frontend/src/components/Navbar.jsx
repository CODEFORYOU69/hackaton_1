import * as React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import AppBar from "@mui/material/AppBar";
// eslint-disable-next-line import/no-extraneous-dependencies
import Box from "@mui/material/Box";
// eslint-disable-next-line import/no-extraneous-dependencies
import Toolbar from "@mui/material/Toolbar";
// eslint-disable-next-line import/no-extraneous-dependencies
import IconButton from "@mui/material/IconButton";
// eslint-disable-next-line import/no-extraneous-dependencies
import Typography from "@mui/material/Typography";
// eslint-disable-next-line import/no-extraneous-dependencies
import Menu from "@mui/material/Menu";
// eslint-disable-next-line import/no-extraneous-dependencies
import MenuIcon from "@mui/icons-material/Menu";
// eslint-disable-next-line import/no-extraneous-dependencies
import Container from "@mui/material/Container";
// eslint-disable-next-line import/no-extraneous-dependencies
import Button from "@mui/material/Button";
// eslint-disable-next-line import/no-extraneous-dependencies
import MenuItem from "@mui/material/MenuItem";
// eslint-disable-next-line import/no-extraneous-dependencies
import AdbIcon from "@mui/icons-material/Adb";
import "../style/Navbar.css";
import { useNavigate } from "react-router-dom";

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
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

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
                <Typography textAlign="center">Acceuil</Typography>
                <Typography textAlign="center">Trouver mon parc</Typography>
                <Typography textAlign="center">Mes favoris</Typography>
                <Typography textAlign="center">Contact</Typography>
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
              className="btn"
              sx={{ my: 2, color: "#FFAB48", display: "block" }}
            >
              Acceuil
            </Button>
            <Button
              onClick={() => navigate("/findpark")}
              className="btn"
              sx={{ my: 2, color: "#FFAB48", display: "block" }}
            >
              Trouver mon parc
            </Button>
            <Button
              className="btn"
              sx={{ my: 2, color: "#FFAB48", display: "block" }}
            >
              Mes favoris
            </Button>

            <Button
              onClick={() => navigate("/contact")}
              className="btn"
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
