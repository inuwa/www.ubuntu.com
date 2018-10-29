var dummyData = {
  optIn: {
    title: 'Opt in',
    dataset: [{
      label: 'Opt-in',
      value: 65.64,
    }, {
      label: 'Opt-out',
      value: 33.36,
    },],
  },
  realOrVirtual: {
    title: 'Real or Virtual Machine?',
    dataset: [{
      label: 'Physical',
      value: 43.47,
    }, {
      label: 'Unknown',
      value: 35.91,
    }, {
      label: 'VM',
      value: 20.6,
    }]
  },
  firmware: {
    title: 'Firmware',
    datasets: {
      hardware: [{
        label: 'Physical',
        show: true,
        value: 54.64
      }, {
        value: 45.36,
      },],
      virtual: [{
        label: 'Virtual',
        show: true,
        value: 92.63,
      }, {
        value: 7.37
      }]
    }
  },
  osArchitecture: {
    title: 'OS Architecture',
    dataset: [{
      label: 'amd64',
      value: 3500000,
    }, {
      label: 'i386',
      value: 49500,
    },{
      label: 'arm64',
      value: 1127,
    },{
      label: 'armhf',
      value: 77,
    },{
      label: 'ppc64el',
      value: 10,
    }],
  },
  displayServer: {
    title: 'Display Server',
    dataset: [{
      label: 'X11',
      value: 4000000,
    }, {
      label: 'Wayland',
      value: 17000,
    },],
  },
  numberScreens: {
    title: 'Number of screens',
    dataset: [{
      label: 'One screen',
      value: 3300000,
    }, {
      label: 'Two screens',
      value: 228000,
    }, {
      label: 'Three screens',
      value: 18000,
    }, {
      label: 'Four+ screens',
      value: 1000,
    }],
  },
  numberGPUs: {
    title: 'Number of GPUs',
    dataset: [{
      label: 'One GPU',
      value: 2670000,
    }, {
      label: 'Two GPUs',
      value: 162500,
    }, {
      label: 'Three GPUs',
      value: 5800,
    }],
  },
  installOrUpgrade: {
    title: 'Clean install or upgrade?',
    dataset: [{
      label: 'Clean Install',
      value: 80,
    }, {
      label: 'Upgrades',
      value: 20,
    },],
  },
  screenSizes: {
    title: 'Popular screen sizes',
    dataset: [{
      label: '800x600',
      value: 415150,
    }, {
      label: '1024x768',
      value: 135510,
    }, {
      label: '1152x768',
      value: 78970,
    }, {
      label: '1152x864',
      value: 42850,
    }, {
      label: '1280x1024',
      value: 127410,
    }, {
      label: '1280x800',
      value: 81670,
    }, {
      label: '1360x768',
      value: 57130,
    }, {
      label: '1366x768',
      value: 912800,
    }, {
      label: '1440x900',
      value: 105780,
    }, {
      label: '1600x900',
      value: 162670,
    }, {
      label: '1680x1050',
      value: 273930,
    }, {
      label: '1920x1080',
      value: 1041230,
    }, {
      label: '1920x1200',
      value: 64800,
    }, {
      label: '2560x1440',
      value: 48800,
    }, {
      label: '3840x2160',
      value: 47360,
    }]
  },
  physicalDisk: {
    title: 'Physical disk (GB)',
    dataset: [{
      label: '0 - 499',
      value: 974065,
    }, {
      label: '500 - 2000',
      value: 161000,
    }, {
      label: '>2000',
      value: 95000,
    },]
  },
  cpus: {
    title: 'Number of CPUs',
    dataset: [{
      label: '1-3',
      value: 2493900,
    }, {
      label: '4-6',
      value: 1096000,
    }, {
      label: '7+',
      value: 346000,
    },]
  },
  ram: {
    title: 'Size of RAM (GB)',
    dataset: [{
      label: '1-4',
      value: 1716700,
    }, {
      label: '5-8',
      value: 1061000,
    }, {
      label: '12-24',
      value: 463000,
    }, {
      label: '32+',
      value: 93541,
    },]
  },
  pixelDensity: {
    title: 'Pixel density',
    dataset: [{
      label: '120',
      value: 110120,
    }, {
      label: '160',
      value: 180690,
    }, {
      label: '240+',
      value: 37024,
    },]
  },
  partitionType: {
    title: 'Partition type',
    dataset: [{
      label: 'Erase existing and reinstall',
      value: 826,
    }, {
      label: 'Manual',
      value: 2144,
    }, {
      label: 'Install alongside',
      value: 869,
    }, {
      label: 'Erase device and install',
      value: 5410,
    }, {
      label: 'Logical Volume Manager (LVM)',
      value: 350,
    }, {
      label: 'Encrypted LVM',
      value: 300,
    }, {
      label: 'Upgrade',
      value: 100,
    },]
  },
  partitionSize: {
    title: 'Size of partitions (GB)',
    dataset: [{
      label: '<1',
      value: 1000000,
    }, {
      label: '1-19',
      value: 815000,
    }, {
      label: '20-49',
      value: 596000,
    }, {
      label: '50-99',
      value: 406000,
    }, {
      label: '100-249',
      value: 800000,
    }, {
      label: '250-999',
      value: 518000,
    }, {
      label: '1TB+',
      value: 317000,
    },]
  },
  partitionNum: {
    title: 'Number of partitions',
    dataset: [{
      label: '1',
      value: 1300000,
    }, {
      label: '2',
      value: 849000,
    }, {
      label: '3',
      value: 331000,
    }, {
      label: '4+',
      value: 100600,
    },]
  },
  defaultSettings: {
    title: 'Default Settings',
    datasets: {
      hardware: [{
        label: 'Physical',
        show: true,
        value: 3381,
      }, {
        value: 6619,
      },],
      virtual: [{
        label: 'Virtual',
        show: true,
        value: 6145,
      }, {
        value: 3855,
      },],
    },
  },
  restrictAddOn: {
    title: 'Default Settings',
    datasets: {
      hardware: [{
        label: 'Physical',
        show: true,
        value: 5685,
      }, {
        value: 4315,
      },],
      virtual: [{
        label: 'Virtual',
        show: true,
        value: 2470,
      }, {
        value: 7530,
      },],
    },
  },
  autoLogin: {
    datasets: {
      hardware: [{
        label: 'Physical',
        show: true,
        value: 2981,
      }, {
        value: 7081,
      },],
      virtual: [{
        label: 'Virtual',
        show: true,
        value: 2947,
      }, {
        value: 7053,
      },],
    },
  },
  minimalInstall: {
    title: 'Minimal Install',
    datasets: {
      hardware: [{
        label: 'Physical',
        show: true,
        value: 1274,
      }, {
        value: 8726,
      },],
      virtual: [{
        label: 'Virtual',
        show: true,
        value: 1359,
      }, {
        value: 8641,
      },],
    },
  },
  updateAtInstall: {
    title: 'Users Who Installed Ubuntu While Upgrading',
    datasets: {
      hardware: [{
        label: 'Physical',
        show: true,
        value: 9182,
      }, {
        value: 818,
      },],
      virtual: [{
        label: 'Virtual',
        show: true,
        value: 9187,
      }, {
        value: 813,
      },],
    },
  },
  languageList: {
    title: 'What language do they use?',
    dataset: [{
      label: 'Chinese',
      value: 88228,
    }, {
      label: 'Portuguese',
      value: 101000,
    }, {
      label: 'French',
      value: 102110,
    }, {
      label: 'Italian',
      value: 42368,
    }, {
      label: 'English',
      value: 1141671,
    }, {
      label: 'Russian',
      value: 62000,
    }, {
      label: 'Spanish',
      value: 150063,
    }, {
      label: 'German',
      value: 83292,
    }, {
      label: 'Polish',
      value: 24000,
    }, {
      label: 'Others',
      value: 110729,
    },],
  },
  howLongRunning: {
    datasets: {
      hardware: [{
        show: true,
        value: 19455,
      }, {
        value: 18880,
      },],
      virtual: [{
        show: true,
        value: 19662,
      }, {
        value: 19450,
      },],
    },
  },
  configure: {
    datasets: {
      hardware: [{
        show: true,
        value: 20433,
      }, {
        value: 18880,
      },],
      virtual: [{
        show: true,
        value: 34566,
      }, {
        value: 19450,
      },],
    },
  },
  whereUsersAre: {
    datasets: {
      legend: {
        colors: [
          '#E95420',
          '#F7C3B1',
          '#F5B29B',
          '#F29879',
          '#ED764D',
          '#772953',
        ]
      },
      countryStats: [
        {	id: 4,	//Afghanistan
          users: 10000,
          total:3000
        },
        {	id: 8,	//Albania
          users: 10000,
          total:3000
        },
        {	id: 12,	//Algeria
          users: 10000,
          total:3000
        },
        {	id: 24,	//Angola
          users: 10000,
          total:3000
        },
        {	id: 10,	//Antarctica,
          users: 10000,
          total:3000
        },
        { id: 32,	//Argentina
          users: 10000,
          total: 60000
        },
        {	id:51,	//Armenia
          users: 23456,
          total: 2345678
        },
        {	id:36,	//Australia
          users: 23456,
          total: 2345678
        },
        {	id:40,	//Austria
          users: 23456,
          total: 2345678
        },
        {	id:31,	//Azerbaijan
          users: 23456,
          total: 2345678
        },
        {	id:44,	//Bahamas
          users: 23456,
          total: 2345678
        },
        {	id:50,	//Bangladesh
          users: 23456,
          total: 2345678
        },
        {	id:112,	//Belarus
          users: 23456,
          total: 2345678
        },
        {	id:56,	//Belgium
          users: 23456,
          total: 2345678
        },
        {	id:84,	//Belize
          users: 23456,
          total: 2345678
        },
        {	id:204,	//Benin
          users: 23456,
          total: 2345678
        },
        {	id:64,	//Bhutan
          users: 23456,
          total: 2345678
        },
        {	id:68, 	//Bolivia Plurinational State, of
          users: 23456,
          total: 2345678
        },
        {	id:70, 	//Bosnia and Herzegovina
          users: 23456,
          total: 2345678
        },
        {	id:72,	//Botswana
          users: 23456,
          total: 2345678
        },
        {	id:76,	//Brazil
          users: 23456,
          total: 2345678
        },
        {	id:96,	// Brunei Darussalam
          users: 23456,
          total: 2345678
        },
        {	id:100,	//Bulgaria
          users: 23456,
          total: 2345678
        },
        {	id:854,	// Burkina Faso
          users: 23456,
          total: 2345678
        },
        {	id:108,	//Burundi
          users: 23456,
          total: 2345678
        },
        {	id:116,	//Cambodia
          users: 23456,
          total: 2345678
        },
        {	id:120,	//Cameroon
          users: 23456,
          total: 2345678
        },
        {	id:124,	//Canada
          users: 23456,
          total: 2345678
        },
        {	id:140, //Central African, Republic
          users: 23456,
          total: 2345678
        },
        {	id:148,	//Chad
          users: 23456,
          total: 2345678
        },
        {	id:152,	//Chile
          users: 23456,
          total: 2345678
        },
        {	id:156,	//China
          users: 23456,
          total: 2345678
        },
        {	id:170,	//Colombia
          users: 23456,
          total: 2345678
        },
        {	id:178,	//Congo
          users: 23456,
          total: 2345678
        },
        {	id:180,	//Congo, the Democratic Republic of, //the
          users: 23456,
          total: 2345678
        },
        {	id:188,	//Costa Rica
          users: 23456,
          total: 2345678
        },
        {	id:384,	// Cote d,'Ivoire
          users: 23456,
          total: 2345678
        },
        {	id:191,	//Croatia
          users: 23456,
          total: 2345678
        },
        {	id:192,	//Cuba
          users: 23456,
          total: 2345678
        },
        {	id:196,	//Cyprus
          users: 23456,
          total: 2345678
        },
        {	id:203,	// Czech Republic
          users: 23456,
          total: 2345678
        },
        {	id:208,	//Denmark
          users: 23456,
          total: 2345678
        },
        {	id:262,	//Djibouti
          users: 23456,
          total: 2345678
        },
        {	id:214,	// Dominican Republic
          users: 23456,
          total: 2345678
        },
        {	id:218,	//Ecuador
          users: 23456,
          total: 2345678
        },
        {	id:818,	//Egypt
          users: 23456,
          total: 2345678
        },
        {	id:222,	//El Salvador
          users: 23456,
          total: 2345678
        },
        {	id:226,	// Equatorial Guinea
          users: 23456,
          total: 2345678
        },
        {	id:232,	//Eritrea
          users: 23456,
          total: 2345678
        },
        {	id:233,	//Estonia
          users: 23456,
          total: 2345678
        },
        {	id:231,	//Ethiopia
          users: 23456,
          total: 2345678
        },
        {	id:238,	//Falkland Islands (Malvinas)
          users: 23456,
          total: 2345678
        },
        {	id:242,	//Fiji
          users: 23456,
          total: 2345678
        },
        {	id:246,	//Finland
          users: 23456,
          total: 2345678
        },
        {	id:250,	//France
          users: 23456,
          total: 2345678
        },
        {	id:260,	// French Southern Territories
          users: 23456,
          total: 2345678
        },
        {	id:266,	//Gabon
          users: 23456,
          total: 2345678
        },
        {	id:270,	//Gambia
          users: 23456,
          total: 2345678
        },
        {	id:268,	//Georgia
          users: 23456,
          total: 2345678
        },
        {	id:276,	//Germany
          users: 23456,
          total: 2345678
        },
        {	id:288,	//Ghana
          users: 23456,
          total: 2345678
        },
        {	id:300,	//Greece
          users: 23456,
          total: 2345678
        },
        {	id:304,	//Greenland
          users: 23456,
          total: 2345678
        },
        {	id:320,	//Guatemala
          users: 23456,
          total: 2345678
        },
        {	id:324,	//Guinea
          users: 23456,
          total: 2345678
        },
        {	id:624,	//Guinea Bissau
          users: 23456,
          total: 2345678
        },
        {	id:328,	//Guyana
          users: 23456,
          total: 2345678
        },
        {	id:332,	//Haiti
          users: 23456,
          total: 2345678
        },
        {	id:340,	//Honduras
          users: 23456,
          total: 2345678
        },
        {	id:348,	//Hungary
          users: 23456,
          total: 2345678
        },
        {	id:352,	//Iceland
          users: 23456,
          total: 2345678
        },
        {	id:356,	//India
          users: 23456,
          total: 2345678
        },
        {	id:360,	//Indonesia
          users: 23456,
          total: 2345678
        },
        {	id:364,	// Iran, Islamic Republic of
          users: 23456,
          total: 2345678
        },
        {	id:368,	//Iraq
          users: 23456,
          total: 2345678
        },
        {	id:372,	//Ireland
          users: 23456,
          total: 2345678
        },
        {	id:376,	//Israel
          users: 23456,
          total: 2345678
        },
        {	id:380,	//Italy
          users: 23456,
          total: 2345678
        },
        {	id:388,	//Jamaica
          users: 23456,
          total: 2345678
        },
        {	id:392,	//Japan
          users: 23456,
          total: 2345678
        },
        {	id:400,	//Jordan
          users: 23456,
          total: 2345678
        },
        {	id:398,	//Kazakhstan
          users: 23456,
          total: 2345678
        },
        {	id:404,	//Kenya
          users: 23456,
          total: 2345678
        },
        {	id:408,	// Korea, Democratic People's Republic of
          users: 23456,
          total: 2345678
        },
        {	id:410,	// Korea, Republic, of
          users: 23456,
          total: 2345678
        },
        {	id:414,	//Kuwait
          users: 23456,
          total: 2345678
        },
        {	id:417,	//Kyrgyzstan
          users: 23456,
          total: 2345678
        },
        {	id:418,	// Lao People's Democratic Republic
          users: 23456,
          total: 2345678
        },
        {	id:428,	//Latvia
          users: 23456,
          total: 2345678
        },
        {	id:422,	//Lebanon
          users: 23456,
          total: 2345678
        },
        {	id:426,	//Lesotho
          users: 23456,
          total: 2345678
        },
        {	id:430,	//Liberia
          users: 23456,
          total: 2345678
        },
        {	id:434,	//Libya
          users: 23456,
          total: 2345678
        },
        {	id:440,	//Lithuania
          users: 23456,
          total: 2345678
        },
        {	id:442,	//Luxembourg
          users: 23456,
          total: 2345678
        },
        {	id:807,	// Macedonia, the former Yugoslav Republic of
          users: 23456,
          total: 2345678
        },
        {	id:450,	//Madagascar
          users: 23456,
          total: 2345678
        },
        {	id:454,	//Malawi
          users: 23456,
          total: 2345678
        },
        {	id:458,	//Malaysia
          users: 23456,
          total: 2345678
        },
        {	id:466,	//Mali
          users: 23456,
          total: 2345678
        },
        {	id:478,	//Mauritania
          users: 23456,
          total: 2345678
        },
        {	id:484,	//Mexico
          users: 23456,
          total: 2345678
        },
        {	id:498,	//Moldova, Republic of
          users: 23456,
          total: 2345678
        },
        {	id:496,	//Mongolia
          users: 23456,
          total: 2345678
        },
        {	id:499,	//Montenegro
          users: 23456,
          total: 2345678
        },
        {	id:504,	//Morocco
          users: 23456,
          total: 2345678
        },
        {	id:508,	//Mozambique
          users: 23456,
          total: 2345678
        },
        {	id:104,	//Myanmar
          users: 23456,
          total: 2345678
        },
        {	id:516,	//Namibia
          users: 23456,
          total: 2345678
        },
        {	id:524,	//Nepal
          users: 23456,
          total: 2345678
        },
        {	id:528,	//Netherlands
          users: 23456,
          total: 2345678
        },
        {	id:540,	//New Caledonia
          users: 23456,
          total: 2345678
        },
        {	id:554,	//New Zealand
          users: 23456,
          total: 2345678
        },
        {	id:558,	//Nicaragua
          users: 23456,
          total: 2345678
        },
        {	id:562,	//Niger
          users: 23456,
          total: 2345678
        },
        {	id:566,	//Nigeria
          users: 23456,
          total: 2345678
        },
        {	id:578,	//Norway
          users: 23456,
          total: 2345678
        },
        {	id:512,	//Oman
          users: 23456,
          total: 2345678
        },
        {	id:586,	//Pakistan
          users: 23456,
          total: 2345678
        },
        {	id:275,	//Palestinian Territory
          users: 23456,
          total: 2345678
        },
        {	id:591,	//Panama
          users: 23456,
          total: 2345678
        },
        {	id:598,	//Papua New Guinea
          users: 23456,
          total: 2345678
        },
        {	id:600,	//Paraguay
          users: 23456,
          total: 2345678
        },
        {	id:604,	//Peru
          users: 23456,
          total: 2345678
        },
        {	id:608,	//Philippines
          users: 23456,
          total: 2345678
        },
        {	id:616,	//Poland
          users: 23456,
          total: 2345678
        },
        {	id:620,	//Portugal
          users: 23456,
          total: 2345678
        },
        {	id:630,	//Puerto Rico
          users: 23456,
          total: 2345678
        },
        {	id:634,	//Qatar
          users: 23456,
          total: 2345678
        },
        {	id:642,	//Romania
          users: 23456,
          total: 2345678
        },
        {	id:643,	//Russian Federation
          users: 23456,
          total: 2345678
        },
        {	id:646,	//Rwanda
          users: 23456,
          total: 2345678
        },
        {	id:682,	//Saudi Arabia
          users: 23456,
          total: 2345678
        },
        {	id:686,	//Senegal
          users: 23456,
          total: 2345678
        },
        {	id:688,	//Serbia
          users: 23456,
          total: 2345678
        },
        {	id:694,	//Sierra Leone
          users: 23456,
          total: 2345678
        },
        {	id:703,	//Slovakia
          users: 23456,
          total: 2345678
        },
        {	id:705,	//Slovenia
          users: 23456,
          total: 2345678
        },
        {	id:90,	//Solomon Islands
          users: 23456,
          total: 2345678
        },
        {	id:706,	//Somalia
          users: 23456,
          total: 2345678
        },
        {	id:710,	//South Africa
          users: 23456,
          total: 2345678
        },
        {	id:728,	//South Sudan
          users: 23456,
          total: 2345678
        },
        {	id:724,	//Spain
          users: 23456,
          total: 2345678
        },
        {	id:144,	//Sri Lanka
          users: 23456,
          total: 2345678
        },
        {	id:729,	//Sudan
          users: 23456,
          total: 2345678
        },
        {	id:740,	//Suriname
          users: 23456,
          total: 2345678
        },
        {	id:748,	//Swaziland
          users: 23456,
          total: 2345678
        },
        {	id:752,	//Sweden
          users: 23456,
          total: 2345678
        },
        {	id:756,	//Switzerland
          users: 23456,
          total: 2345678
        },
        {	id:760,	//Syrian Arab Republic
          users: 23456,
          total: 2345678
        },
        {	id:158,	//Taiwan, Province of, //China
          users: 23456,
          total: 2345678
        },
        {	id:762,	//Tajikistan
          users: 23456,
          total: 2345678
        },
        {	id:834,	//Tanzania, United Republic of
          users: 23456,
          total: 2345678
        },
        {	id:764,	//Thailand
          users: 23456,
          total: 2345678
        },
        {	id:626,	//Timor Leste
          users: 23456,
          total: 2345678
        },
        {	id:768,	//Togo
          users: 23456,
          total: 2345678
        },
        {	id:780, //Trinidad and Tobago
          users: 23456,
          total: 2345678
        },
        {	id:788,	//Tunisia
          users: 23456,
          total: 2345678
        },
        {	id:792,	//Turkey
          users: 23456,
          total: 2345678
        },
        {	id:795,	//Turkmenistan
          users: 23456,
          total: 2345678
        },
        {	id:800,	//Uganda
          users: 23456,
          total: 2345678
        },
        {	id:804,	//Ukraine
          users: 23456,
          total: 2345678
        },
        {	id:784,	//United Arab Emirates
          users: 23456,
          total: 2345678
        },
        {	id:826,	//United Kingdom
          users: 23456,
          total: 2345678
        },
        {	id:840,	//United States
          users: 23456,
          total: 2345678
        },
        {	id:858,	//Uruguay
          users: 23456,
          total: 2345678
        },
        {	id:860,	//Uzbekistan
          users: 23456,
          total: 2345678
        },
        {	id:548,	//Vanuatu
          users: 23456,
          total: 2345678
        },
        {	id:862,	//Venezuela, Bolivarian Republic of
          users: 23456,
          total: 2345678
        },
        {	id:704,	//Vietnam
          users: 23456,
          total: 2345678
        },
        {	id:732,	//Western Sahara
          users: 23456,
          total: 2345678
        },
        {	id:887,	//Yemen
          users: 23456,
          total: 2345678
        },
        {	id:894,	//Zambia
          users: 23456,
          total: 2345678
        },
        {	id:716,	//Zimbabwe
          users: 23456,
          total: 2345678
        }
      ]
    }
  }
};
