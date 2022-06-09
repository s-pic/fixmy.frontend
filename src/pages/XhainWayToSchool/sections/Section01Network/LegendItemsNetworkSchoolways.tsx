import React from 'react';
import {
  IconWrapper,
  LegendHeader,
  LegendItem,
  LegendItems,
} from '~/components2/Article/Map/MapLegendStyledComponents';

/* eslint-disable import/no-unresolved */
import SchoolWays100 from '../assets/school-ways-100.svg?component';
import SchoolWays200 from '../assets/school-ways-200.svg?component';
import SchoolWays300 from '../assets/school-ways-300.svg?component';

type Props = { onClick?: () => void };

export const LegendItemsNetworkSchoolways: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <LegendHeader onClick={onClick} style={onClick && { cursor: 'pointer' }}>
        Schulwege-Häufigkeit
      </LegendHeader>
      <LegendItems>
        <LegendItem>
          <IconWrapper>
            <SchoolWays300 />
          </IconWrapper>
          mehr als 300 Schulwege
        </LegendItem>
        <LegendItem>
          <IconWrapper>
            <SchoolWays200 />
          </IconWrapper>
          mehr als 200 Schulwege
        </LegendItem>
        <LegendItem>
          <IconWrapper>
            <SchoolWays100 />
          </IconWrapper>
          mehr als 100 Schulwege
        </LegendItem>
      </LegendItems>
    </>
  );
};
