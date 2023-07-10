import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import HandymanIcon from '@mui/icons-material/Handyman';


const drawerWidth = 240;

export const SideMenu = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Box component="span" >
        Admin
      </Box>
      <Divider variant="middle" sx={{ m: 2}}/>

      <List>
        <ListItem key='Dashboard' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
        </ListItem>
        <ListItem key='Tables' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CorporateFareIcon />
            </ListItemIcon>
            <ListItemText primary='Tables' />
          </ListItemButton>
        </ListItem>
        <ListItem key='Billing' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary='Billing' />
          </ListItemButton>
        </ListItem>
        <ListItem key='Virtual Reality' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ViewInArIcon />
            </ListItemIcon>
            <ListItemText primary='Virtual Reality' />
          </ListItemButton>
        </ListItem>
        <ListItem key='RTL' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HandymanIcon />
            </ListItemIcon>
            <ListItemText primary='RTL' />
          </ListItemButton>
        </ListItem>
      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Test1
        </Typography>
        <Typography paragraph>
          Test2
        </Typography>
      </Box>
    </Box>
  );
}
