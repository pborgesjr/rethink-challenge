/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, InputContainer } from './styles';
import Suggestions from '~/components/Suggestions';

function Input(props) {
  const { legend } = props;
  return (
    <Wrapper>
      <InputContainer>
        <span>{legend}</span>
        <input {...props} />
        <Suggestions />
      </InputContainer>
    </Wrapper>
  );
}

export default Input;

/** Prop Types */
Input.propTypes = {
  legend: PropTypes.string.isRequired,
};
