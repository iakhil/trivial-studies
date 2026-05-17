export interface JeopardyTriviaCard {
  prompt: string;
  answer: string;
}

export interface JeopardyTriviaGroup {
  name: string;
  cards: JeopardyTriviaCard[];
}

export interface JeopardyTopic {
  title: string;
  intro: string;
  groups: JeopardyTriviaGroup[];
}

export const worldHistoryTopic: JeopardyTopic = {
  title: "World History",
  intro: "Study ancient civilizations, empires, revolutions, and major historical figures.",
  groups: [
    {
      name: "Ancient World",
      cards: [
        {
          prompt: "Which river supported the civilization of ancient Egypt?",
          answer: "The Nile River.",
        },
        {
          prompt: "Which Mesopotamian law code is associated with a Babylonian king?",
          answer: "The Code of Hammurabi.",
        },
        {
          prompt: "Which ancient city-state is remembered for its military society and rivalry with Athens?",
          answer: "Sparta.",
        },
        {
          prompt: "Which conqueror created an empire stretching from Greece to India in the 300s BCE?",
          answer: "Alexander the Great.",
        },
        {
          prompt: "Which Roman general crossed the Rubicon in 49 BCE?",
          answer: "Julius Caesar.",
        },
      ],
    },
    {
      name: "Empires",
      cards: [
        {
          prompt: "Which empire built a capital at Constantinople?",
          answer: "The Byzantine Empire.",
        },
        {
          prompt: "Which empire was founded by Osman I in Anatolia?",
          answer: "The Ottoman Empire.",
        },
        {
          prompt: "Which Mongol ruler founded the Yuan dynasty in China?",
          answer: "Kublai Khan.",
        },
        {
          prompt: "Which empire was ruled from Cuzco before the Spanish conquest?",
          answer: "The Inca Empire.",
        },
        {
          prompt: "Which West African empire was famous for Mansa Musa and great wealth from gold?",
          answer: "The Mali Empire.",
        },
      ],
    },
    {
      name: "Revolutions",
      cards: [
        {
          prompt: "Which 1789 event symbolically began the French Revolution?",
          answer: "The storming of the Bastille.",
        },
        {
          prompt: "Which document announced the American colonies' separation from Great Britain?",
          answer: "The Declaration of Independence.",
        },
        {
          prompt: "Which Caribbean revolution led to the independent nation of Haiti?",
          answer: "The Haitian Revolution.",
        },
        {
          prompt: "Which 1917 revolution brought the Bolsheviks to power in Russia?",
          answer: "The October Revolution.",
        },
        {
          prompt: "Which leader became the first president of independent Indonesia?",
          answer: "Sukarno.",
        },
      ],
    },
    {
      name: "Leaders",
      cards: [
        {
          prompt: "Which British prime minister led the United Kingdom during most of World War II?",
          answer: "Winston Churchill.",
        },
        {
          prompt: "Which Indian leader promoted nonviolent resistance against British rule?",
          answer: "Mohandas Gandhi.",
        },
        {
          prompt: "Which South African president had previously spent 27 years in prison?",
          answer: "Nelson Mandela.",
        },
        {
          prompt: "Which Chinese leader founded the People's Republic of China in 1949?",
          answer: "Mao Zedong.",
        },
        {
          prompt: "Which Egyptian pharaoh's tomb was discovered by Howard Carter in 1922?",
          answer: "Tutankhamun.",
        },
      ],
    },
  ],
};

