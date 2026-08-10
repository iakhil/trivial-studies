import type { JeopardyTopic } from "./jeopardyTopics";

export const saturnVAndOtherRocketsTopic: JeopardyTopic = {
  title: "Saturn V and Other Rockets",
  intro: "Study the Saturn V, landmark launch vehicles from around the world, and the science that makes rockets fly.",
  groups: [
    {
      name: "Saturn V Design",
      cards: [
        {
          prompt: "Approximately how tall was a fully assembled Saturn V?",
          answer: "363 feet, or 111 meters.",
        },
        {
          prompt: "How many stages did the Saturn V use to send Apollo spacecraft toward the Moon?",
          answer: "Three stages.",
        },
        {
          prompt: "Which engine powered the Saturn V's first stage?",
          answer: "The F-1 engine; the first stage used five of them.",
        },
        {
          prompt: "Which engine powered both upper stages of the Saturn V?",
          answer: "The J-2 engine; the second stage used five and the third stage used one.",
        },
        {
          prompt: "What propellants did the Saturn V's first-stage F-1 engines burn?",
          answer: "RP-1 kerosene and liquid oxygen.",
        },
      ],
    },
    {
      name: "Saturn Missions",
      cards: [
        {
          prompt: "Which uncrewed mission made the first flight of the Saturn V in 1967?",
          answer: "Apollo 4.",
        },
        {
          prompt: "Which mission was the first crewed flight of the Saturn V and the first to carry humans around the Moon?",
          answer: "Apollo 8.",
        },
        {
          prompt: "Which Saturn V mission carried the first humans to land on the Moon?",
          answer: "Apollo 11.",
        },
        {
          prompt: "What space station was launched by the final Saturn V in 1973?",
          answer: "Skylab, the first U.S. space station.",
        },
        {
          prompt: "Which smaller Saturn rocket launched Apollo 7 and later carried crews to Skylab?",
          answer: "The Saturn IB.",
        },
      ],
    },
    {
      name: "Early Crewed Rockets",
      cards: [
        {
          prompt: "Which rocket launched Alan Shepard on the first U.S. human spaceflight?",
          answer: "A Mercury-Redstone rocket.",
        },
        {
          prompt: "Which rocket launched John Glenn on the first U.S. crewed orbital flight?",
          answer: "A Mercury-Atlas rocket.",
        },
        {
          prompt: "Which launch vehicle carried NASA's two-person Gemini spacecraft?",
          answer: "The Titan II Gemini Launch Vehicle.",
        },
        {
          prompt: "Which Soviet rocket launched Sputnik 1, the first artificial satellite?",
          answer: "The R-7 rocket.",
        },
        {
          prompt: "Which rocket family launched Yuri Gagarin aboard Vostok 1?",
          answer: "The R-7 family, using a Vostok launch vehicle.",
        },
      ],
    },
    {
      name: "Modern And International",
      cards: [
        {
          prompt: "Which launch system combined an orbiter, an external tank, and two solid rocket boosters?",
          answer: "NASA's Space Shuttle.",
        },
        {
          prompt: "Which rocket launched the uncrewed Artemis I mission around the Moon in 2022?",
          answer: "NASA's Space Launch System, or SLS.",
        },
        {
          prompt: "Which European rocket launched the James Webb Space Telescope in 2021?",
          answer: "An Ariane 5.",
        },
        {
          prompt: "Which Japanese rocket launched the Hayabusa2 asteroid mission in 2014?",
          answer: "An H-IIA rocket.",
        },
        {
          prompt: "Which Indian rocket launched the Mars Orbiter Mission in 2013?",
          answer: "The PSLV-C25.",
        },
      ],
    },
    {
      name: "Rocket Science",
      cards: [
        {
          prompt: "Which of Newton's laws explains a rocket moving forward as exhaust is expelled backward?",
          answer: "Newton's third law of motion.",
        },
        {
          prompt: "Why can a chemical rocket engine operate in the vacuum of space?",
          answer: "It carries both fuel and an oxidizer, so it does not need atmospheric oxygen.",
        },
        {
          prompt: "Why do multistage rockets discard stages during flight?",
          answer: "To shed empty tanks and engines, reducing the mass that the remaining stages must accelerate.",
        },
        {
          prompt: "What rocket-engine measurement indicates propellant efficiency and is commonly expressed in seconds?",
          answer: "Specific impulse.",
        },
        {
          prompt: "What does the launch term 'Max Q' mean?",
          answer: "The point of maximum dynamic pressure on the rocket.",
        },
      ],
    },
  ],
};
