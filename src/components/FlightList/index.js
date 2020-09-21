import React, { useContext } from 'react';

import { SearchFlightsContext } from '~/util/SearchFlightsContext';
import { checkout } from '~/queries/flights';

import Fare from '~/components/Fare';
import { Container, Flight, FlightInfo, FlightItems, FareList } from './styles';

function FlightList({ passengers, flightList }) {
  const { order } = useContext(SearchFlightsContext);

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
                  <li>{flight.airline.name}</li>
                  <li>{flight.departure.airport.code}</li>
                  <li>{flight.arrival.airport.code}</li>
                  <li>{flight.departure.date}</li>
                  <li>{flight.arrival.date}</li>
                  <li>{flight.cabin}</li>
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
