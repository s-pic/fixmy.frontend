/**
 *  Displays report items fetched from backend.
 */

import debug from 'debug';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import LocatorControl from '~/apps/Map/components/LocatorControl';
import ErrorMessage from '~/components/ErrorMessage';
import config from '~/pages/Reports/config';
import { actions as errorStateActions } from '~/pages/Reports/state/ErrorState';
import { actions as overviewMapStateActions } from '~/pages/Reports/state/OverviewMapState';
import utils from '~/pages/Reports/utils';
import { matchMediaSize, breakpoints, media } from '~/styles/utils';

import CTAButton from './components/CTAButton';
import MapLegend from './components/MapLegend';
import OverviewMapNavBar from './components/OverviewMapNavBar';
import ReportDetails from './components/ReportDetails';
import ReportsPopup from './components/ReportsPopup';
import WebglMap from './components/WebglMap';

const logger = debug('fmc:reports:OverviewMap');

const MapView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const MapWrapper = styled.div`
  flex: 1 1 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledLocatorControl = styled(LocatorControl)`
  top: 16px;
  right: 16px;
  bottom: auto;
  left: auto;

  ${media.m`
    right: 45px;
    bottom: 45px;
    top: auto;
  `}
`;

const MapControls = ({
  onTab,
  onLocationChange,
  shiftLeft,
  isCTAHidden,
  isPopupVisible,
  isDetailOpen,
}) => {
  return (
    <>
      <StyledLocatorControl
        key="ReportsOverviewMap__LocatorControl"
        onChange={onLocationChange}
      />
      {config.reports.enabled ? (
        !isCTAHidden && <CTAButton onTab={onTab} shiftLeft={shiftLeft} />
      ) : (
        <MapLegend
          isPopupVisible={isPopupVisible}
          isDetailOpen={isDetailOpen}
        />
      )}
    </>
  );
};

class OverviewMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // [lng, lat]
      mapCenter: null,
      isLoading: true,
      selectedReportsPosition: [],
    };
  }

  componentDidMount() {
    const init = async () => {
      await this.props.loadReportsData();
      const deepLinkedReportId = this.props.match.params.id;
      if (deepLinkedReportId) {
        logger('Handling deep link load');
        this.props.setSelectedReport(deepLinkedReportId, true);
      }
    };
    init();
  }

  componentDidUpdate(prevProps) {
    const { selectedReport: prevReport } = prevProps;
    const { selectedReport } = this.props;
    const hasReportBeenSelected = !!selectedReport?.id;

    // Update redux state when selected report is changed through route params
    if (prevProps.match.params.id !== this.props.match.params.id)
      this.props.setSelectedReport(this.props.match.params.id, true);

    if (hasReportBeenSelected) {
      const hasSelectedReportChanged = prevReport?.id !== selectedReport.id;
      if (hasSelectedReportChanged) {
        // setState is okay because conditionals will prevent this
        // from occuring in a loop
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ mapCenter: selectedReport.geometry.coordinates });
      }
    } else if (!hasReportBeenSelected && prevReport) {
      // Unsetting report

      // setState is okay because conditionals will prevent this
      // from occuring in a loop
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        mapCenter: null,
      });
    }
  }

  componentWillUnmount() {
    this.props.resetMapState();
  }

  onCTAButtonTab = () => {
    this.props.history.push(
      config.reports.enabled
        ? config.routes.reports.new
        : config.routes.reports.landing
    );
  };

  onMarkerClick = (el, clickedId) => {
    logger('Handling marker click');
    const { selectedReport, match } = this.props;
    const hasDetailId = match.params.id;

    this.props.setSelectedReport(clickedId);
    this.updateSelectedReportPosition();

    if (hasDetailId && selectedReport?.id !== clickedId) {
      this.props.history.push(`${config.routes.reports.map}/${clickedId}`);
    }
  };

  onLocationChange = (coords) => {
    this.setState({ mapCenter: coords });
  };

  onPopupClose = () => {
    // show map by returning to the map route
    this.props.setSelectedReport(null);
    this.props.history.push(config.routes.reports.map);
  };

  onMapLoad = (map) => {
    this.map = map;
    this.setState({ isLoading: false });
  };

  onMapMove = () => {
    if (this.props.selectedReport) this.updateSelectedReportPosition();
  };

  updateSelectedReportPosition() {
    if (this.map && this.props.selectedReport) {
      const selectedReportsPosition = this.map.project(
        this.props.selectedReport.geometry.coordinates
      );
      this.props.setSelectedReportPosition(selectedReportsPosition);
    }
  }

  render() {
    const {
      reports,
      selectedReport,
      match,
      token,
      isMenuOpen,
      errorMessage,
      setHoveredReport,
      unSetHoveredReport,
    } = this.props;

    const hasDetailId = match.params.id;
    const isDesktopView = matchMediaSize(breakpoints.m);
    const isCTAButtonShifted = isDesktopView && hasDetailId && !isMenuOpen;
    const isCTAHidden =
      (isDesktopView && hasDetailId && isMenuOpen) ||
      config.region === 'berlin';

    return (
      <MapView>
        {errorMessage && (
          <ErrorMessage
            message={this.props.errorMessage}
            onDismiss={this.props.removeError}
          />
        )}

        <OverviewMapNavBar heading={config.reports.title} />
        <MapWrapper>
          <WebglMap
            reportsData={reports}
            center={this.state.mapCenter}
            zoomIn={this.state.zoomIn}
            onMarkerClick={this.onMarkerClick}
            onLoad={this.onMapLoad}
            onMove={this.onMapMove}
            selectedReport={selectedReport}
            setHoveredReport={setHoveredReport}
            unSetHoveredReport={unSetHoveredReport}
            detailId={match.params.id}
            zoomControlPosition="top-left"
            isCTAButtonShifted={isCTAButtonShifted}
          />
          {this.state.isLoading ? null : (
            <MapControls
              isCTAHidden={isCTAHidden}
              onLocationChange={this.onLocationChange}
              onTab={this.onCTAButtonTab}
              shiftLeft={isCTAButtonShifted}
              isPopupVisible={selectedReport && !hasDetailId}
              isDetailOpen={hasDetailId}
            />
          )}
          {selectedReport && !hasDetailId && (
            <ReportsPopup
              onClose={this.onPopupClose}
              reportItem={selectedReport}
              position={this.state.selectedReportsPosition}
            />
          )}
          <Route
            path={`${match.path}/:id`}
            render={(props) => {
              if (!reports || !reports.length) {
                return null;
              }

              const reportItem = reports.find(
                (r) => r.id === +props.match.params.id
              );

              const subtitle = `${
                utils.isPlanning(reportItem) ? 'Planung' : 'Meldung'
              } ${reportItem.id}`;

              return (
                <ReportDetails
                  apiEndpoint="reports"
                  onCloseRoute={match.url}
                  onClose={this.onPopupClose}
                  token={token}
                  reportItem={reportItem}
                  subtitle={subtitle}
                />
              );
            }}
          />
        </MapWrapper>
      </MapView>
    );
  }
}

const mapDispatchToPros = {
  ...overviewMapStateActions,
  ...errorStateActions,
};

export default withRouter(
  connect(
    (state) => ({
      selectedReport: state.ReportsState.OverviewMapState.selectedReport,
      reports: state.ReportsState.OverviewMapState.reports,
      isReportsFetchPending:
        state.ReportsState.OverviewMapState.reportFetchState === 'pending',
      zoomIn: state.ReportsState.OverviewMapState.reports.zoomIn,
      token: state.UserState.token,
      isMenuOpen: state.AppState.isMenuOpen,
      errorMessage: state.ReportsState.ErrorState.message,
    }),
    mapDispatchToPros
  )(OverviewMap)
);
