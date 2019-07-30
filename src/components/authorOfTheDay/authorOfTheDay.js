import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  authOfTheDayDataWrapper: {
    display: 'grid',
    gridTemplateColumns: '60% auto 30%',
    gridTemplateAreas: '"title title title" "name name img" "date date img" "vita vita img" "btn btn img"',
    border: '1px solid #008080',
    justifyItems: 'center',
    alignItems: 'center',
  },
  title: {
    gridArea: 'title',
    background: '#008080',
    width: '100%',
    textAlign: 'center',
  },
  name: {
    gridArea: 'name',
  },
  date: {
    gridArea: 'date',
  },
  vita: {
    gridArea: 'vita',
  },
  img: {
    gridArea: 'img',
    margin: '0',
    maxHeight: ' 250px',
  },
  btn: {
    gridArea: 'btn',
    background: '#008080',
    justifySelf: 'start',
    borderRadius: '0',
    alignSelf: 'end',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

export default function AuthorOfTheDay() {
  const randomAuth = Math.floor(Math.random() * 5);
  const data = useStaticQuery(graphql`
    query {
     allJavascriptFrontmatter(filter: { frontmatter: { lang: { eq: "ru" } } }) {
      edges {
        node {
          frontmatter {
            path     
            name
            date
            vita
            img
          }
        }
      }
    }
      }
  `);
  const authOfTheDayData = data.allJavascriptFrontmatter.edges[randomAuth].node.frontmatter;
  const authOfTheDayImage = require(`../../images/directors/${authOfTheDayData.img}`);
  const classes = useStyles();
  return (
    <Container fixed style={{ paddingTop: '60px' }}>
      <div className={classes.authOfTheDayDataWrapper}>
        <h3 className={classes.title}>Author Of The Day</h3>
        <h4 className={classes.name}>{authOfTheDayData.name}</h4>
        <p className={classes.date}>{authOfTheDayData.date}</p>
        <p className={classes.vita}>{authOfTheDayData.vita}</p>
        <img className={classes.img} src={authOfTheDayImage} alt="auth of the day" />
        <Button className={classes.btn} variant="contained">
          <Link className={classes.link} to={authOfTheDayData.path}>Learn More</Link>
        </Button>
      </div>
    </Container>
  );
}
