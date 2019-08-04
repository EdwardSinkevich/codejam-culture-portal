import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  authOfTheDayContainer: {
    padding: '60px 0',
  },
  authOfTheDayDataWrapper: {
    border: '1px solid #008080',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    lineHeight: '1.7',
    background: '#008080',
    width: '100%',
    textAlign: 'center',
  },
  name: {
    marginBottom: '0.45rem',
  },
  authOfTheDayContent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    textAlign: 'center',
    flexBasis: '65%',
    '@media (max-width: 1280px)': {
      flexBasis: '100%',
    },
  },
  img: {
    height: '220px',
    borderRadius: '7px',
    margin: '0 0 0 20px',
    '@media (max-width: 1280px)': {
      margin: '20px 0 0 0',
    },
  },
  btn: {
    padding: '0',
    marginTop: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    background: '#008080',
    lineHeight: '33px',
    display: 'inline-block',
    width: '100%',
  },
}));

export default function AuthorOfTheDay({ data }) {
  const randomAuth = Math.floor(Math.random() * 5);
  const authOfTheDayData = data.allJavascriptFrontmatter.edges[randomAuth].node.frontmatter;
  const locale = JSON.parse(data.locales.edges[0].node.data);
  const authOfTheDayImage = require(`../../images/directors/${authOfTheDayData.img}`);
  const classes = useStyles();

  return (
    <Container fixed className={classes.authOfTheDayContainer}>
      <div className={classes.authOfTheDayDataWrapper}>
        <h3 className={classes.title}>{locale.authorOfTheDay}</h3>
        <div className={classes.authOfTheDayContent}>
          <div className={classes.description}>
            <h4 className={classes.name}>{authOfTheDayData.name}</h4>
            <p>{authOfTheDayData.date}</p>
            <p>{authOfTheDayData.vita}</p>
          </div>
          <img className={classes.img} src={authOfTheDayImage} alt="auth of the day" />
        </div>
        <Button className={classes.btn}>
          <Link className={classes.link} to={`${window.localStorage.lng}${authOfTheDayData.path}`}>
            {locale.learnMore}
          </Link>
        </Button>
      </div>
    </Container>
  );
}

AuthorOfTheDay.propTypes = {
  data: PropTypes.object,
};

AuthorOfTheDay.defaultProps = {
  data: {},
};