export const scienceGrabBagTopic: JeopardyTopic = {
  title: "Science Grab Bag",
  intro: "Study core physics, chemistry, biology, and astronomy clues.",
  groups: [
    {
      name: "Physics",
      cards: [
        {
          prompt: "What force keeps planets in orbit around the Sun?",
          answer: "Gravity.",
        },
        {
          prompt: "What unit is used to measure electrical resistance?",
          answer: "The ohm.",
        },
        {
          prompt: "Which scientist formulated the laws of motion and universal gravitation?",
          answer: "Isaac Newton.",
        },
        {
          prompt: "What is the speed of light in a vacuum, rounded to the nearest thousand kilometers per second?",
          answer: "About 300,000 kilometers per second.",
        },
        {
          prompt: "What type of energy is stored by position, such as water behind a dam?",
          answer: "Potential energy.",
        },
      ],
    },
    {
      name: "Chemistry",
      cards: [
        {
          prompt: "What is the chemical symbol for gold?",
          answer: "Au.",
        },
        {
          prompt: "What number on the pH scale is neutral?",
          answer: "7.",
        },
        {
          prompt: "What gas has the chemical formula CO2?",
          answer: "Carbon dioxide.",
        },
        {
          prompt: "What is the lightest element?",
          answer: "Hydrogen.",
        },
        {
          prompt: "Which subatomic particle has a negative electric charge?",
          answer: "The electron.",
        },
      ],
    },
    {
      name: "Biology",
      cards: [
        {
          prompt: "What molecule carries genetic instructions in most living things?",
          answer: "DNA.",
        },
        {
          prompt: "What organelle is often called the powerhouse of the cell?",
          answer: "The mitochondrion.",
        },
        {
          prompt: "What process do plants use to convert light energy into chemical energy?",
          answer: "Photosynthesis.",
        },
        {
          prompt: "What blood cells help fight infection?",
          answer: "White blood cells.",
        },
        {
          prompt: "What is the largest organ of the human body?",
          answer: "The skin.",
        },
      ],
    },
    {
      name: "Space",
      cards: [
        {
          prompt: "Which planet is known for its prominent ring system?",
          answer: "Saturn.",
        },
        {
          prompt: "What galaxy contains our Solar System?",
          answer: "The Milky Way.",
        },
        {
          prompt: "What is the name of the boundary around a black hole beyond which light cannot escape?",
          answer: "The event horizon.",
        },
        {
          prompt: "Which Apollo mission first landed humans on the Moon?",
          answer: "Apollo 11.",
        },
        {
          prompt: "What type of star is the Sun?",
          answer: "A G-type main-sequence star, often called a yellow dwarf.",
        },
      ],
    },
  ],
};

export const mythologyTopic: JeopardyTopic = {
  title: "Mythology",
  intro: "Study gods, heroes, monsters, and myths from several traditions.",
  groups: [
    {
      name: "Greek",
      cards: [
        {
          prompt: "Who is the Greek king of the gods?",
          answer: "Zeus.",
        },
        {
          prompt: "Which Greek hero killed the Minotaur?",
          answer: "Theseus.",
        },
        {
          prompt: "Who is the Greek goddess of wisdom and war strategy?",
          answer: "Athena.",
        },
        {
          prompt: "Which musician tried to rescue Eurydice from the underworld?",
          answer: "Orpheus.",
        },
        {
          prompt: "Which Titan was punished for giving fire to humanity?",
          answer: "Prometheus.",
        },
      ],
    },
    {
      name: "Roman",
      cards: [
        {
          prompt: "Who is the Roman equivalent of the Greek god Zeus?",
          answer: "Jupiter.",
        },
        {
          prompt: "Who is the Roman goddess of love?",
          answer: "Venus.",
        },
        {
          prompt: "Which twin brothers are legendary founders of Rome?",
          answer: "Romulus and Remus.",
        },
        {
          prompt: "Who is the Roman god of doors, beginnings, and transitions?",
          answer: "Janus.",
        },
        {
          prompt: "Which Roman hero carried his father from burning Troy in the Aeneid?",
          answer: "Aeneas.",
        },
      ],
    },
    {
      name: "Norse",
      cards: [
        {
          prompt: "Who is the Norse god associated with thunder and the hammer Mjolnir?",
          answer: "Thor.",
        },
        {
          prompt: "Who is the Norse trickster god and father of Fenrir?",
          answer: "Loki.",
        },
        {
          prompt: "What is the Norse hall where slain warriors are taken by Valkyries?",
          answer: "Valhalla.",
        },
        {
          prompt: "What world tree connects the realms in Norse mythology?",
          answer: "Yggdrasil.",
        },
        {
          prompt: "What is the name for the prophesied end of the gods?",
          answer: "Ragnarok.",
        },
      ],
    },
    {
      name: "Egyptian",
      cards: [
        {
          prompt: "Who is the Egyptian god of the afterlife often shown as a mummy?",
          answer: "Osiris.",
        },
        {
          prompt: "Who is the Egyptian goddess who resurrects Osiris and protects Horus?",
          answer: "Isis.",
        },
        {
          prompt: "Which Egyptian god is often shown with a jackal head?",
          answer: "Anubis.",
        },
        {
          prompt: "Who is the falcon-headed Egyptian sky god?",
          answer: "Horus.",
        },
        {
          prompt: "Which sun god became especially important in ancient Egyptian religion?",
          answer: "Ra.",
        },
      ],
    },
  ],
};

