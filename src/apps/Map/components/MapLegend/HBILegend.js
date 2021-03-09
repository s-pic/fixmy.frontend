/* eslint import/no-dynamic-require: 0, global-require: 0 */
import React from 'react';

import { toggleHbiFilter } from '~/apps/Map/MapState';
import { HBI_STOPS } from '~/apps/Map/constants';
import Label from '~/components2/Label';
import IconBad from '~/images/hbi-stop-icons/gefaehrlich@2x.png';
import IconOk from '~/images/hbi-stop-icons/ok@2x.png';
import IconWorst from '~/images/hbi-stop-icons/sehrgefaehrlich@2x.png';
import IconSuper from '~/images/hbi-stop-icons/sehrgut@2x.png';
import Store from '~/store';

import LegendImageWrapper from './LegendImageWrapper';
import LegendItem from './LegendItem';
import LegendWrapper from './LegendWrapper';

const Icons = {
  super: IconSuper,
  ok: IconOk,
  schlecht: IconBad,
  miserabel: IconWorst,
};

export default (props) => (
  <LegendWrapper>
    {HBI_STOPS.map((legendItem, i) => (
      <LegendItem
        onClick={() => Store.dispatch(toggleHbiFilter(i))}
        isActive={props.filterHbi[i]}
        key={`LegendItem__${legendItem.label}`}
      >
        <LegendImageWrapper>
          <img
            alt={`Legende - ${legendItem.label}`}
            src={Icons[legendItem.label]}
          />
        </LegendImageWrapper>
        <Label>{legendItem.label}</Label>
      </LegendItem>
    ))}
  </LegendWrapper>
);
