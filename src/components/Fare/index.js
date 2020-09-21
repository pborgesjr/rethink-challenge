import React, { useState, useContext } from 'react';

import { FlightsContext } from '~/util/FlightsContext';
import { Container } from './styles';

function Fare({ fare, passengers, flight }) {
  const { order, setOrder } = useContext(FlightsContext);
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(!isSelected);
    setOrder({
      ...order,
      flight1: flight.uid,
      passengers,
      fare1: fare.uid,
      total: {
        miles: fare.miles,
        money: fare.money,
      },
    });
  }

  return (
    <Container isSelected={isSelected} onClick={handleClick}>
      <li>R$ {fare.money}</li>
      <li>Milhas: {fare.miles}</li>
    </Container>
  );
}

export default Fare;
