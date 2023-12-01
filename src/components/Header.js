import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../styles/HeaderStyles.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu drawer content
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#333',
      }}
    >
      {/* Add your drawer content here */}
      <Link to="/" className="drawer-link">
        Home
      </Link>
      <Link to="/Menu" className="drawer-link">
        Menu
      </Link>
      <Link to="/About" className="drawer-link">
        About
      </Link>
      <Link to="/Contact" className="drawer-link">
        Contact
      </Link>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: 'none' },
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={'red'}
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, my: 2 }}
          >
            <FastfoodIcon />
            KFC RESTAURANT
          </Typography>
          <Divider />
          <ul className="mobile-navigation">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '&.MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '140px',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ p: 2 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
