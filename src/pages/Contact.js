import React from 'react';
import Layout from '../components/Layout/Layout';
import{Box, Paper,Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my:10, ml:10,"& h4":{fontWeight:'bold',mb:2}}}>
        <Typography>
      <h1 style={{marginTop: '160px'}} align="center"> Contact KFC RESTAURANT </h1>
      
      </Typography>
      <p align="center">
        If you have any questions or need to contact us for any reason, please use the following information.
         We will be happy to assist you in any way possible on the lines below
         
      </p>
        
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell align ="center"> Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>
                  Phone Number : +256 895467857 
                <TableCell align="center">
                  Toll Free line: 08857643257
                  </TableCell>
                
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </Layout>
  );
};

export default Contact;
