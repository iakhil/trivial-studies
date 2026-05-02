export interface MountainRangeCard {
  range: string;
  location: string;
}

export interface MountainRangeRegion {
  name: string;
  cards: MountainRangeCard[];
}

export const mountainRangeRegions: MountainRangeRegion[] = [
  {
    name: "Asia",
    cards: [
      {
        range: "Himalayas",
        location: "South Asia across Nepal, India, Bhutan, China, and Pakistan.",
      },
      {
        range: "Karakoram",
        location: "Northern Pakistan, northwestern India, and western China.",
      },
      {
        range: "Hindu Kush",
        location: "Afghanistan and northwestern Pakistan.",
      },
      {
        range: "Tien Shan",
        location: "Kyrgyzstan, Kazakhstan, and western China.",
      },
      {
        range: "Altai Mountains",
        location: "Where Russia, China, Mongolia, and Kazakhstan meet.",
      },
    ],
  },
  {
    name: "Europe",
    cards: [
      {
        range: "Alps",
        location: "Central Europe from France and Switzerland to Austria and Slovenia.",
      },
      {
        range: "Pyrenees",
        location: "Between Spain and France, with Andorra in the middle.",
      },
      {
        range: "Carpathians",
        location: "An arc across Central and Eastern Europe, especially Slovakia, Ukraine, and Romania.",
      },
      {
        range: "Scandinavian Mountains",
        location: "Running through Norway and western Sweden.",
      },
      {
        range: "Caucasus",
        location: "Between the Black and Caspian seas, centered on Georgia, Russia, Armenia, and Azerbaijan.",
      },
    ],
  },
  {
    name: "Africa",
    cards: [
      {
        range: "Atlas Mountains",
        location: "Northwestern Africa across Morocco, Algeria, and Tunisia.",
      },
      {
        range: "Drakensberg",
        location: "Eastern South Africa and Lesotho.",
      },
      {
        range: "Rwenzori Mountains",
        location: "On the border of Uganda and the Democratic Republic of the Congo.",
      },
      {
        range: "Tibesti Mountains",
        location: "Northern Chad and southern Libya.",
      },
      {
        range: "Ahaggar Mountains",
        location: "Southern Algeria in the central Sahara.",
      },
    ],
  },
  {
    name: "North America",
    cards: [
      {
        range: "Rocky Mountains",
        location: "Western Canada and the western United States.",
      },
      {
        range: "Appalachian Mountains",
        location: "Eastern United States and southeastern Canada.",
      },
      {
        range: "Alaska Range",
        location: "South-central Alaska in the United States.",
      },
      {
        range: "Sierra Nevada",
        location: "Eastern California and western Nevada in the United States.",
      },
      {
        range: "Cascade Range",
        location: "The Pacific Northwest of the United States and southwestern Canada.",
      },
    ],
  },
  {
    name: "South America",
    cards: [
      {
        range: "Andes",
        location: "Along the western edge of South America from Venezuela to Chile and Argentina.",
      },
      {
        range: "Sierra Nevada de Santa Marta",
        location: "Northern Colombia near the Caribbean coast.",
      },
      {
        range: "Cordillera Blanca",
        location: "A high Andean range in central Peru.",
      },
      {
        range: "Serra do Mar",
        location: "Along the southeastern Atlantic coast of Brazil.",
      },
      {
        range: "Patagonian Andes",
        location: "Southern Chile and southern Argentina.",
      },
    ],
  },
  {
    name: "Oceania",
    cards: [
      {
        range: "Great Dividing Range",
        location: "Eastern Australia.",
      },
      {
        range: "Southern Alps",
        location: "The South Island of New Zealand.",
      },
      {
        range: "Owen Stanley Range",
        location: "Southeastern Papua New Guinea.",
      },
      {
        range: "Central Range",
        location: "Stretching across New Guinea in Indonesia and Papua New Guinea.",
      },
      {
        range: "Flinders Ranges",
        location: "South Australia.",
      },
    ],
  },
];
