import React from 'react';
import styled from 'styled-components';
import LinkExternal from '~/images/icon-external-link@2x.png';
import LinkInternal from '~/images/icon-internal-link@2x.png';

import config from '~/config';

const BaseContainer = styled.a`
  white-space: nowrap;
  color: ${config.colors.darkbg};

  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.primary};

  background-size: 9px 9px;
  background-repeat: no-repeat;
  background-position: center left;
  padding-left: 15px;
`;

const Internal = styled(BaseContainer)`
  background-image: url(${LinkInternal});
`;
const External = styled(BaseContainer)`
  background-image: url(${LinkExternal});
`;

interface LinkProps {
  href: string;
  internal?: boolean;
  children: React.ReactNode;
}

/**
 * Link component with arrow to distinguish internal and external links.
 *
 * External links are opened in new tab/window and have noopener / noreferrer
 * attributes.
 */
const Link = ({ href, internal, children, ...props }: LinkProps) => {
  const Container = internal ? Internal : External;
  return (
    <Container
      href={href}
      target={internal ? null : '_blank'}
      rel={internal ? null : 'noopener noreferrer'}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Link;