export const artHistoryTopic: JeopardyTopic = {
  title: "Art History",
  intro: "Study artists, masterpieces, movements, and museum-ready clues.",
  groups: [
    {
      name: "Artists",
      cards: [
        {
          prompt: "Who painted the Mona Lisa?",
          answer: "Leonardo da Vinci.",
        },
        {
          prompt: "Which Dutch artist painted The Starry Night?",
          answer: "Vincent van Gogh.",
        },
        {
          prompt: "Which Spanish artist co-founded Cubism with Georges Braque?",
          answer: "Pablo Picasso.",
        },
        {
          prompt: "Which Mexican artist painted many self-portraits and was married to Diego Rivera?",
          answer: "Frida Kahlo.",
        },
        {
          prompt: "Which Renaissance artist sculpted David and painted the Sistine Chapel ceiling?",
          answer: "Michelangelo.",
        },
      ],
    },
    {
      name: "Masterpieces",
      cards: [
        {
          prompt: "Which painting by Edvard Munch shows a figure under a blood-red sky?",
          answer: "The Scream.",
        },
        {
          prompt: "Which Leonardo mural depicts Jesus and the apostles at a meal?",
          answer: "The Last Supper.",
        },
        {
          prompt: "Which Grant Wood painting shows a farmer with a pitchfork beside a woman?",
          answer: "American Gothic.",
        },
        {
          prompt: "Which Botticelli painting shows a goddess arriving on a shell?",
          answer: "The Birth of Venus.",
        },
        {
          prompt: "Which Picasso painting responds to the bombing of a Basque town during the Spanish Civil War?",
          answer: "Guernica.",
        },
      ],
    },
    {
      name: "Movements",
      cards: [
        {
          prompt: "Which movement includes Monet, Renoir, and visible brushwork focused on light?",
          answer: "Impressionism.",
        },
        {
          prompt: "Which movement broke subjects into geometric forms and multiple viewpoints?",
          answer: "Cubism.",
        },
        {
          prompt: "Which movement used dreamlike imagery and the unconscious?",
          answer: "Surrealism.",
        },
        {
          prompt: "Which movement is associated with Andy Warhol and commercial imagery?",
          answer: "Pop Art.",
        },
        {
          prompt: "Which ornate European style followed the Renaissance and emphasized drama and movement?",
          answer: "Baroque.",
        },
      ],
    },
    {
      name: "Museums",
      cards: [
        {
          prompt: "Which Paris museum houses the Mona Lisa?",
          answer: "The Louvre.",
        },
        {
          prompt: "Which New York museum is commonly abbreviated MoMA?",
          answer: "The Museum of Modern Art.",
        },
        {
          prompt: "Which Madrid museum is especially known for Spanish masters like Velazquez and Goya?",
          answer: "The Prado Museum.",
        },
        {
          prompt: "Which Vatican space contains Michelangelo's famous ceiling frescoes?",
          answer: "The Sistine Chapel.",
        },
        {
          prompt: "Which London museum holds the Rosetta Stone?",
          answer: "The British Museum.",
        },
      ],
    },
  ],
};

