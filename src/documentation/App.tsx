import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './Container';

export const App = () => {
  return <Container>Test</Container>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
