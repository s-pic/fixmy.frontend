export default {
  overviewMap: {
    style: 'mapbox://styles/hejco/ck7q440d50b6s1ip928c7zlbb',
    bounds: [
      [6.054187, 50.759965],
      [6.113367, 50.787419]
    ],
    maxBounds: [
      [5.9, 50.6],
      [6.3, 50.9]
    ]
  },
  locateMeMap: {
    zoomOnGeocodedLocation: 15.5,
    boundaryGeodataUrl: '/data/aachen.geojson',
    outofBoundaryText: 'Dieser Ort gehört leider nicht zum Meldegebiet',
    reverseGeocoderUrl:
      'https://api.mapbox.com/geocoding/v5/mapbox.places/{long},{lat}.json',
    paddingInDegree: 0.1,
    geocoder: {
      debounceTime: 1000,
      searchStringMinLength: 3
    }
  },
  landing: {
    title: 'Radbügel für Aachen',
    logo: true,
    stepColors: ['#6E9BD2', '#6E9BD2', '#6E9BD2']
  },
  form: { newsletter: false, zoomOutForInvalidLocations: false },
  title: 'Radbügel für Aachen',
  tests: {
    addressInput: 'kasino',
    mockGeoLocation: {
      latitude: 50.79,
      longitude: 6.114
    }
  },
  region: 'Aachen',
  intro:
    'Damit Sie Ihr Fahrrad überall sicher abschließen können, baut die Stadt Aachen umfassend neue Fahrradabstellmöglichkeiten aus. Da Sie  als Bürger*in am besten wissen, wo Sie Ihr Fahrrad abstellen, können Sie hier melden, wo genau Sie neue Bügel benötigen.',
  steps: [
    {
      step: 1,
      text: 'Sie melden, wo neue Bügel benötigt werden.'
    },
    {
      step: 2,
      text:
        'Alle Meldungen, die bis zum 31. Juli 2020 eingegangen sind, werden von der Stadt Aachen geprüft.'
    },
    {
      step: 3,
      text:
        'Sofern sie umsetzbar sind, werden die Bügel so schnell wie möglich installiert.'
    }
  ],
  faq: [
    {
      heading: 'Warum sollte ich mitmachen?',
      text: `
        In Aachen werden 2.000 neue Fahrradbügel aufgestellt. Hier können Sie mitbestimmen, wo diese stehen sollen.
      `
    },
    {
      heading: 'Wie kann ich mitmachen?',
      text: `
        Klicken Sie unten auf den Button „Sagen Sie uns, wo Fahradbügel benötigt werden“, oder schauen Sie sich zunächst die Karte mit den vorhandenen Meldungen an. Für eine neue Meldung werden Sie durch einen kurzen Dialog geführt, bei dem Sie den Ort und weitere Informationen zu Ihrer Meldung angeben müssen. Am einfachsten können Sie eine Meldung von Ihrem Smartphone machen – Sie können aber auch von zu Hause am PC einen Eintrag erstellen.
      `
    },
    {
      heading: 'Was passiert mit den Meldungen?',
      text: `
       Während des Meldezeitraums werden die Mitarbeiter und Mitarbeiterinnen der Stadt Aachen alle Meldungen anschauen und bewerten, welche umsetzbar sind. Wenn Sie Ihre Mailadresse hinterlegen, bekommenSie in jedem Fall eine Rückmeldung, ob Ihr Wunsch realisiert werden kann. Wenn es Rückfragen gibt, wird sich die Stadt ebenfalls bei Ihnen melden. Zusätzlich wird auf radbuegel-aachen.de veröffentlicht, an welchen Orten neue Fahrradbügel installiert werden.
      `
    },
    {
      heading: 'Werden alle Meldungen umgesetzt?',
      text: `
        Zunächst muss geprüft werden, ob an der gemeldeten Stelle Bügel aufgestellt werden können oder ob andere Aspekte dagegen sprechen. Bei Bedarf wird der Ort besichtigt, oder eine Rückfrage gestellt. Außerdem gibt es natürlich eine Grenze, wie viele Bügel finanzierbar sind und von den beauftragten Fachfirmen pro Jahr aufgestellt werden können. Mehrere Meldungen an einem Ort werden zusammengefasst und gemeinsam betrachtet.
      `
    },
    {
      heading: 'Kann im gesamten Stadtgebiet gemeldet werden?',
      text: `
        Generell können Sie für das gesamte Stadtgebiet einen Bedarf an Radbügeln anmelden. Im Umfeld von Dom und Rathaus sind zusätzliche Fahrradbügel nur unter größeren Schwierigkeiten zu realisieren. Das hat mit den vielen Veranstaltungen dort zu tun, aber auch mit Fragen des Brand- und Denkmalschutzes. Dies wird in einem separaten Prozess geprüft. Wenn Sie Vorschläge unterbreiten möchten, bitten wir Sie, alternative Standorte anzugeben.    
      `
    }
  ],
  thankYouNote: {
    base:
      'Ihre Meldung ist nun online! Alle Meldungen werden gesammelt und dann der Stadt übergeben. Die Planer:innen werden dann prüfen, welche Meldungen umgesetzt werden können. Die Ergebnisse sehen Sie anschließend hier auf der Karte',
    loggedIn:
      'und wir benachrichtigen Sie an Ihre im Login hinterlegte E-Mail-Adresse.',
    loggedOut:
      'und wenn Sie Ihre E-Mail-Adresse eingeben, benachrichtigen wir Sie auch per E-Mail.'
  }
};
