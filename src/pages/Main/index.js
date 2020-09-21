/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { MdSearch } from 'react-icons/md';

import { FlightsContext } from '~/util/FlightsContext';
import Input from '~/components/Input';
import FlightList from '~/components/FlightList';
import { searchFlights } from '~/queries/flights';
import {
  Container,
  RadioInputContainer,
  DateInputContainer,
  SearchButton,
} from './styles';

function Main() {
  const { flightList, setFlightList } = useContext(FlightsContext);
  const [formData, setFormData] = useState({
    options: '2',
    origin: 'GIG',
    destination: 'GRU',
    departure1: '2020-09-28',
    departure2: '',
    passengers: 1,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setFlightList(await searchFlights(formData));
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <RadioInputContainer>
          <input
            type="radio"
            id="option1"
            name="options"
            value="1"
            onChange={handleInputChange}
            checked={formData.options === '1' && true}
          />
          <label htmlFor="ida-volta">Ida e volta</label>

          <input
            type="radio"
            id="option2"
            name="options"
            onChange={handleInputChange}
            value="2"
            checked={formData.options === '2' && true}
          />
          <label htmlFor="ida">Somente ida</label>
        </RadioInputContainer>

        <DateInputContainer>
          <Input
            legend="Saio de"
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleInputChange}
            placeholder="Digite uma cidade"
          />

          <Input
            legend="Vou para"
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="Digite uma cidade"
          />

          <Input
            legend="Ida"
            type="text"
            id="departure1"
            name="departure1"
            value={formData.departure1}
            onChange={handleInputChange}
            placeholder="2020-09-28"
          />
          {formData.options === '1' && (
            <Input
              legend="Retorno"
              type="text"
              id="departure2"
              name="departure2"
              value={formData.retdeparture2orno}
              onChange={handleInputChange}
              placeholder="2020-09-28"
            />
          )}

          <Input
            legend="Pessoas"
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
            placeholder="1 Pessoa"
          />

          <SearchButton type="submit">
            <MdSearch size={24} color="#fff" />
            Buscar
          </SearchButton>
        </DateInputContainer>
      </form>

      <FlightList passengers={formData.passengers} flightList={flightList} />
    </Container>
  );
}

export default Main;
