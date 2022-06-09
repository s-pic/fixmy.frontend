import React from 'react';
import styled from 'styled-components';

/* eslint-disable import/no-unresolved */
import FbIcon from '~/images/facebook.svg?component';
import TwIcon from '~/images/twitter.svg?component';
/* eslint-enable import/no-unresolved */

const SocialButton = styled.div`
  margin: 0 10px;
`;

export default (props) => {
  let SocialIcon;

  switch (props.type) {
    case 'twitter':
      SocialIcon = TwIcon;
      break;
    case 'facebook':
    default:
      SocialIcon = FbIcon;
      break;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Oeffne ${props.type}`}
      href={props.link}
    >
      <SocialButton>
        <SocialIcon />
      </SocialButton>
    </a>
  );
};
