import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Appbar({auth, setAuth}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleMenu = () => {
    // setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    // setAnchorEl(null);
    setOpen(false);
  };

  const handleSignOut = () => {
    setAuth(false);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", width: "100%"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <ShoppingBasketIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            Ecommerce App
          </Typography>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{position: "absolute", top: 5, right: 1}}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                // id="menu-appbar"
                // anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
