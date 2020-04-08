import React from 'react';
import styled from 'styled-components';
import BikestandsIcon from '~/images/reports/bikestands-icon.svg';
import utils from '~/pages/Reports/utils';

import { getReportStatusCaption } from '~/pages/Reports/apiservice';

import config from '~/pages/Reports/config';
import Heading from '~/pages/Reports/pages/SubmitReport/components/Heading';

const HeadlineSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BikeStandsCountSection = styled.div`
  margin-left: 16px;
`;

const BikeStandsCount = styled.p`
  margin-top: 4px;
  margin-bottom: 0;
  text-align: center;
  font-size: 14px;
  color: #999999;
`;

const StatusIndicator = styled.p`
  font-size: 22px;
  font-weight: 300;
  line-height: 1.32;
  color: ${config.colors.black};
`;

const StatusIndicatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: bottom;
`;

const ReportPin = styled.img.attrs((props) => ({
  src: utils.getMarkerSrc({ status: props.status }),
  alt: 'A marker icon'
}))`
  display: block;
  width: 40px;
  height: 50px;
`;

const DetailsHeading = styled(Heading)`
  font-size: 1.4em;
`;

const DetailsHeader = ({ details: { number }, status }) => (
  <>
    <HeadlineSection data-cy="reports-detail-title">
      <DetailsHeading alignLeft>
        {number} neue{number === 1 ? 'r' : null} Fahrradbügel gewünscht
      </DetailsHeading>
      <BikeStandsCountSection>
        <BikestandsIcon />
        <BikeStandsCount>x{number}</BikeStandsCount>
      </BikeStandsCountSection>
    </HeadlineSection>

    <StatusIndicatorWrapper>
      <StatusIndicator data-cy="reports-detail-status">
        Status: {getReportStatusCaption(status)}
      </StatusIndicator>
      <ReportPin />
    </StatusIndicatorWrapper>
  </>
);

export default DetailsHeader;
