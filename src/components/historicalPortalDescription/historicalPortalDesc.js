import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import bgImage from '../../images/film-tapes.jpg';


const useStyles = makeStyles(() => ({
  bgImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    color: '#fff',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundImage: `url(${bgImage})`,
  },
  titleContainer: {
    position: 'relative',
  },
  titleWrapper: {
    minHeight: '400px',
    display: 'flex;',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    zIndex: '10',
    fontSize: '52px',
    lineHeight: '1.2',
    textShadow: '0 0 6.5px rgba(4,5,16,.592)',
    color: '#fefefe',
  },
  historyContent: {
    paddingTop: '40px',
  },
  historyParagraph: {
    textIndent: '1.5em',
    textAlign: 'justify',
    'line-height': '6vh',
  }
}));

const HistoricalPortalDescription = ({ data }) => {
  const classes = useStyles();
  const locale = JSON.parse(data.locales.edges[0].node.data);
  return (
    <>
      <div className={classes.titleContainer}>
        <div className={classes.bgImage} />
        <Container fixed>
          <div className={classes.titleWrapper}>
            <h2 className={classes.title}>{locale.histotyTitle}</h2>
          </div>
        </Container>
      </div>
      <Container fixed>
        <div className={classes.historyContent}>
          <p className={classes.historyParagraph}>
            {locale.historyContent}
          </p>
        </div>
      </Container>
    </>
  );
}

HistoricalPortalDescription.propTypes = {
  data: PropTypes.object,
};

HistoricalPortalDescription.defaultProps = {
  data: {},
};

export default HistoricalPortalDescription;
