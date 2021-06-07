/* eslint-disable jsx-a11y/label-has-associated-control */
import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '~/apps/Gastro/components/Logo';
import config from '~/config';
import { media } from '~/styles/utils';

import { EventForm } from '../../components/EventForm';
import Header from '../../components/Header';
import HotlineNotice from '../../components/HotlineNotice';
import Thanks from '../../components/ThanksRegistration';

const Section = styled.section`
  border-bottom: 2px dashed ${config.colors.lightgrey};
  margin-bottom: 2em;

  ${media.m`
    padding-bottom: 1em;
    margin-bottom: 2em;
  `};

  &:last-child {
    border-bottom: none;
  }
`;

const Heading = styled.h2`
  && {
    font-family: Roboto Slab;
    font-size: 2em;
    line-height: 1.25;
    overflow-wrap: break-word;

    ${media.m`
      margin: 2em 0 1em;
    `};
  }
`;

type Props = any;

const EventApplication = (props: Props) => {
  // State for this registration
  const [submission, setSubmission] = useState(null);

  return (
    <>
      <Header showInfoLink />
      <Container maxWidth="sm">
        {submission == null && (
          <>
            <Section>
              <Heading>
                Antrag auf Sondergenehmigung für eine einmalige Veranstaltung
              </Heading>
              <p>
                Bitte füllen Sie dieses Formular aus, um eine Veranstaltung in
                einer Grünfläche oder im Bereich des ruhenden Verkehrs zu
                beantragen. Für das Einreichen des Antrags benötigen Sie
                folgende Dokumente als Foto / Scan vom Original, bitte bereiten
                Sie dieses vor Antragstellung vor.
              </p>
              <ul>
                <li>
                  <a
                    href="/uploads/event-terrassen/Veranstaltererklärung_VkBl.19-2012_.pdf"
                    className="internal"
                    target="_blank"
                  >
                    Veranstaltererklärung
                  </a>
                </li>
                <li>
                  <a
                    href="/uploads/event-terrassen/Versicherungsbestaetigung_VkBl.19-2012_.pdf"
                    className="internal"
                    target="_blank"
                  >
                    Versicherungsbestätigung (Formularvordruck muss textlich
                    identisch sein, die Bestätigung erhalten Sie von Ihrer
                    Versicherung)
                  </a>
                </li>
                <li>optional Nachweis der Gemeinnützigkeit</li>
              </ul>
              <p>
                Nach Prüfung der Anträge erstellt das Bezirksamt eine
                Sondergenehmigung die für eine einmalige Veranstaltung im
                bezeichneten Zeitraum genutzt werden darf. Anträge sind in den
                Zeiten 6 bis 22 Uhr von Montag bis Samstag (Sonntag und
                Feiertags nur in Ausnahmefällen) möglich. Anträge müssen
                mindestens 20 Werktage vor Veranstaltungsdatum gestellt werden.
              </p>
              <p>
                Die Genehmigungen werden bei nachgewiesener Gemeinnützigkeit
                gebührenfrei ausgesprochen, in anderen Fällen werden folgende
                Gebühren erhoben:
              </p>
              <ul>
                <li>Veranstaltungen bis 50 Personen: kostenfrei</li>
                <li>Veranstaltungen mit 51-200 Personen: 50,- Euro</li>
                <li>Veranstaltungen mit 201-500 Personen: 200,- Euro</li>
              </ul>
              <HotlineNotice />
            </Section>
            <Section>
              <EventForm onSuccess={setSubmission} />
            </Section>
          </>
        )}
        {submission != null && <Thanks submission={submission} />}
        <Logo />
      </Container>
    </>
  );
};

export { EventApplication };
