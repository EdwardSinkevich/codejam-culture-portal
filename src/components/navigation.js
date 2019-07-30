import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import Box from '@material-ui/core/Box';
import LanguageSelect from './languageSelect';
import { Language } from 'gatsby-plugin-i18next';
import { translate } from 'react-i18next';


const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  headerContainer: {
    alignSelf: 'center',
  },
}));

const Navigation = ({ siteTitle, data, t, lng }) => {

  const classes = useStyles();

  Navigation.propTypes = {
    siteTitle: PropTypes.string,
  };

  Navigation.defaultProps = {
    siteTitle: '',
  };

  return (
    <AppBar style={{ backgroundColor: '#008080' }}>
      <Box className={classes.headerContainer} width="100%" maxWidth={1800}>
        <Toolbar>
          <h1 className={classes.title}>
            <Link to="/"  className={classes.link}>
              {siteTitle}
            </Link>
          </h1>
          <Button color="inherit">
            <Link to="/" className={classes.link}>
              {t('home')}
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/directors/" className={classes.link}>
            {t('directorsList')}
            </Link>
          </Button>
          <LanguageSelect />
        </Toolbar>
      </Box>
    </AppBar>
  );
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default translate()(Navigation);
