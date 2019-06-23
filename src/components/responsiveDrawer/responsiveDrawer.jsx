import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Switch from '@material-ui/core/Switch';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

// import components
import ImageAvatar from '../imageAvatar/imageAvatar';

// import page components
import HomePage from '../homePage/homePage';
import AboutPage from '../aboutPage/aboutPage';
import BlogPage from '../blogPage/blogPage';
import ContactPage from '../contactPage/contactPage';
import ErrorPage from '../errorPage/errorPage';

// import Icons
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faEnvelope, faCloudSun, faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import Fade from '@material-ui/core/Fade';
// import theme
import { lightTheme, darkTheme } from "../../theme/muiTheme";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  lightDrawerPaper: {
    width: drawerWidth,
    background: '#f5f5f5',
  },
  darkDrawerPaper: {
    width: drawerWidth,
    background: '#0a192f',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  listItemIcon: {
    width: 32,
  },
});

class ResponsiveDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      mainPage: 'Home',
      appBarTitle: 'Home',
      isLightTheme: false,
    }
  }

  handleDrawerToggle = () => {
    this.setState(previousState => ({
      mobileOpen: !previousState.mobileOpen,
    }));
  };
  handleListItemClick = key => {
    if (!(key === 'Lights Off' || key === 'Lights On')) {
      this.setState({ mainPage: key, mobileOpen: false, appBarTitle: key })
    }
  };
  handleSwitch = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme,
    });
  };
  getPrimarySideOptions = () => {
    return [
      {
        text: "Home",
        icon: <FontAwesomeIcon icon={faHome} size="2x" />,
      },
      {
        text: "About",
        icon: <FontAwesomeIcon icon={faUserCircle} size="2x" />,
      },
      {
        text: "Blog",
        icon: <FontAwesomeIcon icon={faMedium} size="2x" />,
      },
      {
        text: "Contact",
        icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
      },
    ];
  };
  getSecondarySideOptions = () => {
    return [
      {
        text: this.state.isLightTheme ? "Lights Off" : "Lights On",
        icon: this.state.isLightTheme ? <Fade in={this.state.isLightTheme} timeout={1000}><FontAwesomeIcon icon={faCloudMoon} size="2x" /></Fade> : <Fade in={!this.state.isLightTheme} timeout={1000}><FontAwesomeIcon icon={faCloudSun} size="2x" /></Fade>,
        switchMode: <Switch
          checked={this.state.isLightTheme}
          onChange={this.handleSwitch}
          value="checkedB"
          color="primary"
        />
      },
    ];
  };
  getMainPage = () => {
    const { mainPage } = this.state;
    if (mainPage === 'Home') {
      return <HomePage />;
    }
    if (mainPage === 'About') {
      return <AboutPage />;
    }
    if (mainPage === 'Blog') {
      return <BlogPage />;
    }
    if (mainPage === 'Contact') {
      return <ContactPage />;
    }

    return <ErrorPage />;
  }
  render() {
    const { classes, theme } = this.props;
    const { isLightTheme } = this.state;
    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <ImageAvatar />
        </div>
        <Divider />
        <List>
          {this.getPrimarySideOptions().map(({ text, icon }) => (
            <ListItem button key={text} onClick={() => this.handleListItemClick(text)} alignItems="center">
              <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
              <ListItemText>
                <Typography variant="button">{text}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {this.getSecondarySideOptions().map(({ text, icon, switchMode = null }) => (
            <ListItem button key={text} onClick={() => this.handleListItemClick(text)}>
              <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
              <ListItemText>
                <Typography variant="button" style={{whiteSpace: 'nowrap'}}>{text}</Typography>
              </ListItemText>
              {switchMode}
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <MuiThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <div className={classes.root} style={darkTheme.palette.fullHeight}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} color="secondary">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                {this.state.appBarTitle}
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: isLightTheme ? classes.lightDrawerPaper : classes.darkDrawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <div>
                <Drawer
                  classes={{
                    paper: isLightTheme ? classes.lightDrawerPaper : classes.darkDrawerPaper,
                  }}
                  variant="permanent"
                  open
                >
                  {drawer}
                </Drawer>
              </div>
            </Hidden>
          </nav>
          <main className={classes.content} style={isLightTheme ? lightTheme.palette.mainPage : darkTheme.palette.mainPage}>
            <div className={classes.toolbar} />
            {this.getMainPage()}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
