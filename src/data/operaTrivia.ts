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
      {
        prompt: "Which opera features the tragic geisha Cio-Cio-San?",
        answer: "Madama Butterfly by Giacomo Puccini.",
      },
      {
        prompt: "Which Verdi opera includes the famous chorus 'Va, pensiero'?",
        answer: "Nabucco.",
      },
      {
        prompt: "Which Mozart opera follows Don Giovanni and his servant Leporello?",
        answer: "Don Giovanni.",
      },
      {
        prompt: "Which Wagner opera begins the four-opera Ring cycle?",
        answer: "Das Rheingold.",
      },
      {
        prompt: "Which Gershwin opera includes 'Summertime'?",
        answer: "Porgy and Bess.",
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
      {
        prompt: "Who composed The Tales of Hoffmann?",
        answer: "Jacques Offenbach.",
      },
      {
        prompt: "Who composed Norma and I puritani?",
        answer: "Vincenzo Bellini.",
      },
      {
        prompt: "Who composed Lucia di Lammermoor and Don Pasquale?",
        answer: "Gaetano Donizetti.",
      },
      {
        prompt: "Who composed Salome and Der Rosenkavalier?",
        answer: "Richard Strauss.",
      },
      {
        prompt: "Who composed Wozzeck?",
        answer: "Alban Berg.",
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
      {
        prompt: "What is a coloratura soprano known for?",
        answer: "High, agile singing with fast runs, trills, and ornamentation.",
      },
      {
        prompt: "What is a heldentenor?",
        answer: "A powerful dramatic tenor voice often associated with Wagner roles.",
      },
      {
        prompt: "What is a countertenor?",
        answer: "A high male voice type often singing in an alto or mezzo-soprano range.",
      },
      {
        prompt: "What is a basso profundo?",
        answer: "An especially deep bass voice.",
      },
      {
        prompt: "What is a trouser role?",
        answer: "A male character sung by a female singer, usually a mezzo-soprano or soprano.",
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
      {
        prompt: "What is an ensemble in opera?",
        answer: "A passage sung by multiple characters at the same time.",
      },
      {
        prompt: "What is a leitmotif?",
        answer: "A recurring musical idea associated with a character, object, emotion, or theme.",
      },
      {
        prompt: "What is opera buffa?",
        answer: "Italian comic opera.",
      },
      {
        prompt: "What is opera seria?",
        answer: "A serious style of Italian opera, often based on heroic or mythological subjects.",
      },
      {
        prompt: "What is a surtitles display used for?",
        answer: "Showing translated text above or near the stage during a performance.",
      },
    ],
  },
  {
    name: "Houses And History",
    cards: [
      {
        prompt: "Which Milan opera house is one of Italy's most famous opera venues?",
        answer: "La Scala.",
      },
      {
        prompt: "Which New York opera company performs at Lincoln Center?",
        answer: "The Metropolitan Opera.",
      },
      {
        prompt: "Which Sydney landmark contains a major opera house?",
        answer: "The Sydney Opera House.",
      },
      {
        prompt: "Which Venice opera house has a name meaning 'the phoenix'?",
        answer: "Teatro La Fenice.",
      },
      {
        prompt: "Which German city hosts a festival strongly associated with Wagner's operas?",
        answer: "Bayreuth.",
      },
      {
        prompt: "Which Florentine artistic circle helped inspire early opera around 1600?",
        answer: "The Florentine Camerata.",
      },
      {
        prompt: "Which composer wrote L'Orfeo, one of the earliest great operas?",
        answer: "Claudio Monteverdi.",
      },
      {
        prompt: "Which opera house is associated with the Vienna State Opera Ball?",
        answer: "The Vienna State Opera.",
      },
      {
        prompt: "Which city is home to the Royal Opera House at Covent Garden?",
        answer: "London.",
      },
      {
        prompt: "Which annual festival in Austria is known for opera, drama, and classical music?",
        answer: "The Salzburg Festival.",
      },
    ],
  },
];
