import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { NavBar } from '@/components/Navigation';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { RoutersContainer } from './content/routes';

export const App = () => {
  const navigate = useNavigate();
  const navItems = [
    { title: 'About', onClick: () => navigate('/') },
    { title: 'Docs', onClick: () => navigate('/docs') },
  ];
  return (
    <>
      <NavBar navItems={navItems} />
      <RoutersContainer></RoutersContainer>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
