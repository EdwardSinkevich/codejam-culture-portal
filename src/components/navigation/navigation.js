import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import SimpleMenu from '../simpleMenu/simpleMenu';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

export default function Navigation({ siteTitle }) {
  const classes = useStyles();


  Navigation.propTypes = {
    siteTitle: PropTypes.string,
  };

  Navigation.defaultProps = {
    siteTitle: '',
  };

  return (
    <AppBar>
      <Toolbar>
        <h1 className={classes.title}>
          <Link to="/" className={classes.link}>
            {siteTitle}
          </Link>
        </h1>
        <Button color="inherit">
          <Link to="/" className={classes.link}>
            HOME
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/directors/" className={classes.link}>
            LIST OF DIRECTORS
          </Link>
        </Button>
        <SimpleMenu />
      </Toolbar>
    </AppBar>
  );
}
