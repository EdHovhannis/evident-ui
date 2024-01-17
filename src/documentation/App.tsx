import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './styled/Container';
import { DocNavBar } from './doc-components';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';

export const App = () => {
  return (
    <Container>
      <DocNavBar />
      <Router />
    </Container>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
