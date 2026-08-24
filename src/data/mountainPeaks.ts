import type { JeopardyTopic } from "./jeopardyTopics";

export const mountainPeaksTopic: JeopardyTopic = {
  title: "Mountain Peaks",
  intro: "Study celebrated summits, continental high points, volcanic giants, and the stories behind famous peaks around the world.",
  groups: [
    {
      name: "Continental Giants",
      cards: [
        {
          prompt: "Which Himalayan peak is the highest mountain above sea level?",
          answer: "Mount Everest.",
        },
        {
          prompt: "Which peak in Argentina is the highest mountain in South America?",
          answer: "Aconcagua.",
        },
        {
          prompt: "Which Alaskan peak is the highest mountain in North America?",
          answer: "Denali.",
        },
        {
          prompt: "Which free-standing volcano in Tanzania is Africa's highest mountain?",
          answer: "Mount Kilimanjaro.",
        },
        {
          prompt: "Which mountain is the highest peak in Antarctica?",
          answer: "Vinson Massif.",
        },
      ],
    },
    {
      name: "Himalaya And Karakoram",
      cards: [
        {
          prompt: "Which Karakoram peak is the world's second-highest mountain?",
          answer: "K2.",
        },
        {
          prompt: "Which mountain on the Nepal-India border is the world's third-highest peak?",
          answer: "Kangchenjunga.",
        },
        {
          prompt: "Which fourth-highest mountain is connected to Everest by the South Col?",
          answer: "Lhotse.",
        },
        {
          prompt: "Which mountain became the first peak over 8,000 meters to be climbed, in 1950?",
          answer: "Annapurna I.",
        },
        {
          prompt: "Which 8,000-meter peak in Pakistan anchors the western end of the Himalayas?",
          answer: "Nanga Parbat.",
        },
      ],
    },
    {
      name: "Volcanic Peaks",
      cards: [
        {
          prompt: "Which volcano on the Chile-Argentina border is the world's highest active volcano?",
          answer: "Ojos del Salado.",
        },
        {
          prompt: "Which symmetrical volcanic peak is the highest mountain in Japan?",
          answer: "Mount Fuji.",
        },
        {
          prompt: "Which glacier-capped volcano in Ecuador rises south of Quito?",
          answer: "Cotopaxi.",
        },
        {
          prompt: "Which Hawaiian volcano is Earth's tallest mountain when measured from its base on the ocean floor?",
          answer: "Mauna Kea.",
        },
        {
          prompt: "Which active volcano dominates the eastern side of Sicily?",
          answer: "Mount Etna.",
        },
      ],
    },
    {
      name: "Peaks Of The Americas",
      cards: [
        {
          prompt: "Which mountain in the Yukon is the highest peak in Canada?",
          answer: "Mount Logan.",
        },
        {
          prompt: "Which Ecuadorian volcano has the summit farthest from Earth's center?",
          answer: "Chimborazo.",
        },
        {
          prompt: "Which Sierra Nevada peak is the highest point in the contiguous United States?",
          answer: "Mount Whitney.",
        },
        {
          prompt: "Which volcano, also called Citlaltépetl, is the highest mountain in Mexico?",
          answer: "Pico de Orizaba.",
        },
        {
          prompt: "Which mountain in the Cordillera Blanca is the highest peak in Peru?",
          answer: "Huascarán.",
        },
      ],
    },
    {
      name: "World Landmarks",
      cards: [
        {
          prompt: "Which dormant volcano in Russia's Caucasus Mountains is generally considered Europe's highest peak?",
          answer: "Mount Elbrus.",
        },
        {
          prompt: "Which pyramid-shaped Alpine peak straddles the border of Switzerland and Italy?",
          answer: "The Matterhorn.",
        },
        {
          prompt: "Which mountain, whose name means 'White Mountain,' is the highest peak in the Alps?",
          answer: "Mont Blanc.",
        },
        {
          prompt: "Which peak, also known as Aoraki, is the highest mountain in New Zealand?",
          answer: "Aoraki / Mount Cook.",
        },
        {
          prompt: "Which peak in Indonesian New Guinea is the highest mountain on an island?",
          answer: "Puncak Jaya, also called Carstensz Pyramid.",
        },
      ],
    },
  ],
};
