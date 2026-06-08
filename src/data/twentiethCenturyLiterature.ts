export interface TwentiethCenturyLiteratureCard {
  prompt: string;
  answer: string;
}

export interface TwentiethCenturyLiteratureGroup {
  name: string;
  cards: TwentiethCenturyLiteratureCard[];
}

export const twentiethCenturyLiteratureGroups: TwentiethCenturyLiteratureGroup[] = [
  {
    name: "Authors And Works",
    cards: [
      {
        prompt: "Who wrote One Hundred Years of Solitude?",
        answer: "Gabriel García Márquez.",
      },
      {
        prompt: "Who wrote The Stranger?",
        answer: "Albert Camus.",
      },
      {
        prompt: "Who wrote Things Fall Apart?",
        answer: "Chinua Achebe.",
      },
      {
        prompt: "Who wrote The Handmaid's Tale?",
        answer: "Margaret Atwood.",
      },
      {
        prompt: "Who wrote Beloved?",
        answer: "Toni Morrison.",
      },
    ],
  },
  {
    name: "Modernism",
    cards: [
      {
        prompt: "What James Joyce novel follows Leopold Bloom through Dublin on June 16, 1904?",
        answer: "Ulysses.",
      },
      {
        prompt: "What Virginia Woolf novel centers on a planned trip to a Scottish lighthouse?",
        answer: "To the Lighthouse.",
      },
      {
        prompt: "Which poet wrote The Waste Land?",
        answer: "T. S. Eliot.",
      },
      {
        prompt: "What narrative technique presents a character's continuous flow of thoughts and perceptions?",
        answer: "Stream of consciousness.",
      },
      {
        prompt: "What Franz Kafka novella begins with Gregor Samsa transformed into a giant insect?",
        answer: "The Metamorphosis.",
      },
    ],
  },
  {
    name: "Postwar Literature",
    cards: [
      {
        prompt: "What Samuel Beckett play follows Vladimir and Estragon as they wait?",
        answer: "Waiting for Godot.",
      },
      {
        prompt: "What George Orwell novel depicts Big Brother and the totalitarian state of Oceania?",
        answer: "Nineteen Eighty-Four.",
      },
      {
        prompt: "What Joseph Heller novel gave its name to a no-win logical predicament?",
        answer: "Catch-22.",
      },
      {
        prompt: "What Ralph Ellison novel is narrated by an unnamed Black man reflecting on his life in America?",
        answer: "Invisible Man.",
      },
      {
        prompt: "What Kurt Vonnegut novel follows Billy Pilgrim, who becomes 'unstuck in time'?",
        answer: "Slaughterhouse-Five.",
      },
    ],
  },
  {
    name: "Global Voices And Forms",
    cards: [
      {
        prompt: "Which Chilean poet wrote Twenty Love Poems and a Song of Despair?",
        answer: "Pablo Neruda.",
      },
      {
        prompt: "Which Nigerian playwright became the first Black African Nobel laureate in Literature?",
        answer: "Wole Soyinka.",
      },
      {
        prompt: "What literary mode blends realistic settings with extraordinary or supernatural events?",
        answer: "Magical realism.",
      },
      {
        prompt: "What Salman Rushdie novel follows children born around the moment of India's independence?",
        answer: "Midnight's Children.",
      },
      {
        prompt: "What Jorge Luis Borges collection includes 'The Library of Babel' and 'The Garden of Forking Paths'?",
        answer: "Ficciones.",
      },
    ],
  },
];
