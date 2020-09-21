import React, { useEffect, useState, useMemo } from 'react';

import formatDate from '~/util/formatDate';
import { getMyFlights } from '~/queries/flights';
import {
  Container,
  Profile,
  Info,
  Wrapper,
  Flight,
  Item,
  DescriptionSpan,
  ValueSpan,
} from './styles';

function MyFlights() {
  const [myFlights, setMyFlights] = useState(null);

  useEffect(() => {
    async function queryMyFlights() {
      setMyFlights(await getMyFlights());
    }

    queryMyFlights();
  }, []);

  const memoizedUserInfo = useMemo(() => {
    const { user } = JSON.parse(localStorage.getItem('user'));
    return user;
  }, []);

  return (
    <Container>
      <Profile>
        <img src={memoizedUserInfo.avatar} alt="profile-pic" />
        <Info>
          <span>{memoizedUserInfo.firstName}</span>
          <span>{memoizedUserInfo.lastName}</span>
          <span>{memoizedUserInfo.userName}</span>
          <span>{memoizedUserInfo.email}</span>
        </Info>
      </Profile>
      <Wrapper>
        {myFlights &&
          myFlights.map((flight) => (
            <Flight key={flight.code}>
              <Item>
                <DescriptionSpan>Companhia </DescriptionSpan>
                <ValueSpan>{flight.flight1.airline.name}</ValueSpan>
              </Item>

              <Item>
                <DescriptionSpan>Código Ratreador </DescriptionSpan>
                <ValueSpan>{flight.code}</ValueSpan>
              </Item>

              <Item>
                <DescriptionSpan>Origem </DescriptionSpan>
                <ValueSpan>
                  {`${flight.flight1.departure.airport.city} - ${flight.flight1.departure.airport.code}`}
                </ValueSpan>
              </Item>

              <Item>
                <DescriptionSpan>Destino </DescriptionSpan>
                <ValueSpan>{`${flight.flight1.arrival.airport.city} - ${flight.flight1.arrival.airport.code}`}</ValueSpan>
              </Item>

              <Item>
                <DescriptionSpan>Saída </DescriptionSpan>
                <ValueSpan>
                  {formatDate(flight.flight1.departure.date)}
                </ValueSpan>
              </Item>

              <Item>
                <DescriptionSpan>Chegada </DescriptionSpan>
                <ValueSpan>{formatDate(flight.flight1.arrival.date)}</ValueSpan>
              </Item>

              <Item>
                <DescriptionSpan>Classe </DescriptionSpan>
                <ValueSpan>{flight.flight1.cabin}</ValueSpan>
              </Item>
            </Flight>
          ))}
      </Wrapper>
    </Container>
  );
}

export default MyFlights;
