import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from '~/services/history';
import Routes from '~/routes';
import GlobalStyle from '~/styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} style={{ fontSize: '2rem' }} />
    </Router>
  );
}

export default App;
