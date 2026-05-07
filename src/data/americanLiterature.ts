export interface AmericanLiteratureCard {
  prompt: string;
  answer: string;
}

export interface AmericanLiteratureGroup {
  name: string;
  cards: AmericanLiteratureCard[];
}

export const americanLiteratureGroups: AmericanLiteratureGroup[] = [
  {
    name: "Authors",
    cards: [
      {
        prompt: "Who wrote The Scarlet Letter?",
        answer: "Nathaniel Hawthorne.",
      },
      {
        prompt: "Who wrote Moby-Dick?",
        answer: "Herman Melville.",
      },
      {
        prompt: "Who wrote Adventures of Huckleberry Finn?",
        answer: "Mark Twain.",
      },
      {
        prompt: "Who wrote The Great Gatsby?",
        answer: "F. Scott Fitzgerald.",
      },
      {
        prompt: "Who wrote Their Eyes Were Watching God?",
        answer: "Zora Neale Hurston.",
      },
    ],
  },
  {
    name: "Major Works",
    cards: [
      {
        prompt: "What novel follows Hester Prynne in Puritan New England?",
        answer: "The Scarlet Letter.",
      },
      {
        prompt: "What novel follows Ishmael, Captain Ahab, and the whale?",
        answer: "Moby-Dick.",
      },
      {
        prompt: "What 1925 novel explores wealth, longing, and the American Dream?",
        answer: "The Great Gatsby.",
      },
      {
        prompt: "What novel follows Janie Crawford's search for voice and independence?",
        answer: "Their Eyes Were Watching God.",
      },
      {
        prompt: "What Steinbeck novel follows the Joad family during the Dust Bowl?",
        answer: "The Grapes of Wrath.",
      },
    ],
  },
  {
    name: "Movements",
    cards: [
      {
        prompt: "What movement emphasized intuition, nature, and individual conscience?",
        answer: "Transcendentalism.",
      },
      {
        prompt: "What late 1800s style focused on ordinary life and believable detail?",
        answer: "Realism.",
      },
      {
        prompt: "What style suggested people are shaped by heredity, environment, and social forces?",
        answer: "Naturalism.",
      },
      {
        prompt: "What 1920s movement celebrated Black art, writing, music, and culture?",
        answer: "The Harlem Renaissance.",
      },
      {
        prompt: "What movement broke from traditional forms after World War I?",
        answer: "Modernism.",
      },
    ],
  },
  {
    name: "Poetry And Terms",
    cards: [
      {
        prompt: "Which poet is known for Leaves of Grass and free verse?",
        answer: "Walt Whitman.",
      },
      {
        prompt: "Which poet wrote compact poems often marked by dashes and slant rhyme?",
        answer: "Emily Dickinson.",
      },
      {
        prompt: "What is free verse?",
        answer: "Poetry without a regular meter or rhyme scheme.",
      },
      {
        prompt: "What is regionalism in American literature?",
        answer: "Writing that emphasizes the speech, customs, landscape, and culture of a specific region.",
      },
      {
        prompt: "What is the American Dream as a literary theme?",
        answer: "The idea that success and fulfillment can be achieved through ambition, work, and opportunity.",
      },
    ],
  },
];
