import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeveloperCard from '../developerCard/developerCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(10, 0, 10, 0),
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 250,
  },
}));

export default function DevelopersTeam({ data }) {
  const [spacing] = useState(2);
  const classes = useStyles();
  const [developersState, setDevelopersState] = useState([
    {
      gitHubName: 'dobrynanikitich', gitHubImage: '', gitHubLink: '', contribution: ['create JSON files with text, dates, pictures', 'create team section', 'add request to github API', 'create git auth file for keys', 'create footer section'],
    },
    {
      gitHubName: 'EdwardSinkevich', gitHubImage: '', gitHubLink: '', contribution: ['basic layout', 'create header with navigation and language selector', 'implement responsive design', 'create home page with desription', 'create film director of the day section', 'working on language section'],
    },
    {
      gitHubName: 'IrynaZhadzinets', gitHubImage: '', gitHubLink: '', contribution: ['basic layout', 'create film directors page', 'create timeline feature', 'create overlay video feature', 'create photo gallery section'],
    },
    {
      gitHubName: 'scepanenka', gitHubImage: '', gitHubLink: '', contribution: ['basic layout', 'create page with authors list', 'create search bar', 'create search list result', 'create search accordin to selected language'],
    },
    {
      gitHubName: 'vadikmash', gitHubImage: '', gitHubLink: '', contribution: ['create site with gatsby', 'install i18next', 'install material UI', 'set up ESLint', 'create README.md with info about project and worklogs', 'working on language section'],
    },
  ]);


  useEffect(() => {
    async function getUsers(names) {
      const jobs = [];

      names.forEach((name) => {
        const job = fetch(`https://api.github.com/users/${name.gitHubName}?client_id=52489756c9417a4f520d&client_secret=a7d3531dbea35461e57cf0fd810c52a9acf2e630`)
          .then((successResponse) => {
            if (successResponse.status !== 200) {
              return null;
            }
            return successResponse.json().then((json) => {
              const newDev = { ...name, gitHubImage: json.avatar_url, gitHubLink: json.html_url };
              return newDev;
            });
          });
        jobs.push(job);
      });

      const results = await Promise.all(jobs);
      return results;
    }

    getUsers([...developersState]).then(data => setDevelopersState(data));
  }, []);

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {developersState.map(({
            gitHubName, gitHubImage, gitHubLink, contribution,
          }) => (
            <Grid key={gitHubName} item>
              <DeveloperCard
                image={gitHubImage}
                link={gitHubLink}
                gitname={gitHubName}
                contribution={contribution}
                data={data}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

DevelopersTeam.propTypes = {
  data: PropTypes.object,
};

DevelopersTeam.defaultProps = {
  data: {},
};
