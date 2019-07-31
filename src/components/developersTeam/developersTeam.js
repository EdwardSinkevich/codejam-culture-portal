import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeveloperCard from '../developerCard/developerCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(10, 0, 0, 0),
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 250,
  },
}));

export default function DevelopersTeam() {
  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();
  const [developersState, setDevelopersState] = useState([
    { gitHubName: 'dobrynanikitich', gitHubImage: '', gitHubLink: ''},
    { gitHubName: 'EdwardSinkevich', gitHubImage: '', gitHubLink: ''},
    { gitHubName: 'IrynaZhadzinets', gitHubImage: '', gitHubLink: ''},
    { gitHubName: 'scepanenka', gitHubImage: '', gitHubLink: ''},
    { gitHubName: 'vadikmash', gitHubImage: '', gitHubLink: ''},
    { gitHubName: 'dmakarevich', gitHubImage: '', gitHubLink: ''}
  ]);


  useEffect(() => {
    let tempDevelopersState;
    async function getUsers(names) {
      let jobs = [];

      for(let name of names) {
        let job = fetch(`https://api.github.com/users/${name.gitHubName}?client_id=52489756c9417a4f520d&client_secret=a7d3531dbea35461e57cf0fd810c52a9acf2e630`).then(
          successResponse => {
            if (successResponse.status != 200) {
              return null;
            } else {
              return successResponse.json().then(json => {
                const newDev = {...name, gitHubImage: json.avatar_url, gitHubLink: json.html_url};
                return newDev;
              });
            }
          },
          failResponse => {
            return null;
          }
        );
        jobs.push(job);
      }

      const results = await Promise.all(jobs);
      return results;
    }

     getUsers([...developersState]).then(data => {
      setDevelopersState(data);
    }
    );

  }, []);

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {developersState.map(developer => {
            return (
              <Grid key={developer.gitHubName} item>
                <DeveloperCard image={developer.gitHubImage} link={developer.gitHubLink} gitname={developer.gitHubName} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}