export const sportsTriviaTopic: JeopardyTopic = {
  title: "Sports Trivia",
  intro: "Study classic sports facts from the Olympics, baseball, basketball, and soccer.",
  groups: [
    {
      name: "Olympics",
      cards: [
        {
          prompt: "Which country hosted the first modern Olympic Games in 1896?",
          answer: "Greece.",
        },
        {
          prompt: "Which athlete won four gold medals at the 1936 Berlin Olympics?",
          answer: "Jesse Owens.",
        },
        {
          prompt: "What do the five Olympic rings represent?",
          answer: "The inhabited continents joined by the Olympic movement.",
        },
        {
          prompt: "Which city hosted the 1980 Winter Olympics known for the Miracle on Ice?",
          answer: "Lake Placid, New York.",
        },
        {
          prompt: "Which gymnast earned a perfect 10 at the 1976 Montreal Olympics?",
          answer: "Nadia Comaneci.",
        },
      ],
    },
    {
      name: "Baseball",
      cards: [
        {
          prompt: "Who broke Major League Baseball's color barrier in 1947?",
          answer: "Jackie Robinson.",
        },
        {
          prompt: "Which team is nicknamed the Bronx Bombers?",
          answer: "The New York Yankees.",
        },
        {
          prompt: "What is it called when a batter hits singles, doubles, triples, and home runs in one game?",
          answer: "Hitting for the cycle.",
        },
        {
          prompt: "Which Boston ballpark features the Green Monster?",
          answer: "Fenway Park.",
        },
        {
          prompt: "Who was known as the Sultan of Swat?",
          answer: "Babe Ruth.",
        },
      ],
    },
    {
      name: "Basketball",
      cards: [
        {
          prompt: "Which NBA team won six championships in the 1990s with Michael Jordan?",
          answer: "The Chicago Bulls.",
        },
        {
          prompt: "What is the term for recording double digits in three statistical categories in one game?",
          answer: "A triple-double.",
        },
        {
          prompt: "Which basketball inventor created the game in 1891?",
          answer: "James Naismith.",
        },
        {
          prompt: "Which NBA team plays home games at Madison Square Garden?",
          answer: "The New York Knicks.",
        },
        {
          prompt: "Which player was nicknamed Magic?",
          answer: "Earvin Johnson.",
        },
      ],
    },
    {
      name: "Soccer",
      cards: [
        {
          prompt: "Which country has won the most men's FIFA World Cups?",
          answer: "Brazil.",
        },
        {
          prompt: "What is the term for three goals scored by one player in a game?",
          answer: "A hat trick.",
        },
        {
          prompt: "Which Argentine star led his country to the 1986 World Cup title?",
          answer: "Diego Maradona.",
        },
        {
          prompt: "Which trophy is awarded to the winner of the UEFA Champions League?",
          answer: "The European Champion Clubs' Cup, commonly called the Champions League trophy.",
        },
        {
          prompt: "What card color signals that a soccer player has been sent off?",
          answer: "Red.",
        },
      ],
    },
  ],
};

