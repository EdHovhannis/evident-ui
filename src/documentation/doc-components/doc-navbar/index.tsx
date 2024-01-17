import React from 'react';
import { NavBar } from '../../../components/Navigation';
import { useNavigate } from 'react-router-dom';

export const DocNavBar = () => {
  const navigate = useNavigate();
  const NavItems = [
    { title: 'About Evident-UI', onClick: () => navigate('/') },
    { title: 'Documentation', onClick: () => navigate('/doc-views') },
  ];
  return <NavBar navItems={NavItems} />;
};
