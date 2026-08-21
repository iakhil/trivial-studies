import type { JeopardyTopic } from "./jeopardyTopics";

export const lakesOfTheWorldTopic: JeopardyTopic = {
  title: "Lakes of the World",
  intro: "Study famous lakes around the globe, the countries they touch, their record-setting features, and how they formed.",
  groups: [
    {
      name: "Record Holders",
      cards: [
        {
          prompt: "Despite its name, which body of water is the world's largest lake by surface area?",
          answer: "The Caspian Sea.",
        },
        {
          prompt: "Which Great Lake is the world's largest freshwater lake by surface area?",
          answer: "Lake Superior.",
        },
        {
          prompt: "Which Siberian lake is the deepest lake in the world?",
          answer: "Lake Baikal.",
        },
        {
          prompt: "Which lake holds more freshwater by volume than any other?",
          answer: "Lake Baikal.",
        },
        {
          prompt: "Which lake is the largest located entirely within Canada?",
          answer: "Great Bear Lake.",
        },
      ],
    },
    {
      name: "Africa",
      cards: [
        {
          prompt: "Which African Great Lake is shared by Kenya, Tanzania, and Uganda?",
          answer: "Lake Victoria.",
        },
        {
          prompt: "Which long, narrow African Great Lake is the world's second-deepest lake?",
          answer: "Lake Tanganyika.",
        },
        {
          prompt: "Which lake, also called Lake Nyasa, is shared by Malawi, Mozambique, and Tanzania?",
          answer: "Lake Malawi.",
        },
        {
          prompt: "Which Kenyan lake is the most saline of Africa's large lakes?",
          answer: "Lake Turkana.",
        },
        {
          prompt: "In which country is Lake Volta, the vast reservoir created by the Akosombo Dam?",
          answer: "Ghana.",
        },
      ],
    },
    {
      name: "The Americas",
      cards: [
        {
          prompt: "Which of the five Great Lakes lies entirely within the United States?",
          answer: "Lake Michigan.",
        },
        {
          prompt: "Which lake in Canada's Northwest Territories is the deepest lake in North America?",
          answer: "Great Slave Lake.",
        },
        {
          prompt: "Which high-altitude lake straddles the border between Peru and Bolivia?",
          answer: "Lake Titicaca.",
        },
        {
          prompt: "Which lake is Central America's largest and shares its name with its country?",
          answer: "Lake Nicaragua.",
        },
        {
          prompt: "Which large brackish lake and tidal inlet lies in northwestern Venezuela?",
          answer: "Lake Maracaibo.",
        },
      ],
    },
    {
      name: "Europe",
      cards: [
        {
          prompt: "Which lake in northwestern Russia is the largest lake entirely in Europe?",
          answer: "Lake Ladoga.",
        },
        {
          prompt: "Which crescent-shaped Alpine lake is shared by Switzerland and France?",
          answer: "Lake Geneva.",
        },
        {
          prompt: "Which Italian lake is known for its distinctive upside-down Y shape?",
          answer: "Lake Como.",
        },
        {
          prompt: "Which lake in Hungary is the largest lake in Central Europe?",
          answer: "Lake Balaton.",
        },
        {
          prompt: "Which ancient lake is shared by North Macedonia and Albania?",
          answer: "Lake Ohrid.",
        },
      ],
    },
    {
      name: "Asia And Oceania",
      cards: [
        {
          prompt: "Which lake between Kazakhstan and Uzbekistan shrank dramatically after its feeder rivers were diverted?",
          answer: "The Aral Sea.",
        },
        {
          prompt: "Which hypersaline lake lies between Jordan and Israel and the West Bank?",
          answer: "The Dead Sea.",
        },
        {
          prompt: "Which Cambodian lake expands greatly during the monsoon when its connecting river reverses direction?",
          answer: "Tonle Sap.",
        },
        {
          prompt: "Which enormous caldera lake lies on the Indonesian island of Sumatra?",
          answer: "Lake Toba.",
        },
        {
          prompt: "Which volcanic caldera lake is the largest lake in New Zealand?",
          answer: "Lake Taupō.",
        },
      ],
    },
  ],
};
