import React from 'react';
import { Docs } from './Docs';
import { Main } from './Main';
import { Route, Routes } from 'react-router-dom';

export const RoutersContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/docs" element={<Docs />}></Route>
    </Routes>
  );
};
