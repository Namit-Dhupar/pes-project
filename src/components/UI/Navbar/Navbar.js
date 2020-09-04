import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu,
Drawer, Divider, Hidden, List, ListItem, ListItemIcon, 
ListItemText, Collapse} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
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
      width: '45%',
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>My Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
       <AppBar className={classes.appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
          <img className={classes.logo} src="/Images/Banner.png" alt="pes logo" />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
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