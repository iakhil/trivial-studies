import type { JeopardyTopic } from "./jeopardyTopics";

export const worldBridgesTopic: JeopardyTopic = {
  title: "World Bridges",
  intro: "Study famous bridges around the world, the places they connect, their histories, and the engineering behind them.",
  groups: [
    {
      name: "Europe",
      cards: [
        {
          prompt: "Which London landmark is a combined bascule and suspension bridge over the River Thames?",
          answer: "Tower Bridge.",
        },
        {
          prompt: "Which 14th-century bridge crosses the Vltava River in Prague?",
          answer: "Charles Bridge.",
        },
        {
          prompt: "Which famous stone arch bridge crosses Venice's Grand Canal?",
          answer: "The Rialto Bridge.",
        },
        {
          prompt: "Which medieval Florentine bridge lined with shops crosses the Arno River?",
          answer: "The Ponte Vecchio.",
        },
        {
          prompt: "Which cable-stayed viaduct carries France's A75 motorway across the Tarn Valley?",
          answer: "The Millau Viaduct.",
        },
      ],
    },
    {
      name: "The Americas",
      cards: [
        {
          prompt: "Which International Orange suspension bridge spans the Golden Gate strait in California?",
          answer: "The Golden Gate Bridge.",
        },
        {
          prompt: "Which bridge opened in 1883 to connect Manhattan and Brooklyn across the East River?",
          answer: "The Brooklyn Bridge.",
        },
        {
          prompt: "Which suspension bridge connects Michigan's Upper and Lower Peninsulas?",
          answer: "The Mackinac Bridge.",
        },
        {
          prompt: "Which bridge near Panama City crosses the Pacific entrance to the Panama Canal?",
          answer: "The Bridge of the Americas.",
        },
        {
          prompt: "Which great cantilever bridge crosses the St. Lawrence River near Quebec City?",
          answer: "The Quebec Bridge.",
        },
      ],
    },
    {
      name: "Asia",
      cards: [
        {
          prompt: "Which Japanese suspension bridge crosses the Akashi Strait between Kobe and Awaji Island?",
          answer: "The Akashi Kaikyō Bridge.",
        },
        {
          prompt: "Which Turkish bridge opened in 2022 with a 2,023-meter main span across the Dardanelles?",
          answer: "The 1915 Çanakkale Bridge.",
        },
        {
          prompt: "Which cantilever bridge crosses the Hooghly River between Kolkata and Howrah?",
          answer: "The Howrah Bridge, officially Rabindra Setu.",
        },
        {
          prompt: "Which cable-stayed sea link connects Mumbai's Bandra and Worli neighborhoods?",
          answer: "The Bandra–Worli Sea Link.",
        },
        {
          prompt: "Which pedestrian bridge in Singapore's Marina Bay is shaped like a curved DNA double helix?",
          answer: "The Helix Bridge.",
        },
      ],
    },
    {
      name: "Africa And Oceania",
      cards: [
        {
          prompt: "Which steel arch bridge, nicknamed 'the Coathanger,' spans Sydney Harbour?",
          answer: "The Sydney Harbour Bridge.",
        },
        {
          prompt: "Which bridge crosses Waitematā Harbour to link central Auckland with the North Shore?",
          answer: "The Auckland Harbour Bridge.",
        },
        {
          prompt: "Which bridge crosses the Zambezi River between Zambia and Zimbabwe just below a famous waterfall?",
          answer: "The Victoria Falls Bridge.",
        },
        {
          prompt: "Which suspension bridge crosses Maputo Bay between Mozambique's capital and Katembe?",
          answer: "The Maputo–Katembe Bridge.",
        },
        {
          prompt: "Which Johannesburg bridge named for a South African president crosses dozens of railway tracks?",
          answer: "The Nelson Mandela Bridge.",
        },
      ],
    },
    {
      name: "Design And Engineering",
      cards: [
        {
          prompt: "Which type of bridge carries loads mainly through compression along a curved structure?",
          answer: "An arch bridge.",
        },
        {
          prompt: "Which type of bridge hangs its deck from main cables draped between towers and anchored at both ends?",
          answer: "A suspension bridge.",
        },
        {
          prompt: "Which type of bridge supports its deck with cables running directly to one or more towers?",
          answer: "A cable-stayed bridge.",
        },
        {
          prompt: "What type of movable bridge raises a roadway leaf using a counterweight?",
          answer: "A bascule bridge, or drawbridge.",
        },
        {
          prompt: "What type of bridge carries passengers across on a suspended moving platform or gondola?",
          answer: "A transporter bridge.",
        },
      ],
    },
  ],
};
