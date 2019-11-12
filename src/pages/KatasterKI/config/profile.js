import PedelecIcon from '~/images/kataster-icons/icon-transportation-1.svg';
import BikeIcon from '~/images/kataster-icons/icon-transportation-2.svg';
import MotorbikeIcon from '~/images/kataster-icons/icon-transportation-5.svg';
import PublicIcon from '~/images/kataster-icons/icon-transportation-3.svg';
import CarIcon from '~/images/kataster-icons/icon-transportation-4.svg';

export default [
  {
    type: 'info',
    title: 'Zunächst drei allgemeine Fragen zum Verkehr in Berlin:'
  },
  {
    type: 'single_choice',
    name: 'berlinTraffic',
    title: 'Wie empfinden Sie den Verkehr in Berlin?',
    options: [
      {
        label: 'entspannt',
        value: 0
      },
      {
        label: 'eher entspannt',
        value: 1
      },
      {
        label: 'eher stressig',
        value: 2
      },
      {
        label: 'stressig',
        value: 3
      }
    ]
  },
  {
    type: 'info',
    title: 'Erzählen Sie uns nun etwas zu Ihrer Person: (9 Fragen)'
  },
  {
    type: 'transportRatings',
    title: 'Wie häufig nutzen Sie diese Verkehrsmittel?',
    name: 'transportRatings',
    sliderOptions: {
      min: 0,
      max: 5,
      step: 1
    },
    ratingLabels: [
      'Nie',
      'Selten',
      '1 mal im Monat',
      'Mehrmals im Monat',
      '1 mal wöchentlich',
      '(fast) täglich'
    ],
    ratings: [
      {
        icon: PedelecIcon,
        name: 'pedelec',
        label: 'Zu Fuß'
      },
      {
        icon: BikeIcon,
        name: 'bicycle',
        label: 'Fahrrad'
      },
      {
        icon: MotorbikeIcon,
        name: 'motorbike',
        label: 'Roller / Motorrad'
      },
      {
        icon: PublicIcon,
        name: 'public',
        label: 'Bus & Bahn'
      },
      {
        icon: CarIcon,
        name: 'car',
        label: 'Auto'
      }
    ]
  },
  {
    type: 'single_choice',
    name: 'ageGroup',
    title: 'Wie alt sind Sie?',
    options: [
      {
        label: 'unter 18 Jahre',
        value: 0
      },
      {
        label: '18 bis 24 Jahre',
        value: 1
      },
      {
        label: '25 bis 29 Jahre',
        value: 2
      },
      {
        label: '30 bis 39 Jahre',
        value: 3
      },
      {
        label: '40 bis 49 Jahre',
        value: 4
      },
      {
        label: '50 bis 64 Jahre',
        value: 5
      },
      {
        label: '65 bis 74 Jahre',
        value: 6
      },
      {
        label: 'über 74',
        value: 7
      }
    ]
  },
  {
    type: 'single_choice',
    name: 'hasChildren',
    title: 'Haben Sie Kinder unter 12 Jahren?',
    options: [
      {
        label: 'Ja',
        value: true
      },
      {
        label: 'Nein',
        value: false
      }
    ]
  },
  {
    type: 'single_choice',
    name: 'gender',
    title: 'Ihr Geschlecht?',
    options: [
      {
        label: 'Weiblich',
        value: 'w'
      },
      {
        label: 'Männlich',
        value: 'm'
      },
      {
        label: 'Divers',
        value: 'd'
      }
    ]
  },
  {
    type: 'multi_choice',
    name: 'vehiclesOwned',
    title: 'Mir steht folgendes zur Verfügung:',
    options: [
      {
        label: 'Pedelec / E-Bike',
        name: 'pedelec'
      },
      {
        label: 'Eigenes Auto',
        name: 'car'
      },
      {
        label: 'Monatsticket Nahverkehr',
        name: 'public'
      },
      {
        label: 'Motorad / Moped',
        name: 'motorbike'
      },
      {
        label: 'Fahrrad (ohne Motor)',
        name: 'bicycle'
      },
      {
        label: 'Carsharing',
        name: 'carsharing'
      }
    ]
  },
  {
    type: 'single_choice',
    name: 'bicycleUse',
    title:
      'Wie lange dauert der Weg, den Sie am häufigsten mit dem Fahrrad zurücklegen (ohne Rückweg)?',
    options: [
      {
        label: '10 Minuten',
        value: 0
      },
      {
        label: '20 Minuten',
        value: 1
      },
      {
        label: '30 Minuten',
        value: 2
      },
      {
        label: '40 Minuten',
        value: 3
      },
      {
        label: 'Mehr als 40 Minuten',
        value: 4
      },
      {
        label: 'Weiß ich nicht',
        value: 5
      }
    ]
  },
  {
    type: 'multi_choice',
    name: 'bikeReasons',
    title:
      'Aus welchen Gründen können, dürfen oder wollen Sie nicht häufiger Fahrrad fahren?',
    options: [
      {
        label: 'Ich kann nicht Fahrrad fahren (fehlende Fertigkeit)',
        name: 'skills'
      },
      {
        label: 'Es gibt keine angemessene Infrastruktur',
        name: 'infrastructure'
      },
      {
        label: 'Es sind zu viele Autos unterwegs',
        name: 'traffic'
      },
      {
        label: 'Der Zielort ist zu weit entfernt',
        name: 'distance'
      },
      {
        label: 'In meinem Umfeld fahren wenige Personen Fahrrad',
        name: 'social'
      },
      {
        label: 'Radfahren ist mir zu anstrengend',
        name: 'physicalStrain'
      },
      {
        label: 'Ich habe kein (gutes) Fahrrad',
        name: 'equipment'
      },
      {
        label: 'Ich kann meine Kinder nicht mitnehmen',
        name: 'children'
      },
      {
        label: 'Sonstiges',
        input: true,
        placeholder: 'Geben Sie hier Ihre Antwort ein ...',
        name: 8
      }
    ]
  },
  {
    type: 'radiogroups',
    name: 'motivationalFactors',
    title: 'Wie sehr stimmen Sie den folgenden Aussagen zu?',
    info:
      'Die folgenden Fragen sind für unsere Forschung sehr wichtig. Sie handeln von all jenen Faktoren, die Sie möglicherweise motivieren, Fahrrad zu fahren - oder Sie davon abhalten.',
    radiogroups: [
      {
        label: '„Ich fahre Fahrrad weil es mir Spaß macht.“',
        name: 'bikefun',
        options: [
          { label: 'trifft nicht zu', value: 0 },
          { label: 'trifft eher nicht zu', value: 1 },
          { label: 'teils-teils', value: 2 },
          { label: 'trifft eher zu', value: 3 },
          { label: 'trifft zu', value: 4 }
        ]
      },
      {
        label: '„Mit dem Fahrrad bin ich schneller und flexibler.“',
        name: 'faster',
        options: [
          { label: 'trifft nicht zu', value: 0 },
          { label: 'trifft eher nicht zu', value: 1 },
          { label: 'teils-teils', value: 2 },
          { label: 'trifft eher zu', value: 3 },
          { label: 'trifft zu', value: 4 }
        ]
      },
      {
        label: '„Bei schlechtem Wetter fahre ich kein Fahrrad.“',
        name: 'weather',
        options: [
          { label: 'trifft nicht zu', value: 0 },
          { label: 'trifft eher nicht zu', value: 1 },
          { label: 'teils-teils', value: 2 },
          { label: 'trifft eher zu', value: 3 },
          { label: 'trifft zu', value: 4 }
        ]
      },
      {
        label: '„Ich fühle mich sicher auf dem Fahrrad im Verkehr.“',
        name: 'safe',
        options: [
          { label: 'trifft nicht zu', value: 0 },
          { label: 'trifft eher nicht zu', value: 1 },
          { label: 'teils-teils', value: 2 },
          { label: 'trifft eher zu', value: 3 },
          { label: 'trifft zu', value: 4 }
        ]
      }
    ]
  },
  {
    type: 'zip',
    name: 'zipcode',
    title:
      'Geben Sie Ihre Postleitzahl an, damit wir Sie einem Ort zuordnen können.'
  },
  {
    type: 'multi_choice',
    name: 'whyBiking',
    title: 'Welcher dieser Aussagen würden sie zustimmen?',
    options: [
      {
        label: 'Meine täglichen Wege kann ich gut mit dem Fahrrad erledigen.',
        name: 'dailyTransport'
      },
      {
        label: 'Radfahren macht mir Spaß',
        name: 'fun'
      },
      {
        label: 'Ich kann gut und sicher Radfahren',
        name: 'ability'
      },
      {
        label: 'In meinem Umfeld fahren viele Menschen Fahrrad',
        name: 'social'
      },
      {
        label: 'Ich fühle mich sicher auf dem Rad im Verkehr',
        name: 'safety'
      }
    ]
  }
];
