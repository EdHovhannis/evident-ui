import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/Navigation';
import { NavContainer } from './style/NavContainer';

export const TopBar = () => {
  const navigate = useNavigate();
  const navItems = [
    { title: 'About', onClick: () => navigate('/') },
    { title: 'Docs', onClick: () => navigate('/docs') },
  ];

  return <NavBar navItems={navItems} gridArea="topbar" />;
};
