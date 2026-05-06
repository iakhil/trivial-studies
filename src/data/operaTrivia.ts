export interface OperaTriviaCard {
  prompt: string;
  answer: string;
}

export interface OperaTriviaGroup {
  name: string;
  cards: OperaTriviaCard[];
}

export const operaTriviaGroups: OperaTriviaGroup[] = [
  {
    name: "Famous Operas",
    cards: [
      {
        prompt: "Which opera features the aria 'Nessun dorma'?",
        answer: "Turandot by Giacomo Puccini.",
      },
      {
        prompt: "Which Mozart opera follows the servant Figaro on his wedding day?",
        answer: "The Marriage of Figaro.",
      },
      {
        prompt: "Which opera tells the story of Carmen, Don Jose, and Escamillo?",
        answer: "Carmen by Georges Bizet.",
      },
      {
        prompt: "Which Verdi opera is set in ancient Egypt?",
        answer: "Aida.",
      },
      {
        prompt: "Which Puccini opera centers on the singer Tosca and the painter Cavaradossi?",
        answer: "Tosca.",
      },
    ],
  },
  {
    name: "Composers",
    cards: [
      {
        prompt: "Who composed The Magic Flute?",
        answer: "Wolfgang Amadeus Mozart.",
      },
      {
        prompt: "Who composed La traviata, Rigoletto, and Aida?",
        answer: "Giuseppe Verdi.",
      },
      {
        prompt: "Who composed La boheme, Madama Butterfly, and Turandot?",
        answer: "Giacomo Puccini.",
      },
      {
        prompt: "Which German composer created the Ring cycle?",
        answer: "Richard Wagner.",
      },
      {
        prompt: "Who composed The Barber of Seville?",
        answer: "Gioachino Rossini.",
      },
    ],
  },
  {
    name: "Voice Types",
    cards: [
      {
        prompt: "What is the highest common female voice type in opera?",
        answer: "Soprano.",
      },
      {
        prompt: "What is the lower female voice type often used for witches, mothers, or trouser roles?",
        answer: "Mezzo-soprano.",
      },
      {
        prompt: "What is the highest common male voice type?",
        answer: "Tenor.",
      },
      {
        prompt: "What male voice type sits between tenor and bass?",
        answer: "Baritone.",
      },
      {
        prompt: "What is the lowest common male voice type?",
        answer: "Bass.",
      },
    ],
  },
  {
    name: "Terms And Trivia",
    cards: [
      {
        prompt: "What is an aria?",
        answer: "A solo vocal piece in an opera, often expressing a character's emotions.",
      },
      {
        prompt: "What is a libretto?",
        answer: "The written text or script of an opera.",
      },
      {
        prompt: "What does overture mean in opera?",
        answer: "An instrumental introduction played before the opera begins.",
      },
      {
        prompt: "What is recitative?",
        answer: "Speech-like singing that moves the plot forward between arias and ensembles.",
      },
      {
        prompt: "What is bel canto?",
        answer: "An Italian vocal style focused on beautiful tone, agility, and expressive singing.",
      },
    ],
  },
];
