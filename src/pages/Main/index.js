/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { MdSearch } from 'react-icons/md';

import {
  Container,
  RadioInputContainer,
  DateInputContainer,
  InputContainer,
  SearchButton,
} from './styles';

function Main() {
  return (
    <Container>
      <form>
        <RadioInputContainer>
          <input type="radio" id="ida-volta" name="ticket-type" />
          <label htmlFor="ida-volta">Ida e volta</label>

          <input type="radio" id="ida" name="ticket-type" />
          <label htmlFor="ida">Somente ida</label>
        </RadioInputContainer>

        <DateInputContainer>
          <InputContainer>
            <label htmlFor="origem">Saio de</label>
            <input
              type="text"
              id="origem"
              name="origem"
              placeholder="Digite uma cidade"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="destino">Vou para</label>
            <input
              type="text"
              id="destino"
              name="destino"
              placeholder="Digite uma cidade"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="destino">Saída</label>
            <input
              type="text"
              id="partida"
              name="partida"
              placeholder="04/03/95"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="retorno">Retorno</label>
            <input
              type="text"
              id="retorno"
              name="retorno"
              placeholder="10/03/95"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="retorno">Pessoas</label>
            <input
              type="number"
              id="pessoas"
              name="pessoas"
              placeholder="1 Pessoa"
            />
          </InputContainer>

          <SearchButton type="button">
            <MdSearch size={24} color="#fff" />
            Buscar
          </SearchButton>
        </DateInputContainer>
      </form>
    </Container>
  );
}

export default Main;
