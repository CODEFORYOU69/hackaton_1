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

const pages = ["Accueil", "Trouver mon park", "Mes favoris", "Contact"];

function ResponsiveAppBar() {
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
              className=""
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
            {pages.map((page) => (
              <Button
                className="btn"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#FFAB48", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
