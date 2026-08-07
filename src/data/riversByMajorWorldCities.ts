import type { JeopardyTopic } from "./jeopardyTopics";

export const riversByMajorWorldCitiesTopic: JeopardyTopic = {
  title: "Rivers by Major World Cities",
  intro: "Match major cities around the world with the rivers that run through, border, or meet within them.",
  groups: [
    {
      name: "Europe",
      cards: [
        {
          prompt: "Which river flows through London?",
          answer: "The River Thames.",
        },
        {
          prompt: "Which river flows through Paris?",
          answer: "The Seine.",
        },
        {
          prompt: "Which river flows through Rome?",
          answer: "The Tiber.",
        },
        {
          prompt: "Which river divides Budapest into the historic districts of Buda and Pest?",
          answer: "The Danube.",
        },
        {
          prompt: "Which river flows through Prague?",
          answer: "The Vltava, also known in German as the Moldau.",
        },
      ],
    },
    {
      name: "Asia",
      cards: [
        {
          prompt: "Which river flows through Delhi?",
          answer: "The Yamuna.",
        },
        {
          prompt: "Which river flows through Bangkok?",
          answer: "The Chao Phraya.",
        },
        {
          prompt: "Which river runs through Seoul?",
          answer: "The Han River.",
        },
        {
          prompt: "Which river flows through central Shanghai before joining the Yangtze estuary?",
          answer: "The Huangpu River.",
        },
        {
          prompt: "Which river flows through Baghdad?",
          answer: "The Tigris.",
        },
      ],
    },
    {
      name: "Africa",
      cards: [
        {
          prompt: "Which river flows through Cairo?",
          answer: "The Nile.",
        },
        {
          prompt: "Which river flows beside Kinshasa?",
          answer: "The Congo River.",
        },
        {
          prompt: "Which two rivers meet at Khartoum to form the main Nile?",
          answer: "The Blue Nile and the White Nile.",
        },
        {
          prompt: "Which river flows through Bamako, the capital of Mali?",
          answer: "The Niger River.",
        },
        {
          prompt: "Which branch of the Nile flows through Juba, the capital of South Sudan?",
          answer: "The White Nile.",
        },
      ],
    },
    {
      name: "North America",
      cards: [
        {
          prompt: "Which river forms the western shoreline of Manhattan in New York City?",
          answer: "The Hudson River.",
        },
        {
          prompt: "Which river flows past Washington, D.C.?",
          answer: "The Potomac River.",
        },
        {
          prompt: "Which river curves through New Orleans?",
          answer: "The Mississippi River.",
        },
        {
          prompt: "Which major river flows past Montreal on its way from the Great Lakes to the Atlantic?",
          answer: "The St. Lawrence River.",
        },
        {
          prompt: "Which two rivers meet at The Forks in Winnipeg?",
          answer: "The Red River and the Assiniboine River.",
        },
      ],
    },
    {
      name: "South America",
      cards: [
        {
          prompt: "On which broad estuary does Buenos Aires stand?",
          answer: "The Río de la Plata.",
        },
        {
          prompt: "Which river flows through Lima on its way to the Pacific Ocean?",
          answer: "The Rímac River.",
        },
        {
          prompt: "Which river flows through Santiago, Chile?",
          answer: "The Mapocho River.",
        },
        {
          prompt: "Which dark-water river flows past Manaus before meeting the Amazon?",
          answer: "The Rio Negro.",
        },
        {
          prompt: "Which river flows past Asunción, the capital of Paraguay?",
          answer: "The Paraguay River.",
        },
      ],
    },
  ],
};
