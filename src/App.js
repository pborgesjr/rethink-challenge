import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { SearchFlightsContext } from '~/util/SearchFlightsContext';
import history from '~/services/history';
import Routes from '~/routes';
import GlobalStyle from '~/styles/GlobalStyles';

function App() {
  const [flightList, setFlightList] = useState(null);
  const [order, setOrder] = useState(null);

  return (
    <Router history={history}>
      <SearchFlightsContext.Provider
        value={{
          flightList,
          setFlightList,
          order,
          setOrder,
        }}
      >
        <Routes />
      </SearchFlightsContext.Provider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} style={{ fontSize: '2rem' }} />
    </Router>
  );
}

export default App;
