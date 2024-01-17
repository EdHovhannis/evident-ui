import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './views/about/About';
import { DocViews } from './views/doc-views';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/doc-views" element={<DocViews />} />
    </Routes>
  );
};
