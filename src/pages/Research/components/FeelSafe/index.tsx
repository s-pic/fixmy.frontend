import { scaleLinear } from 'd3-scale';
import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import styled from 'styled-components';

import { media } from '~/styles/utils';

import BikeIcon from './feelsafe-bike-icon.svg';
import CarIcon from './feelsafe-car-icon.svg';
import WalkIcon from './feelsafe-walk-icon.svg';

const Wrapper = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: absolute;
  top: 0;
  right: 0;

  ${media.m`
    position: relative;
    right: auto;
    margin-left: auto;
  `}
`;

interface TextContentProps {
  isSmall?: boolean;
}

const TextContent = styled.div<TextContentProps>`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  line-height: 1;
  height: 100%;

  svg {
    width: ${(props) => (props.isSmall ? 18 : 24)}px;
    height: ${(props) => (props.isSmall ? 10 : 14)}px;
  }
`;

const Number = styled.div<TextContentProps>`
  font-size: ${(props) => (props.isSmall ? 20 : 30)}px;
  font-weight: 700;
`;

const Text = styled.div<TextContentProps>`
  font-size: 8px;
  color: #999;
`;

const scale = scaleLinear(
  [10, 50, 75, 100],
  ['#c01d1d', '#f08141', '#abc759', '#45b834']
);

const getColorByValue = (index) => {
  return index <= 10 ? '#c01d1d' : scale(index);
};

export type FeelsafeSize = 'small' | 'big';
export type FeelsafeIcon = 'bike' | 'car' | 'walk';

interface FeelsafeProps {
  className?: string;
  value: number;
  size?: FeelsafeSize;
  icon?: FeelsafeIcon;
}

const sizes = {
  small: 80,
  big: 120,
};

const icons = {
  bike: BikeIcon,
  car: CarIcon,
  walk: WalkIcon,
};

const modes = defineMessages({
  bike: {
    id: 'research.components.feelsafe.perspectives.bike',
    defaultMessage: 'Fahrrad',
  },
  car: {
    id: 'research.components.feelsafe.perspectives.car',
    defaultMessage: 'Auto',
  },
  walk: {
    id: 'research.components.feelsafe.perspectives.walking',
    defaultMessage: 'Fuß',
  },
});

const FeelSafe = ({
  className,
  value,
  size = 'small',
  icon = 'bike',
}: FeelsafeProps) => {
  const color = getColorByValue(value);
  const pxSize = sizes[size];
  const isSmall = size === 'small';
  const IconComponent = icons[icon];

  const intl = useIntl();
  const valueDisplay = value.toLocaleString(intl.locale, {
    maximumFractionDigits: 0,
  });
  const label = intl.formatMessage(
    {
      id: 'research.components.feelsafe.label',
      defaultMessage:
        '{pct}% der Nutzer:innen in der {mode}-Perspektive fühlen sich sicher',
    },
    {
      pct: value.toLocaleString(intl.locale),
      mode: intl.formatMessage(modes[icon]),
    }
  );

  return (
    <Wrapper className={className} style={{ width: pxSize, height: pxSize }}>
      <svg width="100%" height="100%" viewBox="0 0 42 42">
        <title>{label}</title>
        <circle cx="21" cy="21" r="15.91549430918954" fill="#fff" />
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#fff"
          strokeWidth="3"
        />
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke={color}
          strokeOpacity={0.2}
          strokeWidth="3"
        />
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={`${value} ${100 - value}`}
          strokeDashoffset="25"
        />
      </svg>
      <TextContent isSmall={isSmall}>
        <IconComponent role="presentation" />
        <Number isSmall={isSmall}>{valueDisplay}%</Number>
        <Text isSmall={isSmall}>feel safe*</Text>
      </TextContent>
    </Wrapper>
  );
};

// Special variant of FeelSafe to use within Image containers
const ImageFeelSafe = styled(FeelSafe)`
  position: absolute;
  top: 12px;
  right: 12px;

  ${media.m`
    position: absolute;
    top: 12px;
    right: 12px;
  `}
`;

FeelSafe.Image = ImageFeelSafe;

export default FeelSafe;
