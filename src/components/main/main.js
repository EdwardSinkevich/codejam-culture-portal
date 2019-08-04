import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import HistoricalPortalDescription from '../historicalPortalDescription/historicalPortalDesc';
import AuthorOfTheDay from '../authorOfTheDay/authorOfTheDay';
import DevelopersTeam from '../developersTeam/developersTeam';

const useStyles = makeStyles(() => ({
  mainSection: {
    background: '#F4F7F6',
  },
  developersTeamWrapper: {
    background: '#DEF2F1',
    overflow: 'hidden',
  },
}));

export default function Main({ data }) {
  const classes = useStyles();
  return (
    <>
      <section className={classes.mainSection}>
        <HistoricalPortalDescription data={data} />
      </section>
      <section className={classes.mainSection}>
        <AuthorOfTheDay data={data} />
      </section>
      <section className={classes.developersTeamWrapper}>
        <DevelopersTeam data={data} />
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
