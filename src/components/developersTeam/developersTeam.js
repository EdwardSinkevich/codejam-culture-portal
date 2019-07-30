import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeveloperCard from '../developerCard/developerCard';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
}));

export default function DevelopersTeam() {
  const [spacing, setSpacing] = React.useState(2);
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
    const tempDevelopersState = [];
    developersState.map(({ gitHubName, gitHubImage, gitHubLink }, idx) =>
      fetch(`https://api.github.com/users/${gitHubName}`)
        .then(res => res.json())
        .then(({ avatar_url, html_url }) => {
          tempDevelopersState.push({...developersState[idx], gitHubImage: avatar_url, gitHubLink: html_url})
         })
        )
        setDevelopersState(tempDevelopersState);
    }, [])

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {developersState.map(developer => (
            <Grid key={developer} item>
              <DeveloperCard image={developer.gitHubImage} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
