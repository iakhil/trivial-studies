import type { JeopardyTopic } from "./jeopardyTopics";

export const worldIslandsTopic: JeopardyTopic = {
  title: "World Islands",
  intro: "Study the world's major islands, island nations, archipelagos, natural features, and cultural landmarks.",
  groups: [
    {
      name: "Island Giants",
      cards: [
        {
          prompt: "What is the world's largest island, excluding the continent of Australia?",
          answer: "Greenland.",
        },
        {
          prompt: "What island north of Australia is the world's second largest?",
          answer: "New Guinea.",
        },
        {
          prompt: "Which large Southeast Asian island is divided among Indonesia, Malaysia, and Brunei?",
          answer: "Borneo.",
        },
        {
          prompt: "What large island nation lies in the Indian Ocean off southeastern Africa?",
          answer: "Madagascar.",
        },
        {
          prompt: "What is the largest island in Canada?",
          answer: "Baffin Island.",
        },
      ],
    },
    {
      name: "Island Nations",
      cards: [
        {
          prompt: "What is the largest and most populous of Japan's four main islands?",
          answer: "Honshu.",
        },
        {
          prompt: "Which island nation lies just southeast of India?",
          answer: "Sri Lanka.",
        },
        {
          prompt: "What is the capital of the island nation of Iceland?",
          answer: "Reykjavík.",
        },
        {
          prompt: "What is the largest island in the Caribbean Sea?",
          answer: "Cuba.",
        },
        {
          prompt: "What strait separates New Zealand's North Island from its South Island?",
          answer: "Cook Strait.",
        },
      ],
    },
    {
      name: "Find The Island",
      cards: [
        {
          prompt: "Which Italian island is separated from the mainland by the Strait of Messina?",
          answer: "Sicily.",
        },
        {
          prompt: "Which Australian island state lies south of the mainland across Bass Strait?",
          answer: "Tasmania.",
        },
        {
          prompt: "Which Indonesian island lies west of the Malay Peninsula across the Strait of Malacca?",
          answer: "Sumatra.",
        },
        {
          prompt: "Which Caribbean island is shared by Haiti and the Dominican Republic?",
          answer: "Hispaniola.",
        },
        {
          prompt: "Which island contains England, Scotland, and Wales?",
          answer: "Great Britain.",
        },
      ],
    },
    {
      name: "Volcanic And Coral Islands",
      cards: [
        {
          prompt: "Which Hawaiian island is home to the volcanoes Mauna Loa and Kīlauea?",
          answer: "The island of Hawaiʻi, commonly called the Big Island.",
        },
        {
          prompt: "Which Ecuadorian archipelago helped inspire Charles Darwin's ideas about evolution?",
          answer: "The Galápagos Islands.",
        },
        {
          prompt: "Which Indian Ocean nation consists of low-lying coral islands grouped into atolls?",
          answer: "The Maldives.",
        },
        {
          prompt: "Bora Bora is part of which French overseas collectivity in the South Pacific?",
          answer: "French Polynesia.",
        },
        {
          prompt: "What Icelandic island emerged from the Atlantic Ocean during a volcanic eruption beginning in 1963?",
          answer: "Surtsey.",
        },
      ],
    },
    {
      name: "History And Culture",
      cards: [
        {
          prompt: "What Polynesian island is famous for monumental stone statues called moai?",
          answer: "Rapa Nui, also known as Easter Island.",
        },
        {
          prompt: "Which Greek island was the center of the ancient Minoan civilization?",
          answer: "Crete.",
        },
        {
          prompt: "To which Mediterranean island was Napoleon first exiled in 1814?",
          answer: "Elba.",
        },
        {
          prompt: "On which remote South Atlantic island did Napoleon spend his final exile?",
          answer: "Saint Helena.",
        },
        {
          prompt: "Which Indonesian island is known for its Hindu-majority population and temple traditions?",
          answer: "Bali.",
        },
      ],
    },
  ],
};
