import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import bgImage from '../images/film-tapes.jpg';
import HistoricalPortalDescription from './historicalPortalDesc';
// import AuthorOfTheDay from './authorOfTheDay';

const useStyles = makeStyles(() => ({
  mainSection: {
    background: '#E6E6FA',
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <section className={classes.mainSection}>
        <HistoricalPortalDescription />
      </section>
      <section className={classes.mainSection}>
        {/* <AuthorOfTheDay /> */}
      </section>
    </>
  );
}

export default Main;
