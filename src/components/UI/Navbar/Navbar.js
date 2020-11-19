import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Drawer, Divider, Hidden, List, ListItem, ListItemIcon, 
Menu, MenuItem, ListItemText, Collapse, Button, Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ModalEnquiry from '../Modal/ModalEnquiry'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: '#fafafa',
    color: "#000000"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#fafafa',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '85%',
    },
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  nolink: {
    textDecoration: 'none',
    color: '#000000'
  }
}));

const PrimarySearchAppBar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openComp = Boolean(anchorEl);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <div className={classes.grow}>
       <AppBar className={classes.appBar}>
        <Toolbar>
        <Hidden mdUp>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          </Hidden>
          <div className={classes.grow} />
          <Link to="/">
          <img className={classes.logo} src="/Images/Banner.png" alt="pes logo" />
          </Link>
          <Hidden smDown>
          <Grid container>
          <Button color="inherit">
          <Link to="/" className={classes.nolink}>
            Home
          </Link>  
          </Button>
          <Button color="inherit" onClick={handleMenu}>Company <ExpandMore /></Button>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openComp}
                onClose={handleClose}
              >
                <Link to="/company/about" className={classes.nolink}> 
                <MenuItem onClick={handleClose}>About Us</MenuItem>
                </Link>
                <Link to="/company/capabilities" className={classes.nolink}> 
                <MenuItem onClick={handleClose}>Capabilities</MenuItem>
                </Link>
              </Menu>
          <Link to="/products" className={classes.nolink}>
          <Button color="inherit">Products</Button>
          </Link>
          <Link to="/products" className={classes.nolink}>
          <Button color="inherit">Projects & Services</Button>
          </Link>
          <Link to="/contact" className={classes.nolink}>
          <Button color="inherit">Contact Us</Button>
          </Link>
          </Grid>
          </Hidden>
          <ModalEnquiry />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
      <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link onClick={handleDrawerToggle} to="/" className={classes.nolink}>
        <ListItem button>
           <ListItemIcon><HomeIcon /></ListItemIcon>
           <ListItemText primary="Home" />
        </ListItem>
        </Link>

        <ListItem button onClick={handleClick}>
        <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Company" />
        {open != null ? open ? <ExpandMore /> : <ExpandLess /> : null}
         </ListItem>
        <Collapse component="li" in={!open} timeout="auto" unmountOnExit>
        <List disablePadding>
        <Link onClick={handleDrawerToggle} to="/company/about" className={classes.nolink}>  
        <ListItem button className={classes.nested}>
           <ListItemText primary="About Us" />
        </ListItem>
        </Link>
        <Link onClick={handleDrawerToggle} to="/company/capabilities" className={classes.nolink}>
        <ListItem button className={classes.nested}>
           <ListItemText primary="Capabilities" />
        </ListItem>
        </Link>
        </List>
       </Collapse>

        <Link onClick={handleDrawerToggle} to="/products" className={classes.nolink}>
        <ListItem button>
           <ListItemIcon><CardTravelIcon /></ListItemIcon>
           <ListItemText primary="Products" />
        </ListItem>
        </Link>

        <Link onClick={handleDrawerToggle} to="/contact" className={classes.nolink}>
        <ListItem button>
           <ListItemIcon><PhoneIcon /></ListItemIcon>
           <ListItemText primary="Contact Us" />
        </ListItem>
        </Link>

      </List>
     </div>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default PrimarySearchAppBar;