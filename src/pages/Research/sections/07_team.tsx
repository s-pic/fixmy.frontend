import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Paragraph, SectionProps } from '~/components2/Article';
import { AnchorLink } from '~/components2/Link';
import LogoWrapper from '~/pages/Research/components/LogoWrapper';
import bmdvLogo from '~/pages/Research/images/logo/BMDV_Fz_2021_Office_Farbe_de.png';
import senKanzLogo from '~/pages/Research/images/logo/senatskanzlei-berlin.png';

const SectionTeam = ({ toc, tocAnchor }: SectionProps) => (
  <>
    <Heading as="h2" toc={toc} tocAnchor={tocAnchor}>
      <FormattedMessage
        id="research.07_team.p01.heading"
        defaultMessage="Wer steht hinter der Umfrage"
      />
    </Heading>
    <Paragraph>
      <FormattedMessage
        id="research.07_team.p02"
        defaultMessage="FixMyCity unterstützt Städte bei der Umsetzung der Verkehrswende. Das Team setzt sich aus Entwickler:innen, Designer:innen, Verkehrsplaner:innen sowie Datenspezialist:innen zusammen und entwickelt digitale Tools, die eine offene und agile Verwaltungsarbeit ermöglichen. Um Städte und Kommunen auf diesem Weg zu begleiten, entwickelt FixMyCity Open-Government-Werkzeuge, die es Verwaltungen ermöglichen, die Verkehrswende gemeinsam mit den Bürger:innen umzusetzen. Die entwickelten digitalen Tools zur einfachen Bedarfsermittlung, effizienten Projektsteuerung, aktiven Bürgerkommunikation und intelligenten Datenanalyse beschleunigen die Radverkehrsplanung und erhöhen ihre Akzeptanz."
      />
    </Paragraph>
    <Paragraph>
      <FormattedMessage
        id="research.07_team.p03"
        defaultMessage="Das Team von FixMyCity arbeitet im CityLAB Berlin, wo auch die auf dieser Seite beschriebene Umfrage entstanden ist. Wenn Sie mehr über uns erfahren wollen, besuchen Sie uns unter {link} oder nehmen Sie direkt Kontakt mit uns auf."
        values={{
          link: (
            <AnchorLink href="https://fixmycity.de">fixmycity.de</AnchorLink>
          ),
        }}
      />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="research.07_team.p04" defaultMessage="Kontakt:" />
      <br />
      <FormattedMessage
        id="research.07_team.p04.phone"
        defaultMessage="Tel: 030 - 54 90 86 65"
      />
      <br />
      <AnchorLink href="mailto:hello@fixmycity.de">
        hello@fixmycity.de
      </AnchorLink>
      <br />
      <br />
      <FormattedMessage
        id="research.07_team.p04.address"
        defaultMessage="Büroadresse:"
      />
      <br />
      FixMyCity GmbH c|o CityLAB Berlin
      <br />
      Platz der Luftbrücke 4<br />
      12101 Berlin
      <br />
      <br />
      <FormattedMessage
        id="research.07_team.p04.funding"
        defaultMessage="FixMyCity wird gefördert durch das BMDV und die Senatskanzlei Berlin."
      />
    </Paragraph>
    <Paragraph>
      <LogoWrapper>
        <a
          href="https://www.bmvi.de/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: 'none' }}
        >
          <img
            style={{ width: '188px', height: '197px', margin: '2em 0' }}
            src={bmdvLogo}
            alt="Förderlogo Bundesministerium für Digitales und Verkehr (BMDV)"
          />
        </a>
        <a
          href="https://www.berlin.de/rbmskzl/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: 'none' }}
        >
          <img
            style={{ height: '112px', width: '146px', margin: '2em 0' }}
            src={senKanzLogo}
            alt="Logo der Senatskanzlei Berlin"
          />
        </a>
      </LogoWrapper>
    </Paragraph>
  </>
);

export default SectionTeam;
