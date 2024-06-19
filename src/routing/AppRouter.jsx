import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
      <header className='header-nav'>
        <nav>
          <div className="logo">
            <h2>LOGO</h2>
          </div>
          <ul>
            <li>
            <NavLink to='/'>Inicio</NavLink>
            </li>
            <li>
            <NavLink to='/articulos'>Artículos</NavLink>
            </li>
            <li>
            <NavLink to='/acerca-de'>Acerca de</NavLink>
            </li>
            <li>
            <NavLink to='/contacto'>Contacto</NavLink>
            </li>
            <li>
            <NavLink to='/login'>Identifícate</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <section className='content'>
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
      </section>
    </Router>
  );
};
