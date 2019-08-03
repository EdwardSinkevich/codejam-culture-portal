import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Header from '../header/header';
import LanguageSelect from '../languageSelect/languageSelect';


const useStyles = makeStyles(theme => ({
  list: {
    color: 'inherit',
    padding: '0',
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5',
      },
    },
  },
  navLink: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '20px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'rgba(200, 200, 200, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
    },
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  navLinkActive: {
    color: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <Header
      siteTitle={props.siteTitle}
      rightLinks={(
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Link
              to="/"
              className={classes.navLink}
              color="transparent"
            >
              HOME
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              to="/authors_list/"
              className={classes.navLink}
              color="transparent"
            >
              LIST OF DIRECTORS
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <LanguageSelect />
          </ListItem>
        </List>
      )}
    />
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

export default Navbar;
