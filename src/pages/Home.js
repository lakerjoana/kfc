import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/BACKGROUND.jpeg'; // Adjust the path
import '../styles/home.css'; // Import the CSS file

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Layout>
      <div className='Home' style={containerStyle}>
        <div className='HomeContainer'>
          <h1>KFC RESTAURANT</h1>
          <p>HOTTEST MEALS AROUND TOWN </p>
          <Link to='/menu'>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
