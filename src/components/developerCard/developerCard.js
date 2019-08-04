import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 230,
  },
  content: {
    textAlign: 'center',
  },
  anchor: {
    textDecoration: 'none',
    display: 'block',
  },
  contribution: {
    padding: '10px',
    width: '100%',
    border: 'none',
    backgroundColor: '#008080',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  contributionBlock: {
    height: '420px',
    width: '230px',
  },
});

export default function DeveloperCard({
  image, link, gitname, contribution, data
}) {
  const locale = JSON.parse(data.locales.edges[0].node.data);
  const classes = useStyles();
  const [isContributionOpen, setContributionState] = useState(
    false,
  );

  return (
    <Card className={classes.card}>
      {isContributionOpen ? (
        <CardActionArea className={classes.contributionBlock}>
          <ul>
            {contribution.map(task => (
              <li key={`${gitname}-${task}`}>{task}</li>
            ))}
          </ul>
        </CardActionArea>
      ) : (
        <CardActionArea>
          <a className={classes.anchor} href={link} target="_blank">
            <CardMedia
              component="picture"
              title={gitname}
              height="320"
            >
              <img src={image} alt={gitname}/>
            </CardMedia>
            <CardContent>
              <Typography className={classes.content} gutterBottom variant="h6">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>{gitname}</div>
              </Typography>
            </CardContent>
          </a>
        </CardActionArea>
      )}
      <button
        className={classes.contribution}
        onClick={() => setContributionState(!isContributionOpen)}
        type="submit"
      >
        {isContributionOpen ? locale.hideContribution : locale.showContribution}
      </button>
    </Card>
  );
}

DeveloperCard.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string,
  gitname: PropTypes.string,
  contribution: PropTypes.array,
  data: PropTypes.object,
};

DeveloperCard.defaultProps = {
  image: '',
  link: '',
  gitname: '',
  contribution: [],
  data: {},
};
