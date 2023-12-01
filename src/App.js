import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Pagenotfound from './pages/Pagenotfound';
import '../src/App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/About"element={<About/>} />
        <Route path="/Contact"element={<Contact/>} />
        <Route path="/Menu"element={<Menu/>} />
        <Route path="/Pagenotfound"element={<Pagenotfound/>} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
