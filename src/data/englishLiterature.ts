export interface EnglishLiteratureCard {
  prompt: string;
  answer: string;
}

export interface EnglishLiteratureGroup {
  name: string;
  cards: EnglishLiteratureCard[];
}

export const englishLiteratureGroups: EnglishLiteratureGroup[] = [
  {
    name: "Canon Authors",
    cards: [
      {
        prompt: "Who wrote Pride and Prejudice?",
        answer: "Jane Austen.",
      },
      {
        prompt: "Who wrote Jane Eyre?",
        answer: "Charlotte Brontë.",
      },
      {
        prompt: "Who wrote Great Expectations?",
        answer: "Charles Dickens.",
      },
      {
        prompt: "Who wrote Oliver Twist?",
        answer: "Charles Dickens.",
      },
      {
        prompt: "Who wrote Ulysses?",
        answer: "James Joyce.",
      },
    ],
  },
  {
    name: "Major Works",
    cards: [
      {
        prompt: "What Shakespeare tragedy features the Prince of Denmark?",
        answer: "Hamlet.",
      },
      {
        prompt: "What Brontë novel features Heathcliff and the moors?",
        answer: "Wuthering Heights.",
      },
      {
        prompt: "What Dickens novel follows Ebenezer Scrooge?",
        answer: "A Christmas Carol.",
      },
      {
        prompt: "What Orwell novel depicts Oceania and Big Brother?",
        answer: "Nineteen Eighty-Four.",
      },
      {
        prompt: "What Woolf novel follows Clarissa Dalloway through one day in London?",
        answer: "Mrs Dalloway.",
      },
    ],
  },
  {
    name: "Drama And Stage",
    cards: [
      {
        prompt: "Which playwright wrote The Importance of Being Earnest?",
        answer: "Oscar Wilde.",
      },
      {
        prompt: "Which playwright wrote Waiting for Godot?",
        answer: "Samuel Beckett.",
      },
      {
        prompt: "Which Shakespeare play features the witches, Macbeth, and Lady Macbeth?",
        answer: "Macbeth.",
      },
      {
        prompt: "Which Shakespeare comedy features Rosalind and the Forest of Arden?",
        answer: "As You Like It.",
      },
      {
        prompt: "Which Restoration playwright wrote The Way of the World?",
        answer: "William Congreve.",
      },
    ],
  },
  {
    name: "Poetry And Forms",
    cards: [
      {
        prompt: "Which poet wrote The Waste Land and 'The Love Song of J. Alfred Prufrock'?",
        answer: "T. S. Eliot.",
      },
      {
        prompt: "Which poet wrote 'Ode to a Nightingale' and 'To Autumn'?",
        answer: "John Keats.",
      },
      {
        prompt: "Which poet wrote 'I wandered lonely as a cloud'?",
        answer: "William Wordsworth.",
      },
      {
        prompt: "What is blank verse?",
        answer: "Unrhymed iambic pentameter.",
      },
      {
        prompt: "What is a sonnet?",
        answer: "A 14-line poem with a set rhyme scheme or structure.",
      },
    ],
  },
];
