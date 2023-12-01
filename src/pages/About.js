import React from 'react';
import Layout from '../components/Layout/Layout';
import {Box, Typography,} from '@mui/material';


const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:"center",
          "& h5":{
            fontWeight:"bold",
            my:2,
            fontsize:"4 rem",
           },
           

           
        }}>
          <Typography >
            <h1 style={{marginTop: '160px'} }>KFC RESTAURANT </h1>
          </Typography>
          <p>
            WELCOME TO OUR KFC RESTAURANT
            WE LOVE TO SERVE AND CARE ABOUT OUR CUSTOMER'S MAXIMUM ENJOYMENT AND EXCELLENT DINING EXPERIENCE
          </p>
        </Box>
    </Layout>
  );
};

export default About; 