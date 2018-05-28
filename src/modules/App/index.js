import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Menu from '~/modules/Menu';
import Home from '~/modules/Home';
import MarkdownPage from '~/modules/MarkdownPage';
import MapView from '~/modules/MapView';
import MapModal from '~/components/MapModal';

import { init as initStyle } from './AppStyle';

initStyle();

const App = styled.div`
  height: 100%;
  position: relative;
`;

const AppContent = styled.div`
  width: 100%;
  height: 100%;
`;

const AppWrapper = () => (
  <App>
    <Menu />
    <AppContent>
      <Route exact path="/" component={Home} />
      <Route path="/info" render={() => <MarkdownPage page="about" />} />

      <Route path="/kontakt" render={() => <MarkdownPage page="contact" />} />
      <Route path="/datenschutz" render={() => <MarkdownPage page="privacy" />} />
      <Route path="/impressum" render={() => <MarkdownPage page="imprint" />} />

      <Route
        path="(/zustand|/planungen|/)"
        component={MapView}
      />
      <Route
        path="(/zustand|/planungen|/)"
        component={MapModal}
      />
    </AppContent>
  </App>
);

export default AppWrapper;