export const wordOriginsTopic: JeopardyTopic = {
  title: "Word Origins & Language",
  intro: "Study roots, foreign phrases, grammar, and language facts often used in trivia clues.",
  groups: [
    {
      name: "Roots",
      cards: [
        {
          prompt: "What does the root 'bio' mean?",
          answer: "Life.",
        },
        {
          prompt: "What does the root 'chron' mean?",
          answer: "Time.",
        },
        {
          prompt: "What does the prefix 'poly' mean?",
          answer: "Many.",
        },
        {
          prompt: "What does the suffix 'phobia' mean?",
          answer: "Fear.",
        },
        {
          prompt: "What does the root 'geo' mean?",
          answer: "Earth.",
        },
      ],
    },
    {
      name: "Foreign Phrases",
      cards: [
        {
          prompt: "What does the Latin phrase 'carpe diem' mean?",
          answer: "Seize the day.",
        },
        {
          prompt: "What does 'bona fide' mean?",
          answer: "Genuine or in good faith.",
        },
        {
          prompt: "What does the French phrase 'deja vu' mean?",
          answer: "Already seen.",
        },
        {
          prompt: "What does the Latin phrase 'in medias res' mean?",
          answer: "In the middle of things.",
        },
        {
          prompt: "What does the Italian musical term 'a cappella' mean?",
          answer: "Singing without instrumental accompaniment.",
        },
      ],
    },
    {
      name: "Grammar",
      cards: [
        {
          prompt: "What part of speech modifies a noun?",
          answer: "An adjective.",
        },
        {
          prompt: "What part of speech modifies a verb, adjective, or another adverb?",
          answer: "An adverb.",
        },
        {
          prompt: "What is an oxymoron?",
          answer: "A phrase combining contradictory terms, such as 'jumbo shrimp'.",
        },
        {
          prompt: "What is an antonym?",
          answer: "A word with the opposite meaning of another word.",
        },
        {
          prompt: "What is the term for a word that sounds like another word but has a different meaning?",
          answer: "A homophone.",
        },
      ],
    },
    {
      name: "Languages",
      cards: [
        {
          prompt: "Which language family includes Spanish, French, Italian, Portuguese, and Romanian?",
          answer: "The Romance languages.",
        },
        {
          prompt: "Which ancient language was written in cuneiform in Mesopotamia?",
          answer: "Sumerian or Akkadian.",
        },
        {
          prompt: "Which alphabet is used for modern Russian?",
          answer: "The Cyrillic alphabet.",
        },
        {
          prompt: "Which constructed language was created by L. L. Zamenhof?",
          answer: "Esperanto.",
        },
        {
          prompt: "Which language is the main classical language of Hindu scripture?",
          answer: "Sanskrit.",
        },
      ],
    },
  ],
};

export const volcanoesTopic: JeopardyTopic = {
  title: "Volcanoes",
  intro: "Study famous volcanoes, eruption types, volcanic features, and tectonic settings.",
  groups: [
    {
      name: "Famous Volcanoes",
      cards: [
        {
          prompt: "Which Italian volcano destroyed Pompeii and Herculaneum in 79 CE?",
          answer: "Mount Vesuvius.",
        },
        {
          prompt: "Which Washington volcano erupted dramatically on May 18, 1980?",
          answer: "Mount St. Helens.",
        },
        {
          prompt: "Which Indonesian volcano produced a massive 1883 eruption heard thousands of miles away?",
          answer: "Krakatoa.",
        },
        {
          prompt: "Which Hawaiian shield volcano is one of Earth's most active volcanoes?",
          answer: "Kilauea.",
        },
        {
          prompt: "Which Sicilian volcano is Europe's highest and one of its most active?",
          answer: "Mount Etna.",
        },
      ],
    },
    {
      name: "Eruption Types",
      cards: [
        {
          prompt: "What type of volcanic eruption is generally gentle and dominated by flowing lava?",
          answer: "An effusive eruption.",
        },
        {
          prompt: "What type of eruption blasts ash, gas, and rock fragments into the air?",
          answer: "An explosive eruption.",
        },
        {
          prompt: "What is a pyroclastic flow?",
          answer: "A fast-moving, extremely hot current of gas, ash, and volcanic rock.",
        },
        {
          prompt: "What is a lahar?",
          answer: "A volcanic mudflow made of water mixed with ash, rock, and debris.",
        },
        {
          prompt: "What is tephra?",
          answer: "Rock fragments and particles ejected during a volcanic eruption.",
        },
      ],
    },
    {
      name: "Volcano Anatomy",
      cards: [
        {
          prompt: "What is magma called once it reaches Earth's surface?",
          answer: "Lava.",
        },
        {
          prompt: "What is the bowl-shaped depression at a volcano's summit called?",
          answer: "A crater.",
        },
        {
          prompt: "What is a much larger collapse depression formed after a major eruption called?",
          answer: "A caldera.",
        },
        {
          prompt: "What underground reservoir stores molten rock beneath a volcano?",
          answer: "A magma chamber.",
        },
        {
          prompt: "What is the main opening through which volcanic material erupts?",
          answer: "A vent.",
        },
      ],
    },
    {
      name: "Tectonics",
      cards: [
        {
          prompt: "What ocean rim is famous for frequent earthquakes and volcanoes?",
          answer: "The Ring of Fire.",
        },
        {
          prompt: "Which plate boundary commonly forms volcanic arcs above subduction zones?",
          answer: "A convergent plate boundary.",
        },
        {
          prompt: "What type of volcano has broad, gently sloping sides built by fluid lava flows?",
          answer: "A shield volcano.",
        },
        {
          prompt: "What type of volcano is steep-sided and built from alternating lava and ash layers?",
          answer: "A stratovolcano, also called a composite volcano.",
        },
        {
          prompt: "What is a hotspot in geology?",
          answer: "A long-lived source of magma that can create volcanoes within or beneath tectonic plates.",
        },
      ],
    },
  ],
};

