// src/Root.jsx
import React, { useEffect, useState } from 'react';
import App from './App';
import './global.css';

const Root = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const miNavbar = document.getElementById('miNavbar');
    if (miNavbar) {
      const height = miNavbar.offsetHeight;
      console.log(height,'px')
      setNavbarHeight(height);
    }
  }, []);

  return (
    <>
      <style>
        {`:root {
          --navbar-height: ${navbarHeight}px;
        }`}
      </style>
      <App />
    </>
  );
};

export default Root;
