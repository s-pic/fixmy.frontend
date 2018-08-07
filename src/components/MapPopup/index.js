/* eslint indent: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { media } from '~/style-utils';
import MapPopup from './MapPopup';

const arrowSize = 19;
const outerArrowSize = 21;

function getArrowCSS({ size = 20, color = 'white', offset = 0 }) {
  return `
    content:'';
    display:block;
    width:0;
    height:0;
    position:absolute;
    border-right: ${size}px solid transparent;
    border-left: ${size}px solid transparent;
    border-top: ${size}px solid ${color};
    left: 50%;
    top: auto;
    bottom:-${(size + offset) - 1}px;
    margin-left:-${size}px;
  `;
}

const StyledMapPopup = styled(MapPopup)`
  position: relative;

  ${media.m`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    max-width: 300px;
    bottom: auto;
    transform: translate(-50%, -101%);
    box-shadow: 2px 2px 2px 3px rgba(0,0,0,.2);

    &:after {
      ${getArrowCSS({
        size: arrowSize,
        color: 'white'
      })}
    }

    &:before {
      ${getArrowCSS({
        size: outerArrowSize,
        color: config.colors.midgrey,
        offset: 1
      })}
    }
  `}
`;

class MapPopupWrapper extends PureComponent {
  render() {
    const x = this.props.popupLocation ? this.props.popupLocation.x : 0;
    const y = this.props.popupLocation ? this.props.popupLocation.y : 0;

    return (
      <StyledMapPopup x={x} y={y - arrowSize} />
    );
  }
}

export default connect(state => ({
  popupLocation: state.MapState.popupLocation
}))(MapPopupWrapper);
