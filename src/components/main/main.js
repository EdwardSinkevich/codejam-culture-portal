import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HistoricalPortalDescription from '../historicalPortalDescription/historicalPortalDesc';
import AuthorOfTheDay from '../authorOfTheDay/authorOfTheDay';

const useStyles = makeStyles(() => ({
  mainSection: {
    background: '#E6E6FA',
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <>
      <section className={classes.mainSection}>
        <HistoricalPortalDescription />
      </section>
      <section className={classes.mainSection}>
        <AuthorOfTheDay />
      </section>
    </>
  );
}
