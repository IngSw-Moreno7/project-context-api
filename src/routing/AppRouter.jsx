import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { Articles } from '../components/Articles';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Login } from '../components/Login';
import { ErrorPage } from '../components/ErrorPage';

export const AppRouter = () => {
  return (
    <Router>
      {/* Navigation menu */}
      {/* Configure the routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/articulos' element={<Articles />} />
        <Route path='/acerca-de' element={<About />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />   
      </Routes>
    </Router>
  );
};
