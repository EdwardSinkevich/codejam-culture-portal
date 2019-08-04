import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import { Link, graphql } from 'gatsby';


const styles = () => ({
  header: {
    backgroundColor: '#008080',
  },
  title: {
    flexGrow: 1,
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    width: '260px',
    boxShadow:
      '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
  },

  appResponsive: {
    margin: '20px 10px',
  },

  container: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    '@media (min-width: 576px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px',
    },
    '@media (min-width: 960px)': {
      maxWidth: '960px',
    },
    '@media (min-width: 1280px)': {
      maxWidth: '1280px',
    },
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { rightLinks, classes, siteTitle, data } = this.props;

    const locale = JSON.parse(data.locales.edges[0].node.data);

    return (
      <AppBar className={classes.header}>
        <Toolbar className={classes.container}>
          <h1 className={classes.title}>
            <Link to={`/${window.localStorage.lng}/`} className={classes.link}>
              {locale.siteTitle}
            </Link>
          </h1>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.appResponsive}>
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.propTypes = {
  rightLinks: PropTypes.node,
  classes: PropTypes.object.isRequired,
  siteTitle: PropTypes.string,
  data: PropTypes.object,
};

Header.defaultProps = {
  data: {},
};

export default withStyles(styles)(Header);
