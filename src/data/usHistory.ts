export interface USHistoryCard {
  term: string;
  answer: string;
}

export interface USHistoryEra {
  name: string;
  cards: USHistoryCard[];
}

export const usHistoryEras: USHistoryEra[] = [
  {
    name: "Founding Era",
    cards: [
      {
        term: "Declaration of Independence",
        answer: "Adopted on July 4, 1776, it announced the colonies' separation from Great Britain.",
      },
      {
        term: "Articles of Confederation",
        answer: "The first national government framework, later replaced because it left the central government weak.",
      },
      {
        term: "Constitutional Convention",
        answer: "The 1787 Philadelphia meeting that produced the United States Constitution.",
      },
      {
        term: "Federalism",
        answer: "A system that divides power between the national government and state governments.",
      },
      {
        term: "Bill of Rights",
        answer: "The first ten amendments to the Constitution, ratified in 1791.",
      },
    ],
  },
  {
    name: "Early Republic",
    cards: [
      {
        term: "Louisiana Purchase",
        answer: "The 1803 land purchase from France that doubled the size of the United States.",
      },
      {
        term: "Marbury v. Madison",
        answer: "The 1803 Supreme Court case that established judicial review.",
      },
      {
        term: "War of 1812",
        answer: "A conflict between the United States and Great Britain that lasted from 1812 to 1815.",
      },
      {
        term: "Monroe Doctrine",
        answer: "The 1823 policy warning European powers against new colonization in the Americas.",
      },
      {
        term: "Indian Removal Act",
        answer: "The 1830 law that forced many Native nations from southeastern homelands toward lands west of the Mississippi.",
      },
    ],
  },
  {
    name: "Civil War Era",
    cards: [
      {
        term: "Abolitionism",
        answer: "The movement to end slavery in the United States.",
      },
      {
        term: "Dred Scott v. Sandford",
        answer: "The 1857 Supreme Court ruling that denied citizenship to enslaved people and their descendants.",
      },
      {
        term: "Emancipation Proclamation",
        answer: "Lincoln's 1863 order declaring enslaved people in rebelling Confederate areas free.",
      },
      {
        term: "Gettysburg Address",
        answer: "Lincoln's 1863 speech that framed the Civil War as a test of democratic government.",
      },
      {
        term: "Reconstruction Amendments",
        answer: "The 13th, 14th, and 15th Amendments abolished slavery and expanded citizenship and voting rights.",
      },
    ],
  },
  {
    name: "Modern America",
    cards: [
      {
        term: "Progressive Era",
        answer: "A reform period around 1890 to 1920 focused on political, labor, consumer, and social changes.",
      },
      {
        term: "New Deal",
        answer: "Franklin D. Roosevelt's Great Depression programs to provide relief, recovery, and reform.",
      },
      {
        term: "Brown v. Board of Education",
        answer: "The 1954 Supreme Court case that ruled public school segregation unconstitutional.",
      },
      {
        term: "Civil Rights Act of 1964",
        answer: "A landmark law banning discrimination in public accommodations, employment, and federally funded programs.",
      },
      {
        term: "Watergate",
        answer: "The political scandal that led President Richard Nixon to resign in 1974.",
      },
    ],
  },
];
