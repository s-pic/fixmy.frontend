import React from 'react';
import slugify from 'slugify';
import styled from 'styled-components';
import config from '~/config';
import { media } from '~/styles/utils';

type StyledHeadingProps = {
  toc?: string;
  className?: string;
};

const Heading1 = styled.h1<StyledHeadingProps>`
  font-size: 1.5em;
  font-family: ${config.titleFont};
  font-weight: 700;
  margin: 0.5em auto;
  line-height: 1.25;
  max-width: 518px;
  color: ${config.colors.darkbg};
  hyphens: auto;

  ${media.s`
    font-size: 1.875em;
  `}

  ${media.m`
    font-size: 2em;
  `}

  ${media.l`
    max-width: 646px;
  `}
`;

const Heading2style = styled.h2<StyledHeadingProps>`
  color: ${config.colors.darkbg};
  font-size: 1.5em;
  margin-top: 1.5em;
  margin-right: auto;
  margin-bottom: 1.5em;
  margin-left: 0;
  max-width: 518px;
  text-transform: uppercase;
  hyphens: auto;

  ${media.s`
    font-size: 2em;
  `}

  ${media.m`
    margin-top: 2em;
    `}

  ${media.l`
    max-width: 598px;
    margin-bottom: 2em;
  `}

  ${media.xl`
    margin-left: 1em;
    max-width: calc(646px + 151px);
  `}
`;

const Heading2Line = styled.div`
  width: 50%;
  border-bottom: 2px solid ${config.colors.change_2};
  margin-top: 0.25em;

  ${media.m`
    margin-top: 0.5em;
  `}
`;

const Heading2 = ({ children, ...props }) => (
  <Heading2style {...props}>
    {children}
    <Heading2Line />
  </Heading2style>
);

const Heading3 = styled.h3<StyledHeadingProps>`
  font-size: 1.5em;
  line-height: 1.2;
  margin-top: 2em;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  max-width: 518px;
  color: ${config.colors.darkbg};

  ${media.s`
    line-height: 1.3;
  `}

  ${media.m`
    margin-bottom: 1em;
  `}

  ${media.l`
    max-width: 598px;
  `}
`;

const AnchorStyle = styled.a`
  display: block;
  border-bottom: none !important;

  &:before {
    display: block;
    content: '';
    height: 4em;
    margin: -4em 0 0;

    ${media.m`
      height: 1px;
      margin: -1px 0 0;
    `}
  }
`;

const headings = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
};

type AnchorWrapperProps = {
  toc?: string | null;
  tocAnchor?: string | null;
  children?: React.ReactElement;
};

/**
 * Provide an anchor for accessibility if toc prop is provided
 */
const AnchorWrapper: React.FC<AnchorWrapperProps> = ({
  toc,
  tocAnchor = null,
  children,
}) => {
  if (!toc) return children;

  return (
    <AnchorStyle
      href={`#${slugify(tocAnchor || toc, { lower: true })}`}
      id={slugify(tocAnchor || toc, { lower: true })}
      className="internal"
    >
      {children}
    </AnchorStyle>
  );
};

type HeadingProps = {
  as?: keyof typeof headings;
  toc?: string | null;
  tocAnchor?: string | null;
  className?: string | null;
};

export const Heading: React.FC<HeadingProps> = ({
  as,
  toc,
  tocAnchor,
  children,
  className,
}) => {
  const HeadingComponent = headings[as] ? headings[as] : Heading1;

  return (
    <AnchorWrapper toc={toc} tocAnchor={tocAnchor}>
      <HeadingComponent className={className}>{children}</HeadingComponent>
    </AnchorWrapper>
  );
};
