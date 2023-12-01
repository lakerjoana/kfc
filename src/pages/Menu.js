// Menu.js
// Menu.js
import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box,Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import MenuList from '../components/data/data'; // Adjust the path

const Menu = () => {
  return (
    <Layout>
      <h1 style={{ marginTop: '160px' }}>Menu Page</h1>
      <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:'center'}}>
       { MenuList.map(menu =>(
        <Card sx={{ maxwidth:'450px',display:'flex', m:2}}>
          <CardActionArea>
            <CardMedia sx={{minHeight:'400px'}} 
            component={'img'} 
            src={menu.image}
             alt={menu.name}>

            </CardMedia>
            <CardContent>
              <Typography variant='h5' gutterBottom={'div'}>
                {menu.name}
              </Typography>
              <Typography variant='h5' gutterBottom={'div'}>
                {menu.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
       )

       )

       }
    
      </Box>
      <Link to="/cart">
        <ShoppingCartIcon style={{ fontSize: 30, color: 'black', cursor: 'pointer' }} />
      </Link>
    </Layout>
  );
};

export default Menu;
