import React from 'react';
import styled from 'styled-components';

import Title from '~/components/Title';

const StyledTitle = styled(Title)`
  margin: 16px 0 24px 0;
`;

export default (props) => {
  const { section } = props;
  const planningTitle = section.side0_planning_title || section.sideNone_planning_title || section.side1_planning_title;

  if (!section) {
    return null;
  }

  const PlanningStatusLabel = planningTitle || 'Keine Planungen vorhanden.';

  return (
    <StyledTitle>{PlanningStatusLabel}</StyledTitle>
  );
};
