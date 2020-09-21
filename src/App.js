import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { FlightsContext } from '~/util/FlightsContext';
import history from '~/services/history';
import Routes from '~/routes';
import GlobalStyle from '~/styles/GlobalStyles';

function App() {
  const [flightList, setFlightList] = useState(null);
  const [order, setOrder] = useState(null);

  return (
    <Router history={history}>
      <FlightsContext.Provider
        value={{
          flightList,
          setFlightList,
          order,
          setOrder,
        }}
      >
        <Routes />
      </FlightsContext.Provider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} style={{ fontSize: '2rem' }} />
    </Router>
  );
}

export default App;
