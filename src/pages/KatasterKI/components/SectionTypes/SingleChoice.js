import React, { useState } from 'react';
import styled from 'styled-components';

import GhostButton from '~/pages/KatasterKI/components/GhostButton';
import QuestionTitle from '~/pages/KatasterKI/components/QuestionTitle';
import config from '~/pages/KatasterKI/config';
import { media } from '~/styles/utils';

const SingleChoiceWrapper = styled.div`
  button {
    margin-bottom: 24px;
  }

  ${media.m`
    button {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 24px;
    }
  `}
`;

const SingleChoiceInput = ({
  title,
  options,
  currentValue,
  handleChange,
  page,
  next,
}) => {
  const [clickedButton, setClickedButton] = useState(null);
  const onClick = (option) => {
    if (clickedButton) {
      return;
    }
    setClickedButton(option.value);

    setTimeout(() => {
      setClickedButton(null);
      handleChange(option.value);
      next();
    }, config.katasterKI.buttonTimeout);
  };

  return (
    <SingleChoiceWrapper>
      <QuestionTitle>{title}</QuestionTitle>
      {options.map((option) => (
        <GhostButton
          key={`singlechoice__${page}_${option.value}`}
          onClick={() => onClick(option)}
          sx={{ textAlign: 'left' }}
          isActive={
            option.value === currentValue || option.value === clickedButton
          }
          isLoading={option.value === clickedButton}
          data-cy="kat-singlechoice-btn"
        >
          {option.label}
        </GhostButton>
      ))}
    </SingleChoiceWrapper>
  );
};

export default SingleChoiceInput;
