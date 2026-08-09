import type { JeopardyTopic } from "./jeopardyTopics";

export const victorHugoBooksTopic: JeopardyTopic = {
  title: "Victor Hugo Books",
  intro: "Study Victor Hugo's major novels, their characters, settings, plots, and publication history.",
  groups: [
    {
      name: "Major Works",
      cards: [
        {
          prompt: "Which Victor Hugo novel follows the ex-convict Jean Valjean?",
          answer: "Les Misérables.",
        },
        {
          prompt: "Which Victor Hugo novel centers on Quasimodo and Esmeralda?",
          answer: "The Hunchback of Notre-Dame, originally titled Notre-Dame de Paris.",
        },
        {
          prompt: "Which Victor Hugo novel tells the story of the disfigured Gwynplaine?",
          answer: "The Man Who Laughs.",
        },
        {
          prompt: "Which Victor Hugo novel follows Gilliatt's struggle to salvage a wrecked steamship?",
          answer: "Toilers of the Sea.",
        },
        {
          prompt: "Which early Victor Hugo novel portrays the final day of a condemned prisoner?",
          answer: "The Last Day of a Condemned Man.",
        },
      ],
    },
    {
      name: "Les Misérables",
      cards: [
        {
          prompt: "Which police inspector relentlessly pursues Jean Valjean in Les Misérables?",
          answer: "Javert.",
        },
        {
          prompt: "Whom does Jean Valjean rescue from the Thénardiers and raise as his daughter?",
          answer: "Cosette.",
        },
        {
          prompt: "Which student falls in love with Cosette in Les Misérables?",
          answer: "Marius Pontmercy.",
        },
        {
          prompt: "What false surname does Jean Valjean use while serving as mayor of Montreuil-sur-Mer?",
          answer: "Monsieur Madeleine.",
        },
        {
          prompt: "In what year was Les Misérables first published?",
          answer: "1862.",
        },
      ],
    },
    {
      name: "Notre-Dame de Paris",
      cards: [
        {
          prompt: "In what year is The Hunchback of Notre-Dame set?",
          answer: "1482.",
        },
        {
          prompt: "What is Quasimodo's role at Notre-Dame Cathedral?",
          answer: "He is the cathedral's bell-ringer.",
        },
        {
          prompt: "Which archdeacon becomes obsessed with Esmeralda?",
          answer: "Claude Frollo.",
        },
        {
          prompt: "What is the original French title of The Hunchback of Notre-Dame?",
          answer: "Notre-Dame de Paris.",
        },
        {
          prompt: "In what year was Notre-Dame de Paris first published?",
          answer: "1831.",
        },
      ],
    },
    {
      name: "Other Novels",
      cards: [
        {
          prompt: "On which group of islands is Toilers of the Sea set?",
          answer: "The Channel Islands, especially Guernsey.",
        },
        {
          prompt: "Which novel did Victor Hugo dedicate to the island of Guernsey?",
          answer: "Toilers of the Sea.",
        },
        {
          prompt: "In which country is Victor Hugo's first published novel, Han d'Islande, set?",
          answer: "Norway.",
        },
        {
          prompt: "Which Victor Hugo novel depicts the 1793 royalist revolt in Brittany during the French Revolution?",
          answer: "Ninety-Three.",
        },
        {
          prompt: "Which early Victor Hugo novel is set during the slave revolt in Saint-Domingue?",
          answer: "Bug-Jargal.",
        },
      ],
    },
    {
      name: "Publication And Themes",
      cards: [
        {
          prompt: "Which Victor Hugo novel was his last, published in 1874?",
          answer: "Ninety-Three.",
        },
        {
          prompt: "Which novel did Hugo write while living in exile on Guernsey and publish in 1866?",
          answer: "Toilers of the Sea.",
        },
        {
          prompt: "Which 1829 work by Hugo argues against capital punishment through a prisoner's inner monologue?",
          answer: "The Last Day of a Condemned Man.",
        },
        {
          prompt: "Which 1869 novel explores social injustice through Gwynplaine's life in England?",
          answer: "The Man Who Laughs.",
        },
        {
          prompt: "Which novel's popularity helped draw attention to the preservation of Notre-Dame Cathedral?",
          answer: "Notre-Dame de Paris, or The Hunchback of Notre-Dame.",
        },
      ],
    },
  ],
};
