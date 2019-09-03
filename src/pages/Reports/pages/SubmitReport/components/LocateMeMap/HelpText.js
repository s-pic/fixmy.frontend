import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from '~/styles/utils';

const Box = styled.div`
  height: 82px;
  position: fixed;
  z-index: 1000;
  top: 58px;
  left: 68px; /* leave space for zoom controls */
  right: 15px;
  margin: auto;
  border-radius: 3px;
  background-color: ${config.colors.darkbg};
  opacity: 0.7;
  font-size: 16px;
  font-weight: bold;
  color: white;
  letter-spacing: 0.9px;
  line-height: 1.5;
  padding: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${media.m`
    max-width: 400px;
    margin-left: -10px; // TODO: find a clean way to position this under the search bar
    margin-right: auto;
    left: 25px;
    top: 62px;
  `}
`;

const HelpText = ({ text }) => (
  <Box><span>{text}</span></Box>
);

HelpText.propTypes = {
  text: PropTypes.string
};

HelpText.defaultProps = {
  text: 'Bewege die Karte oder tippe eine Adresse ein.'
};

export default HelpText;
