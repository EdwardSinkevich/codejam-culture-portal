import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import rollingScopesLogo from '../../images/rolling-scopes-logo.png';
import gatsbyLogo from '../../images/gatsby-logo.png';
import i18nextLogo from '../../images/i18next.png';
import netlifyLogo from '../../images/netlify-logo.png';
import reactLogo from '../../images/reactLogo.png';
import materialUI from '../../images/materialUI.png';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#5F9EA0',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  technologyWrap: {
    display: 'flex',
    flexBasis: '60%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  technologyTitle: {
    fontSize: '1.5rem',
    color: 'white',
  },
  technologyLogosContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  rssLogoWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: '70px',
    height: '70px',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.footerContainer}>
        <div className={classes.technologyWrap}>
          <Typography className={classes.technologyTitle}>
            Built with:
          </Typography>
          <div className={classes.technologyLogosContainer}>
            <img alt="gatsby-logo" src={gatsbyLogo} className={classes.logo} />
            <img alt="i18next-logo" src={i18nextLogo} className={classes.logo} />
            <img alt="netlify-logo" src={netlifyLogo} className={classes.logo} />
            <img alt="i18next-logo" src={reactLogo} className={classes.logo} />
            <img alt="i18next-logo" src={materialUI} width="90" height="70" />
          </div>
        </div>
        <div className={classes.rssLogoWrap}>
          <img alt="rolling-scopes-logo" src={rollingScopesLogo} width="100" />
          <Typography>
            ©
            {' '}
            {new Date().getFullYear()}
            , Developed by Group 29
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
