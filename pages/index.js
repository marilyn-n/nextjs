import React from 'react';
import FormOne from '../components/FormOne';
import Typography from '@material-ui/core/Typography';
import FormTwo from '../components/FormTwo'; 
import Grid from '@material-ui/core/Grid';


 const Home = () => {
  return (
    <>
      <Typography 
        variant="h5" 
        align="center"
      >
          Home Dashboard
      </Typography>
      
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        >
        <Grid item>
          <FormOne />
        </Grid>
        <Grid item>
          <FormTwo />
        </Grid>
      </Grid>
    </>
  )
}

export default Home;
