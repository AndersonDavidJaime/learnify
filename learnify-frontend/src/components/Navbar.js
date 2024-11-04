// learnify-frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/courses">Cursos</Link>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/register">Registrarse</Link>
    </nav>
  );
};

export default Navbar;
