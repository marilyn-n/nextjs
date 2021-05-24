import React from 'react';
import FormOne from '../components/FormOne';
import Typography from '@material-ui/core/Typography';
import FormTwo from '../components/FormTwo'; 
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

 const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Typography 
        variant="h5" 
        align="center"
      >
          Home Dashboard
      </Typography>
      
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        >
        <Grid item xs={12} md={6}>
          <FormOne />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTwo />
        </Grid>
      </Grid>
    </>
  )
}

export default Home;
