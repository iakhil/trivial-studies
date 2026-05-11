export interface ShakespeareTriviaCard {
  prompt: string;
  answer: string;
}

export interface ShakespeareTriviaGroup {
  name: string;
  cards: ShakespeareTriviaCard[];
}

export const shakespeareTriviaGroups: ShakespeareTriviaGroup[] = [
  {
    name: "Famous Plays",
    cards: [
      {
        prompt: "Which tragedy features Prince Hamlet and the kingdom of Denmark?",
        answer: "Hamlet.",
      },
      {
        prompt: "Which play follows two young lovers from feuding families in Verona?",
        answer: "Romeo and Juliet.",
      },
      {
        prompt: "Which tragedy centers on a Scottish general encouraged by prophecy and ambition?",
        answer: "Macbeth.",
      },
      {
        prompt: "Which comedy includes mistaken identities, shipwrecked twins, and the land of Illyria?",
        answer: "Twelfth Night.",
      },
      {
        prompt: "Which history play contains the St. Crispin's Day speech?",
        answer: "Henry V.",
      },
    ],
  },
  {
    name: "Characters",
    cards: [
      {
        prompt: "Who is the witty heroine of Much Ado About Nothing?",
        answer: "Beatrice.",
      },
      {
        prompt: "Who is the jealous Venetian general manipulated by Iago?",
        answer: "Othello.",
      },
      {
        prompt: "Who is King Lear's youngest and most honest daughter?",
        answer: "Cordelia.",
      },
      {
        prompt: "Who is the mischievous fairy servant in A Midsummer Night's Dream?",
        answer: "Puck, also called Robin Goodfellow.",
      },
      {
        prompt: "Who is the moneylender in The Merchant of Venice?",
        answer: "Shylock.",
      },
    ],
  },
  {
    name: "Quotes",
    cards: [
      {
        prompt: "Which play contains the line 'To be, or not to be'?",
        answer: "Hamlet.",
      },
      {
        prompt: "Which play contains the line 'Out, damned spot!'?",
        answer: "Macbeth.",
      },
      {
        prompt: "Which play contains the phrase 'A horse! a horse! my kingdom for a horse!'?",
        answer: "Richard III.",
      },
      {
        prompt: "Which play contains the line 'All the world's a stage'?",
        answer: "As You Like It.",
      },
      {
        prompt: "Which play contains the phrase 'The course of true love never did run smooth'?",
        answer: "A Midsummer Night's Dream.",
      },
    ],
  },
  {
    name: "Stage And Terms",
    cards: [
      {
        prompt: "What is a soliloquy?",
        answer: "A speech in which a character speaks their thoughts aloud, often while alone on stage.",
      },
      {
        prompt: "What is an aside?",
        answer: "A brief remark directed to the audience or another character that others on stage are meant not to hear.",
      },
      {
        prompt: "What was the name of the London theater strongly associated with Shakespeare's company?",
        answer: "The Globe Theatre.",
      },
      {
        prompt: "What is iambic pentameter?",
        answer: "A verse rhythm with five iambs per line, often ten syllables alternating unstressed and stressed beats.",
      },
      {
        prompt: "What does the First Folio refer to?",
        answer: "The 1623 collected edition of Shakespeare's plays, published after his death.",
      },
    ],
  },
];
