import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from '~/routes';
import GlobalStyle from '~/styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} style={{ fontSize: '2rem' }} />
    </BrowserRouter>
  );
}

export default App;
