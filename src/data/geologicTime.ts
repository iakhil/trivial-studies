export interface GeologicTimeCard {
  name: string;
  answer: string;
}

export interface GeologicTimeGroup {
  name: string;
  cards: GeologicTimeCard[];
}

export const geologicTimeGroups: GeologicTimeGroup[] = [
  {
    name: "Eons",
    cards: [
      {
        name: "Hadean Eon",
        answer: "About 4.6 to 4.0 billion years ago; Earth formed, cooled, and developed its earliest crust and oceans.",
      },
      {
        name: "Archean Eon",
        answer: "About 4.0 to 2.5 billion years ago; the first known life appeared, mostly simple microbial life.",
      },
      {
        name: "Proterozoic Eon",
        answer: "About 2.5 billion to 541 million years ago; oxygen rose in the atmosphere and early complex life evolved.",
      },
      {
        name: "Phanerozoic Eon",
        answer: "About 541 million years ago to today; abundant visible fossils record major animal and plant evolution.",
      },
    ],
  },
  {
    name: "Eras",
    cards: [
      {
        name: "Paleozoic Era",
        answer: "About 541 to 252 million years ago; marine animals diversified, plants and animals colonized land, and it ended with the largest mass extinction.",
      },
      {
        name: "Mesozoic Era",
        answer: "About 252 to 66 million years ago; the age of dinosaurs, with the first birds, mammals, and flowering plants.",
      },
      {
        name: "Cenozoic Era",
        answer: "About 66 million years ago to today; mammals, birds, grasses, and eventually humans became prominent.",
      },
    ],
  },
  {
    name: "Paleozoic Periods",
    cards: [
      {
        name: "Cambrian Period",
        answer: "About 541 to 485 million years ago; the Cambrian explosion produced many major animal body plans.",
      },
      {
        name: "Ordovician Period",
        answer: "About 485 to 444 million years ago; marine life flourished and the first simple land plants appeared.",
      },
      {
        name: "Silurian Period",
        answer: "About 444 to 419 million years ago; jawed fish diversified and vascular plants spread on land.",
      },
      {
        name: "Devonian Period",
        answer: "About 419 to 359 million years ago; often called the age of fishes, with early forests and the first tetrapods.",
      },
      {
        name: "Carboniferous Period",
        answer: "About 359 to 299 million years ago; vast coal swamps, giant insects, and early reptiles were common.",
      },
      {
        name: "Permian Period",
        answer: "About 299 to 252 million years ago; Pangaea assembled and the period ended with Earth's largest mass extinction.",
      },
    ],
  },
  {
    name: "Mesozoic Periods",
    cards: [
      {
        name: "Triassic Period",
        answer: "About 252 to 201 million years ago; dinosaurs, pterosaurs, and early mammals first appeared after the Permian extinction.",
      },
      {
        name: "Jurassic Period",
        answer: "About 201 to 145 million years ago; giant sauropods, large marine reptiles, and the first birds thrived.",
      },
      {
        name: "Cretaceous Period",
        answer: "About 145 to 66 million years ago; flowering plants spread, many famous dinosaurs lived, and the period ended with a mass extinction.",
      },
    ],
  },
  {
    name: "Cenozoic Periods",
    cards: [
      {
        name: "Paleogene Period",
        answer: "About 66 to 23 million years ago; mammals rapidly diversified after the non-avian dinosaurs went extinct.",
      },
      {
        name: "Neogene Period",
        answer: "About 23 to 2.58 million years ago; grasslands expanded and many modern mammal groups evolved.",
      },
      {
        name: "Quaternary Period",
        answer: "About 2.58 million years ago to today; repeated ice ages occurred and Homo sapiens appeared.",
      },
    ],
  },
];
