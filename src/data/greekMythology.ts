import type { JeopardyTopic } from "./jeopardyTopics";

export const greekMythologyTopic: JeopardyTopic = {
  title: "Greek Mythology",
  intro: "Study the Olympian gods, legendary heroes, monsters, epic journeys, and sacred places of ancient Greek myth.",
  groups: [
    {
      name: "Olympian Gods",
      cards: [
        {
          prompt: "Who is the king of the Olympian gods and wielder of the thunderbolt?",
          answer: "Zeus.",
        },
        {
          prompt: "Which goddess is associated with wisdom, strategy, and the city of Athens?",
          answer: "Athena.",
        },
        {
          prompt: "Which god ruled the sea and was associated with earthquakes and horses?",
          answer: "Poseidon.",
        },
        {
          prompt: "Which goddess of the harvest searched for her abducted daughter Persephone?",
          answer: "Demeter.",
        },
        {
          prompt: "Which swift-footed messenger god carried a caduceus?",
          answer: "Hermes.",
        },
      ],
    },
    {
      name: "Heroes",
      cards: [
        {
          prompt: "Which hero completed twelve labors, including slaying the Nemean Lion?",
          answer: "Heracles, also known by his Roman name Hercules.",
        },
        {
          prompt: "Which hero killed Medusa by looking at her reflection in a polished shield?",
          answer: "Perseus.",
        },
        {
          prompt: "Which Athenian hero escaped the Labyrinth after killing the Minotaur?",
          answer: "Theseus.",
        },
        {
          prompt: "Who led the Argonauts on the quest for the Golden Fleece?",
          answer: "Jason.",
        },
        {
          prompt: "Which great Greek warrior killed Hector during the Trojan War?",
          answer: "Achilles.",
        },
      ],
    },
    {
      name: "Monsters And Creatures",
      cards: [
        {
          prompt: "What bull-headed creature lived in the Labyrinth on Crete?",
          answer: "The Minotaur.",
        },
        {
          prompt: "Which Gorgon had snakes for hair and could turn onlookers to stone?",
          answer: "Medusa.",
        },
        {
          prompt: "What three-headed dog guarded the entrance to the underworld?",
          answer: "Cerberus.",
        },
        {
          prompt: "What many-headed serpent was slain by Heracles as one of his labors?",
          answer: "The Lernaean Hydra.",
        },
        {
          prompt: "Which fire-breathing creature combined features of a lion, goat, and serpent?",
          answer: "The Chimera.",
        },
      ],
    },
    {
      name: "Epics And Adventures",
      cards: [
        {
          prompt: "Which epic poem tells of Achilles and the final year of the Trojan War?",
          answer: "The Iliad.",
        },
        {
          prompt: "Which hero spent ten years trying to return home to Ithaca after the Trojan War?",
          answer: "Odysseus.",
        },
        {
          prompt: "Who remained faithful to Odysseus while delaying her suitors by weaving and unweaving a shroud?",
          answer: "Penelope.",
        },
        {
          prompt: "Which enchantress turned Odysseus's men into pigs?",
          answer: "Circe.",
        },
        {
          prompt: "What one-eyed Cyclops trapped Odysseus and his crew in a cave?",
          answer: "Polyphemus.",
        },
      ],
    },
    {
      name: "Places And Legends",
      cards: [
        {
          prompt: "On what mountain were the Olympian gods believed to dwell?",
          answer: "Mount Olympus.",
        },
        {
          prompt: "Which river of the underworld did gods swear binding oaths upon?",
          answer: "The River Styx.",
        },
        {
          prompt: "At which sanctuary did a famous oracle deliver prophecies associated with Apollo?",
          answer: "Delphi.",
        },
        {
          prompt: "Which Titan was punished for stealing fire and giving it to humanity?",
          answer: "Prometheus.",
        },
        {
          prompt: "Whose golden apple sparked a dispute among Hera, Athena, and Aphrodite?",
          answer: "Eris, the goddess of discord.",
        },
      ],
    },
  ],
};
