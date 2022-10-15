import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Link from './Link/Link';
import Common from './Common/Common';
import MoviesTime from './MoviesTime/MoviesTime';
import Login from './Login/Login';

function App() {
  return (

    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="" element={<MoviesTime />} />
          <Route path="/Common" element={<Common />} />

          <Route path="/Link" element={<Link />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
