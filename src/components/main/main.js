import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import HistoricalPortalDescription from '../historicalPortalDescription/historicalPortalDesc';
import AuthorOfTheDay from '../authorOfTheDay/authorOfTheDay';
import DevelopersTeam from '../developersTeam/developersTeam';

const useStyles = makeStyles(() => ({
  mainSection: {
    background: '#E6E6FA',
  },
  developersTeamWrapper: {
    overflow: 'hidden',
  }
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
      <section className={classes.developersTeamWrapper}>
        <DevelopersTeam />
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
