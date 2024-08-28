const countries = [
  {
    name: "Afghanistan",
    code: "AF",
    phoneCode: "93",
    emoji: "🇦🇫",
  },
  {
    name: "Albania",
    code: "AL",
    phoneCode: "355",
    emoji: "🇦🇱",
  },
  {
    name: "Algeria",
    code: "DZ",
    phoneCode: "213",
    emoji: "🇩🇿",
  },
  {
    name: "Andorra",
    code: "AD",
    phoneCode: "376",
    emoji: "🇦🇩",
  },
  {
    name: "Angola",
    code: "AO",
    phoneCode: "244",
    emoji: "🇦🇴",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    phoneCode: "1268",
    emoji: "🇦🇬",
  },
  {
    name: "Argentina",
    code: "AR",
    phoneCode: "54",
    emoji: "🇦🇷",
  },
  {
    name: "Armenia",
    code: "AM",
    phoneCode: "374",
    emoji: "🇦🇲",
  },
  {
    name: "Australia",
    code: "AU",
    phoneCode: "61",
    emoji: "🇦🇺",
  },
  {
    name: "Austria",
    code: "AT",
    phoneCode: "43",
    emoji: "🇦🇹",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    phoneCode: "994",
    emoji: "🇦🇿",
  },
  {
    name: "Bahamas",
    code: "BS",
    phoneCode: "1242",
    emoji: "🇧🇸",
  },
  {
    name: "Bahrain",
    code: "BH",
    phoneCode: "973",
    emoji: "🇧🇭",
  },
  {
    name: "Bangladesh",
    code: "BD",
    phoneCode: "880",
    emoji: "🇧🇩",
  },
  {
    name: "Barbados",
    code: "BB",
    phoneCode: "1246",
    emoji: "🇧🇧",
  },
  {
    name: "Belarus",
    code: "BY",
    phoneCode: "375",
    emoji: "🇧🇾",
  },
  {
    name: "Belgium",
    code: "BE",
    phoneCode: "32",
    emoji: "🇧🇪",
  },
  {
    name: "Belize",
    code: "BZ",
    phoneCode: "501",
    emoji: "🇧🇿",
  },
  {
    name: "Benin",
    code: "BJ",
    phoneCode: "229",
    emoji: "🇧🇯",
  },
  {
    name: "Bhutan",
    code: "BT",
    phoneCode: "975",
    emoji: "🇧🇹",
  },
  {
    name: "Bolivia",
    code: "BO",
    phoneCode: "591",
    emoji: "🇧🇴",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    phoneCode: "387",
    emoji: "🇧🇦",
  },
  {
    name: "Botswana",
    code: "BW",
    phoneCode: "267",
    emoji: "🇧🇼",
  },
  {
    name: "Brazil",
    code: "BR",
    phoneCode: "55",
    emoji: "🇧🇷",
  },
  {
    name: "Brunei",
    code: "BN",
    phoneCode: "673",
    emoji: "🇧🇳",
  },
  {
    name: "Bulgaria",
    code: "BG",
    phoneCode: "359",
    emoji: "🇧🇬",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    phoneCode: "226",
    emoji: "🇧🇫",
  },
  {
    name: "Burundi",
    code: "BI",
    phoneCode: "257",
    emoji: "🇧🇮",
  },
  {
    name: "Cambodia",
    code: "KH",
    phoneCode: "855",
    emoji: "🇰🇭",
  },
  {
    name: "Cameroon",
    code: "CM",
    phoneCode: "237",
    emoji: "🇨🇲",
  },
  {
    name: "Canada",
    code: "CA",
    phoneCode: "1",
    emoji: "🇨🇦",
  },
  {
    name: "Cape Verde",
    code: "CV",
    phoneCode: "238",
    emoji: "🇨🇻",
  },
  {
    name: "Central African Republic",
    code: "CF",
    phoneCode: "236",
    emoji: "🇨🇫",
  },
  {
    name: "Chad",
    code: "TD",
    phoneCode: "235",
    emoji: "🇹🇩",
  },
  {
    name: "Chile",
    code: "CL",
    phoneCode: "56",
    emoji: "🇨🇱",
  },
  {
    name: "China",
    code: "CN",
    phoneCode: "86",
    emoji: "🇨🇳",
  },
  {
    name: "Colombia",
    code: "CO",
    phoneCode: "57",
    emoji: "🇨🇴",
  },
  {
    name: "Comoros",
    code: "KM",
    phoneCode: "269",
    emoji: "🇰🇲",
  },
  {
    name: "Congo",
    code: "CG",
    phoneCode: "242",
    emoji: "🇨🇬",
  },
  {
    name: "Costa Rica",
    code: "CR",
    phoneCode: "506",
    emoji: "🇨🇷",
  },
  {
    name: "Croatia",
    code: "HR",
    phoneCode: "385",
    emoji: "🇭🇷",
  },
  {
    name: "Cuba",
    code: "CU",
    phoneCode: "53",
    emoji: "🇨🇺",
  },
  {
    name: "Cyprus",
    code: "CY",
    phoneCode: "357",
    emoji: "🇨🇾",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    phoneCode: "420",
    emoji: "🇨🇿",
  },
  {
    name: "Denmark",
    code: "DK",
    phoneCode: "45",
    emoji: "🇩🇰",
  },
  {
    name: "Djibouti",
    code: "DJ",
    phoneCode: "253",
    emoji: "🇩🇯",
  },
  {
    name: "Dominica",
    code: "DM",
    phoneCode: "1767",
    emoji: "🇩🇲",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    phoneCode: "1809",
    emoji: "🇩🇴",
  },
  {
    name: "East Timor",
    code: "TL",
    phoneCode: "670",
    emoji: "🇹🇱",
  },
  {
    name: "Ecuador",
    code: "EC",
    phoneCode: "593",
    emoji: "🇪🇨",
  },
  {
    name: "Egypt",
    code: "EG",
    phoneCode: "20",
    emoji: "🇪🇬",
  },
  {
    name: "El Salvador",
    code: "SV",
    phoneCode: "503",
    emoji: "🇸🇻",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    phoneCode: "240",
    emoji: "🇬🇶",
  },
  {
    name: "Eritrea",
    code: "ER",
    phoneCode: "291",
    emoji: "🇪🇷",
  },
  {
    name: "Estonia",
    code: "EE",
    phoneCode: "372",
    emoji: "🇪🇪",
  },
  {
    name: "Ethiopia",
    code: "ET",
    phoneCode: "251",
    emoji: "🇪🇹",
  },
  {
    name: "Fiji",
    code: "FJ",
    phoneCode: "679",
    emoji: "🇫🇯",
  },
  {
    name: "Finland",
    code: "FI",
    phoneCode: "358",
    emoji: "🇫🇮",
  },
  {
    name: "France",
    code: "FR",
    phoneCode: "33",
    emoji: "🇫🇷",
  },
  {
    name: "Gabon",
    code: "GA",
    phoneCode: "241",
    emoji: "🇬🇦",
  },
  {
    name: "Gambia",
    code: "GM",
    phoneCode: "220",
    emoji: "🇬🇲",
  },
  {
    name: "Georgia",
    code: "GE",
    phoneCode: "995",
    emoji: "🇬🇪",
  },
  {
    name: "Germany",
    code: "DE",
    phoneCode: "49",
    emoji: "🇩🇪",
  },
  {
    name: "Ghana",
    code: "GH",
    phoneCode: "233",
    emoji: "🇬🇭",
  },
  {
    name: "Greece",
    code: "GR",
    phoneCode: "30",
    emoji: "🇬🇷",
  },
  {
    name: "Grenada",
    code: "GD",
    phoneCode: "1473",
    emoji: "🇬🇩",
  },
  {
    name: "Guatemala",
    code: "GT",
    phoneCode: "502",
    emoji: "🇬🇹",
  },
  {
    name: "Guinea",
    code: "GN",
    phoneCode: "224",
    emoji: "🇬🇳",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    phoneCode: "245",
    emoji: "🇬🇼",
  },
  {
    name: "Guyana",
    code: "GY",
    phoneCode: "592",
    emoji: "🇬🇾",
  },
  {
    name: "Haiti",
    code: "HT",
    phoneCode: "509",
    emoji: "🇭🇹",
  },
  {
    name: "Honduras",
    code: "HN",
    phoneCode: "504",
    emoji: "🇭🇳",
  },
  {
    name: "Hungary",
    code: "HU",
    phoneCode: "36",
    emoji: "🇭🇺",
  },
  {
    name: "Iceland",
    code: "IS",
    phoneCode: "354",
    emoji: "🇮🇸",
  },
  {
    name: "India",
    code: "IN",
    phoneCode: "91",
    emoji: "🇮🇳",
  },
  {
    name: "Indonesia",
    code: "ID",
    phoneCode: "62",
    emoji: "🇮🇩",
  },
  {
    name: "Iran",
    code: "IR",
    phoneCode: "98",
    emoji: "🇮🇷",
  },
  {
    name: "Iraq",
    code: "IQ",
    phoneCode: "964",
    emoji: "🇮🇶",
  },
  {
    name: "Ireland",
    code: "IE",
    phoneCode: "353",
    emoji: "🇮🇪",
  },
  {
    name: "Israel",
    code: "IL",
    phoneCode: "972",
    emoji: "🇮🇱",
  },
  {
    name: "Italy",
    code: "IT",
    phoneCode: "39",
    emoji: "🇮🇹",
  },
  {
    name: "Jamaica",
    code: "JM",
    phoneCode: "1876",
    emoji: "🇯🇲",
  },
  {
    name: "Japan",
    code: "JP",
    phoneCode: "81",
    emoji: "🇯🇵",
  },
  {
    name: "Jordan",
    code: "JO",
    phoneCode: "962",
    emoji: "🇯🇴",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    phoneCode: "7",
    emoji: "🇰🇿",
  },
  {
    name: "Kenya",
    code: "KE",
    phoneCode: "254",
    emoji: "🇰🇪",
  },
  {
    name: "Kiribati",
    code: "KI",
    phoneCode: "686",
    emoji: "🇰🇮",
  },
  {
    name: "North Korea",
    code: "KP",
    phoneCode: "850",
    emoji: "🇰🇵",
  },
  {
    name: "South Korea",
    code: "KR",
    phoneCode: "82",
    emoji: "🇰🇷",
  },
  {
    name: "Kuwait",
    code: "KW",
    phoneCode: "965",
    emoji: "🇰🇼",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    phoneCode: "996",
    emoji: "🇰🇬",
  },
  {
    name: "Laos",
    code: "LA",
    phoneCode: "856",
    emoji: "🇱🇦",
  },
  {
    name: "Latvia",
    code: "LV",
    phoneCode: "371",
    emoji: "🇱🇻",
  },
  {
    name: "Lebanon",
    code: "LB",
    phoneCode: "961",
    emoji: "🇱🇧",
  },
  {
    name: "Lesotho",
    code: "LS",
    phoneCode: "266",
    emoji: "🇱🇸",
  },
  {
    name: "Liberia",
    code: "LR",
    phoneCode: "231",
    emoji: "🇱🇷",
  },
  {
    name: "Libya",
    code: "LY",
    phoneCode: "218",
    emoji: "🇱🇾",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    phoneCode: "423",
    emoji: "🇱🇮",
  },
  {
    name: "Lithuania",
    code: "LT",
    phoneCode: "370",
    emoji: "🇱🇹",
  },
  {
    name: "Luxembourg",
    code: "LU",
    phoneCode: "352",
    emoji: "🇱🇺",
  },
  {
    name: "Madagascar",
    code: "MG",
    phoneCode: "261",
    emoji: "🇲🇬",
  },
  {
    name: "Malawi",
    code: "MW",
    phoneCode: "265",
    emoji: "🇲🇼",
  },
  {
    name: "Malaysia",
    code: "MY",
    phoneCode: "60",
    emoji: "🇲🇾",
  },
  {
    name: "Maldives",
    code: "MV",
    phoneCode: "960",
    emoji: "🇲🇻",
  },
  {
    name: "Mali",
    code: "ML",
    phoneCode: "223",
    emoji: "🇲🇱",
  },
  {
    name: "Malta",
    code: "MT",
    phoneCode: "356",
    emoji: "🇲🇹",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    phoneCode: "692",
    emoji: "🇲🇭",
  },
  {
    name: "Mauritania",
    code: "MR",
    phoneCode: "222",
    emoji: "🇲🇷",
  },
  {
    name: "Mauritius",
    code: "MU",
    phoneCode: "230",
    emoji: "🇲🇺",
  },
  {
    name: "Mexico",
    code: "MX",
    phoneCode: "52",
    emoji: "🇲🇽",
  },
  {
    name: "Micronesia",
    code: "FM",
    phoneCode: "691",
    emoji: "🇫🇲",
  },
  {
    name: "Moldova",
    code: "MD",
    phoneCode: "373",
    emoji: "🇲🇩",
  },
  {
    name: "Monaco",
    code: "MC",
    phoneCode: "377",
    emoji: "🇲🇨",
  },
  {
    name: "Mongolia",
    code: "MN",
    phoneCode: "976",
    emoji: "🇲🇳",
  },
  {
    name: "Montenegro",
    code: "ME",
    phoneCode: "382",
    emoji: "🇲🇪",
  },
  {
    name: "Morocco",
    code: "MA",
    phoneCode: "212",
    emoji: "🇲🇦",
  },
  {
    name: "Mozambique",
    code: "MZ",
    phoneCode: "258",
    emoji: "🇲🇿",
  },
  {
    name: "Myanmar",
    code: "MM",
    phoneCode: "95",
    emoji: "🇲🇲",
  },
  {
    name: "Namibia",
    code: "NA",
    phoneCode: "264",
    emoji: "🇳🇦",
  },
  {
    name: "Nauru",
    code: "NR",
    phoneCode: "674",
    emoji: "🇳🇷",
  },
  {
    name: "Nepal",
    code: "NP",
    phoneCode: "977",
    emoji: "🇳🇵",
  },
  {
    name: "Netherlands",
    code: "NL",
    phoneCode: "31",
    emoji: "🇳🇱",
  },
  {
    name: "New Zealand",
    code: "NZ",
    phoneCode: "64",
    emoji: "🇳🇿",
  },
  {
    name: "Nicaragua",
    code: "NI",
    phoneCode: "505",
    emoji: "🇳🇮",
  },
  {
    name: "Niger",
    code: "NE",
    phoneCode: "227",
    emoji: "🇳🇪",
  },
  {
    name: "Nigeria",
    code: "NG",
    phoneCode: "234",
    emoji: "🇳🇬",
  },
  {
    name: "Norway",
    code: "NO",
    phoneCode: "47",
    emoji: "🇳🇴",
  },
  {
    name: "Oman",
    code: "OM",
    phoneCode: "968",
    emoji: "🇴🇲",
  },
  {
    name: "Pakistan",
    code: "PK",
    phoneCode: "92",
    emoji: "🇵🇰",
  },
  {
    name: "Palau",
    code: "PW",
    phoneCode: "680",
    emoji: "🇵🇼",
  },
  {
    name: "Palestine",
    code: "PS",
    phoneCode: "970",
    emoji: "🇵🇸",
  },
  {
    name: "Panama",
    code: "PA",
    phoneCode: "507",
    emoji: "🇵🇦",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    phoneCode: "675",
    emoji: "🇵🇬",
  },
  {
    name: "Paraguay",
    code: "PY",
    phoneCode: "595",
    emoji: "🇵🇾",
  },
  {
    name: "Peru",
    code: "PE",
    phoneCode: "51",
    emoji: "🇵🇪",
  },
  {
    name: "Philippines",
    code: "PH",
    phoneCode: "63",
    emoji: "🇵🇭",
  },
  {
    name: "Poland",
    code: "PL",
    phoneCode: "48",
    emoji: "🇵🇱",
  },
  {
    name: "Portugal",
    code: "PT",
    phoneCode: "351",
    emoji: "🇵🇹",
  },
  {
    name: "Qatar",
    code: "QA",
    phoneCode: "974",
    emoji: "🇶🇦",
  },
  {
    name: "Romania",
    code: "RO",
    phoneCode: "40",
    emoji: "🇷🇴",
  },
  {
    name: "Russia",
    code: "RU",
    phoneCode: "7",
    emoji: "🇷🇺",
  },
  {
    name: "Rwanda",
    code: "RW",
    phoneCode: "250",
    emoji: "🇷🇼",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    phoneCode: "1869",
    emoji: "🇰🇳",
  },
  {
    name: "Saint Lucia",
    code: "LC",
    phoneCode: "1758",
    emoji: "🇱🇨",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    phoneCode: "1784",
    emoji: "🇻🇨",
  },
  {
    name: "Samoa",
    code: "WS",
    phoneCode: "685",
    emoji: "🇼🇸",
  },
  {
    name: "San Marino",
    code: "SM",
    phoneCode: "378",
    emoji: "🇸🇲",
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    phoneCode: "239",
    emoji: "🇸🇹",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    phoneCode: "966",
    emoji: "🇸🇦",
  },
  {
    name: "Senegal",
    code: "SN",
    phoneCode: "221",
    emoji: "🇸🇳",
  },
  {
    name: "Serbia",
    code: "RS",
    phoneCode: "381",
    emoji: "🇷🇸",
  },
  {
    name: "Seychelles",
    code: "SC",
    phoneCode: "248",
    emoji: "🇸🇨",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    phoneCode: "232",
    emoji: "🇸🇱",
  },
  {
    name: "Singapore",
    code: "SG",
    phoneCode: "65",
    emoji: "🇸🇬",
  },
  {
    name: "Slovakia",
    code: "SK",
    phoneCode: "421",
    emoji: "🇸🇰",
  },
  {
    name: "Slovenia",
    code: "SI",
    phoneCode: "386",
    emoji: "🇸🇮",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    phoneCode: "677",
    emoji: "🇸🇧",
  },
  {
    name: "Somalia",
    code: "SO",
    phoneCode: "252",
    emoji: "🇸🇴",
  },
  {
    name: "South Africa",
    code: "ZA",
    phoneCode: "27",
    emoji: "🇿🇦",
  },
  {
    name: "South Sudan",
    code: "SS",
    phoneCode: "211",
    emoji: "🇸🇸",
  },
  {
    name: "Spain",
    code: "ES",
    phoneCode: "34",
    emoji: "🇪🇸",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    phoneCode: "94",
    emoji: "🇱🇰",
  },
  {
    name: "Sudan",
    code: "SD",
    phoneCode: "249",
    emoji: "🇸🇩",
  },
  {
    name: "Suriname",
    code: "SR",
    phoneCode: "597",
    emoji: "🇸🇷",
  },
  {
    name: "Sweden",
    code: "SE",
    phoneCode: "46",
    emoji: "🇸🇪",
  },
  {
    name: "Switzerland",
    code: "CH",
    phoneCode: "41",
    emoji: "🇨🇭",
  },
  {
    name: "Syria",
    code: "SY",
    phoneCode: "963",
    emoji: "🇸🇾",
  },
  {
    name: "Taiwan",
    code: "TW",
    phoneCode: "886",
    emoji: "🇹🇼",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    phoneCode: "992",
    emoji: "🇹🇯",
  },
  {
    name: "Tanzania",
    code: "TZ",
    phoneCode: "255",
    emoji: "🇹🇿",
  },
  {
    name: "Thailand",
    code: "TH",
    phoneCode: "66",
    emoji: "🇹🇭",
  },
  {
    name: "Togo",
    code: "TG",
    phoneCode: "228",
    emoji: "🇹🇬",
  },
  {
    name: "Tonga",
    code: "TO",
    phoneCode: "676",
    emoji: "🇹🇴",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    phoneCode: "1868",
    emoji: "🇹🇹",
  },
  {
    name: "Tunisia",
    code: "TN",
    phoneCode: "216",
    emoji: "🇹🇳",
  },
  {
    name: "Turkey",
    code: "TR",
    phoneCode: "90",
    emoji: "🇹🇷",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    phoneCode: "993",
    emoji: "🇹🇲",
  },
  {
    name: "Tuvalu",
    code: "TV",
    phoneCode: "688",
    emoji: "🇹🇻",
  },
  {
    name: "Uganda",
    code: "UG",
    phoneCode: "256",
    emoji: "🇺🇬",
  },
  {
    name: "Ukraine",
    code: "UA",
    phoneCode: "380",
    emoji: "🇺🇦",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    phoneCode: "971",
    emoji: "🇦🇪",
  },
  {
    name: "United Kingdom",
    code: "GB",
    phoneCode: "44",
    emoji: "🇬🇧",
  },
  {
    name: "United States",
    code: "US",
    phoneCode: "1",
    emoji: "🇺🇸",
  },
  {
    name: "Uruguay",
    code: "UY",
    phoneCode: "598",
    emoji: "🇺🇾",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    phoneCode: "998",
    emoji: "🇺🇿",
  },
  {
    name: "Vanuatu",
    code: "VU",
    phoneCode: "678",
    emoji: "🇻🇺",
  },
  {
    name: "Vatican City",
    code: "VA",
    phoneCode: "379",
    emoji: "🇻🇦",
  },
  {
    name: "Venezuela",
    code: "VE",
    phoneCode: "58",
    emoji: "🇻🇪",
  },
  {
    name: "Vietnam",
    code: "VN",
    phoneCode: "84",
    emoji: "🇻🇳",
  },
  {
    name: "Yemen",
    code: "YE",
    phoneCode: "967",
    emoji: "🇾🇪",
  },
  {
    name: "Zambia",
    code: "ZM",
    phoneCode: "260",
    emoji: "🇿🇲",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    phoneCode: "263",
    emoji: "🇿🇼",
  },
];