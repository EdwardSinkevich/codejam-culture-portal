import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import bgImage from '../../images/film-tapes.jpg';

const useStyles = makeStyles(() => ({
  bgImage: {
    zIndex: '-1',
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
    fontSize: '48px',
    lineHeight: '1.2',
    textShadow: '0 0 6.5px rgba(4,5,16,.592)',
    color: '#fefefe',
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <>
      <section>
        <div className={classes.titleContainer}>
          <div className={classes.bgImage} />
          <Container fixed>
            <div className={classes.titleWrapper}>
              <h2 className={classes.title}>История становления белорусского кинематографа</h2>
            </div>
          </Container>
        </div>
        <div className={classes.histiryContainer}>
          <Container fixed>
            <div>Content</div>
          </Container>
        </div>
      </section>
    </>
  );
}
