import React from 'react';
import Navbar from '../components/Navbar';
import Forms from '../components/Forms';
import Typography from '@material-ui/core/Typography';

 const Home = () => {

  return (
    <>
    <Navbar />
      <Typography 
        variant="h5" 
        align="center"
        style={{ padding: '20px' }}
      >
          Home
      </Typography>
      <Forms />

    </>
  )
}

export default Home;
