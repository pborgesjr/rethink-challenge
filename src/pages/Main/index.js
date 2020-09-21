/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import {
  Container,
  RadioInputContainer,
  DateInputContainer,
  InputContainer,
  SearchButton,
} from './styles';

function Main() {
  const [formData, setFormData] = useState({
    options: '1',
    origem: 'São Paulo - Congonhas',
    destino: 'Rio de Janeiro - Galeão',
    partida: '20/09/2020',
    retorno: '29/09/2020',
    pessoas: 2,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
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
          <InputContainer>
            <label htmlFor="origem">Saio de</label>
            <input
              type="text"
              id="origem"
              name="origem"
              value={formData.origem}
              onChange={handleInputChange}
              placeholder="Digite uma cidade"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="destino">Vou para</label>
            <input
              type="text"
              id="destino"
              name="destino"
              value={formData.destino}
              onChange={handleInputChange}
              placeholder="Digite uma cidade"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="partida">Saída</label>
            <input
              type="text"
              id="partida"
              name="partida"
              value={formData.partida}
              onChange={handleInputChange}
              placeholder="04/03/95"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="retorno">Retorno</label>
            <input
              type="text"
              id="retorno"
              name="retorno"
              value={formData.retorno}
              onChange={handleInputChange}
              placeholder="10/03/95"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="pessoas">Pessoas</label>
            <input
              type="number"
              id="pessoas"
              name="pessoas"
              value={formData.pessoas}
              onChange={handleInputChange}
              placeholder="1 Pessoa"
            />
          </InputContainer>

          <SearchButton type="submit">
            <MdSearch size={24} color="#fff" />
            Buscar
          </SearchButton>
        </DateInputContainer>
      </form>
    </Container>
  );
}

export default Main;
