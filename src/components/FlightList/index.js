import React, { useContext } from 'react';

import { FlightsContext } from '~/util/FlightsContext';
import { checkout } from '~/queries/flights';
import Fare from '~/components/Fare';
import formatDate from '~/util/formatDate';

import { Container, Flight, FlightInfo, FlightItems, FareList } from './styles';

function FlightList({ passengers, flightList }) {
  const { order } = useContext(FlightsContext);

  async function handlePurchase() {
    checkout(order);
  }

  return (
    <Container>
      <ul>
        {flightList &&
          flightList.map((flight) => (
            <Flight key={flight.uid}>
              <FlightInfo>
                <FlightItems>
                  <li>
                    <span>Companhia: </span>
                    {flight.airline.name}
                  </li>
                  <li>
                    <span>Origem: </span>
                    {flight.departure.airport.code}
                  </li>
                  <li>
                    <span>Destino: </span>
                    {flight.arrival.airport.code}
                  </li>
                  <li>
                    <span>Saída: </span>
                    {formatDate(flight.departure.date)}
                  </li>
                  <li>
                    <span>Chegada: </span>
                    {formatDate(flight.arrival.date)}
                  </li>
                  <li>
                    <span>Classe: </span>
                    {flight.cabin}
                  </li>
                </FlightItems>
                <FareList>
                  {flightList &&
                    flight.fareList.map((fare) => (
                      <Fare
                        key={fare.uid}
                        fare={fare}
                        passengers={passengers}
                        flight={flight}
                      />
                    ))}
                </FareList>
              </FlightInfo>
              <button type="button" onClick={() => handlePurchase(flight)}>
                Comprar
              </button>
            </Flight>
          ))}
      </ul>
    </Container>
  );
}

export default FlightList;
