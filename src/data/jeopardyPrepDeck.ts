import {
  ancientHistoryTopic,
  artHistoryTopic,
  astronomyTopic,
  biologyTopic,
  chemistryTopic,
  europeanHistoryTopic,
  mythologyTopic,
  polishHistoryTopic,
  scienceGrabBagTopic,
  sportsTriviaTopic,
  usNationalParksTopic,
  volcanoesTopic,
  wordOriginsTopic,
  worldHistoryTopic,
  worldWarsTopic,
  type JeopardyTopic,
} from "./jeopardyTopics";

export interface MixedDrillClue {
  id: string;
  topic: string;
  route: string;
  category: string;
  prompt: string;
  answer: string;
}

const prepTopics: Array<{ topic: JeopardyTopic; route: string }> = [
  { topic: ancientHistoryTopic, route: "/ancient-history" },
  { topic: artHistoryTopic, route: "/art-history" },
  { topic: astronomyTopic, route: "/astronomy" },
  { topic: biologyTopic, route: "/biology" },
  { topic: chemistryTopic, route: "/chemistry" },
  { topic: europeanHistoryTopic, route: "/european-history" },
  { topic: mythologyTopic, route: "/mythology" },
  { topic: polishHistoryTopic, route: "/polish-history" },
  { topic: scienceGrabBagTopic, route: "/science-grab-bag" },
  { topic: sportsTriviaTopic, route: "/sports-trivia" },
  { topic: usNationalParksTopic, route: "/us-national-parks" },
  { topic: volcanoesTopic, route: "/volcanoes" },
  { topic: wordOriginsTopic, route: "/word-origins" },
  { topic: worldHistoryTopic, route: "/world-history" },
  { topic: worldWarsTopic, route: "/world-wars" },
];

export const mixedDrillClues: MixedDrillClue[] = prepTopics.flatMap(({ topic, route }) =>
  topic.groups.flatMap((group) =>
    group.cards.map((card) => ({
      id: `${topic.title}-${group.name}-${card.prompt}`,
      topic: topic.title,
      route,
      category: group.name,
      prompt: card.prompt,
      answer: card.answer,
    })),
  ),
);
