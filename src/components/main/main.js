import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import HistoricalPortalDescription from '../historicalPortalDescription/historicalPortalDesc';
import AuthorOfTheDay from '../authorOfTheDay/authorOfTheDay';

const useStyles = makeStyles(() => ({
  mainSection: {
    background: '#E6E6FA',
  },
}));

export default function Main({ data }) {
  const classes = useStyles();
  return (
    <>
      <section className={classes.mainSection}>
        <HistoricalPortalDescription />
      </section>
      <section className={classes.mainSection}>
        <AuthorOfTheDay data={data} />
      </section>
    </>
  );
}

Main.propTypes = {
  data: PropTypes.object,
};

Main.defaultProps = {
  data: {},
};
