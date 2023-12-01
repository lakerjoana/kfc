import React from 'react';
import { Box , Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'black',color:'crimson',p:3}}>
       <Box SX={{my:3, "& svg":{
           fontSize:"60px",
           cursor:"pointer",
           mr:2,
         },
         "& svg:hover":{
            color:'goldenrod',
        transform:'translateX(5px)',
            transition:'all 400ms',
         }
       }}
       >
        <InstagramIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        <FacebookOutlinedIcon/>
       </Box>
        <Typography 
        variant="h5"
         sx={{"@media (max-width:600px)":{
            fontSize:"1 rem" ,
        },
        }}>All Rights Reserved &copy; LJDOVE YT</Typography>
            </Box></>
  );
};

export default Footer;
 