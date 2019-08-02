import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import rollingScopesLogo from '../../images/rolling-scopes-logo.png';
import gatsbyLogo from '../../images/gatsby-logo.png';

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
  footer: {
    width: '100%',
    maxWidth: '1800px',
    minHeight: '260px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  developerWrapper: {
    minWidth: '330px',
    display: 'flex',
    alignItems: 'center',
  }
}));

export default function Footer() {
  const [spacing] = useState(2);
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2}>
        <Grid item xs container className={classes.developerWrapper} direction="column" spacing={2} style={{ backgroundColor: '#008080' }}>
          <Grid item >
            <Typography style={{ fontSize: "26px" }}>
              Developed by Group 29
            </Typography>
          </Grid>
          <Grid item xs style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
            <img alt="rolling-scopes-logo" className={classes.shadow} src={ rollingScopesLogo } width='150' height='100'/>
            <img alt="gatsby-logo" style={{ filter: 'drop-shadow(2px 4px 6px white)' }} src={ gatsbyLogo } width='150' height='100' />
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Grid item xs container className={classes.developerWrapper} style={{ background: "#E6E6FA", color: "black" }} direction="column" spacing={2}>
          <Grid item xs>
            <ul style={{ width: "100%", padding: "5px", margin: "0" }}>
              <li style={{ margin: "0", listStyle: "none", marginBottom: "5px", fontSize: "15px" }}><span style={{color: "gray"}}><a href='https://api.github.com/users/dobrynanikitich'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a></span> Mikita Nemau, <span style={{color: "white"}}>discordID:</span> @dobrynanikitich
              </li>
              <li style={{ margin: "0", listStyle: "none", marginBottom: "5px", fontSize: "15px" }}><span style={{color: "gray"}}><a href='https://api.github.com/users/dobrynanikitich'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a></span> Mikita Nemau, <span style={{color: "gray"}}>discordID:</span> @dobrynanikitich
              </li>
              <li style={{ margin: "0", listStyle: "none", marginBottom: "5px", fontSize: "15px" }}><span style={{color: "gray"}}><a href='https://api.github.com/users/dobrynanikitich'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a></span> Mikita Nemau, <span style={{color: "gray"}}>discordID:</span> @dobrynanikitich
              </li>
              <li style={{ margin: "0", listStyle: "none", marginBottom: "5px", fontSize: "15px" }}><span style={{color: "gray"}}><a href='https://api.github.com/users/dobrynanikitich'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a></span> Mikita Nemau, <span style={{color: "gray"}}>discordID:</span> @dobrynanikitich
              </li>
              <li style={{ margin: "0", listStyle: "none", marginBottom: "5px", fontSize: "15px" }}><span style={{color: "gray"}}><a href='https://api.github.com/users/dobrynanikitich'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a></span> Mikita Nemau, <span style={{color: "gray"}}>discordID:</span> @dobrynanikitich
              </li>
              <li style={{ margin: "0", listStyle: "none", marginBottom: "5px", fontSize: "15px" }}><span style={{color: "gray"}}><a href='https://api.github.com/users/dobrynanikitich'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg></a></span> Mikita Nemau, <span style={{color: "gray"}}>discordID:</span> @dobrynanikitich
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography>
                ©
                {' '}
                {new Date().getFullYear()}
                , Built with
                {' '}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </Typography>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

{/* <Box className={classes.footer}>
©
{' '}
{new Date().getFullYear()}
, Built with
{' '}
<a href="https://www.gatsbyjs.org">Gatsby</a>
</Box> */}