export const polishHistoryTopic: JeopardyTopic = {
  title: "Polish History",
  intro: "Study major rulers, turning points, uprisings, and modern events in Poland's history.",
  groups: [
    {
      name: "Early Poland",
      cards: [
        {
          prompt: "Which ruler's 966 baptism is often treated as the beginning of Christian Poland?",
          answer: "Mieszko I.",
        },
        {
          prompt: "Who was crowned the first king of Poland in 1025?",
          answer: "Boleslaw I the Brave.",
        },
        {
          prompt: "Which medieval Polish dynasty began with Mieszko I?",
          answer: "The Piast dynasty.",
        },
        {
          prompt: "Which 1410 battle saw Polish-Lithuanian forces defeat the Teutonic Knights?",
          answer: "The Battle of Grunwald.",
        },
        {
          prompt: "Which city was the royal capital of Poland for much of the medieval and early modern period?",
          answer: "Krakow.",
        },
      ],
    },
    {
      name: "Commonwealth",
      cards: [
        {
          prompt: "Which 1569 agreement created the Polish-Lithuanian Commonwealth?",
          answer: "The Union of Lublin.",
        },
        {
          prompt: "What was the Sejm in the Polish-Lithuanian Commonwealth?",
          answer: "The parliament or legislative assembly.",
        },
        {
          prompt: "What Latin phrase names the noble privilege that let a single deputy block Sejm decisions?",
          answer: "Liberum veto.",
        },
        {
          prompt: "Which elected Polish king led relief forces at the 1683 Battle of Vienna?",
          answer: "John III Sobieski.",
        },
        {
          prompt: "What term refers to the Polish-Lithuanian noble class?",
          answer: "The szlachta.",
        },
      ],
    },
    {
      name: "Partitions And Uprisings",
      cards: [
        {
          prompt: "Which three powers partitioned Poland in the late 1700s?",
          answer: "Russia, Prussia, and Austria.",
        },
        {
          prompt: "What 1791 document is often called Europe's first modern written constitution?",
          answer: "The Constitution of 3 May.",
        },
        {
          prompt: "Which Polish military leader led a 1794 uprising against partitioning powers?",
          answer: "Tadeusz Kosciuszko.",
        },
        {
          prompt: "Which 1830-1831 rebellion challenged Russian rule in partitioned Poland?",
          answer: "The November Uprising.",
        },
        {
          prompt: "Which 1863-1864 rebellion was another major Polish uprising against Russian rule?",
          answer: "The January Uprising.",
        },
      ],
    },
    {
      name: "Modern Poland",
      cards: [
        {
          prompt: "Which leader is strongly associated with Polish independence in 1918?",
          answer: "Jozef Pilsudski.",
        },
        {
          prompt: "Which 1920 battle helped stop the Red Army during the Polish-Soviet War?",
          answer: "The Battle of Warsaw, also called the Miracle on the Vistula.",
        },
        {
          prompt: "Which 1944 uprising was launched by the Polish Home Army against German occupation?",
          answer: "The Warsaw Uprising.",
        },
        {
          prompt: "Which independent trade union helped challenge communist rule in Poland in the 1980s?",
          answer: "Solidarity.",
        },
        {
          prompt: "Which Solidarity leader later became president of Poland?",
          answer: "Lech Walesa.",
        },
      ],
    },
  ],
};
