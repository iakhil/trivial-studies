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

export const fifaWorldCupTopic: JeopardyTopic = {
  title: "FIFA World Cup",
  intro: "Study the history, champions, iconic moments, and records of the men's FIFA World Cup.",
  groups: [
    {
      name: "Tournament History",
      cards: [
        {
          prompt: "Which country hosted and won the first FIFA World Cup in 1930?",
          answer: "Uruguay.",
        },
        {
          prompt: "Why were no FIFA World Cup tournaments held in 1942 or 1946?",
          answer: "They were canceled because of World War II and its aftermath.",
        },
        {
          prompt: "Which country hosted the first FIFA World Cup held in Asia?",
          answer: "South Korea and Japan jointly hosted it in 2002.",
        },
        {
          prompt: "Which country hosted the first FIFA World Cup held in Africa?",
          answer: "South Africa in 2010.",
        },
        {
          prompt: "What was the World Cup trophy called before it was replaced in 1974?",
          answer: "The Jules Rimet Trophy.",
        },
      ],
    },
    {
      name: "Champions",
      cards: [
        {
          prompt: "Which country has won a record five men's FIFA World Cup titles?",
          answer: "Brazil.",
        },
        {
          prompt: "Which country won the 1966 FIFA World Cup on home soil?",
          answer: "England.",
        },
        {
          prompt: "Which country won its first FIFA World Cup title in 2010?",
          answer: "Spain.",
        },
        {
          prompt: "Which country defeated Croatia in the 2018 FIFA World Cup final?",
          answer: "France.",
        },
        {
          prompt: "Which country won the 2022 FIFA World Cup after defeating France on penalties?",
          answer: "Argentina.",
        },
      ],
    },
    {
      name: "Iconic Moments",
      cards: [
        {
          prompt: "Which Brazilian star is the only men's player to win three FIFA World Cups?",
          answer: "Pele.",
        },
        {
          prompt: "Which Argentine player scored the 'Hand of God' goal against England in 1986?",
          answer: "Diego Maradona.",
        },
        {
          prompt: "Which French player scored two headed goals in the 1998 World Cup final?",
          answer: "Zinedine Zidane.",
        },
        {
          prompt: "Which goalkeeper captained Italy to the 1982 FIFA World Cup title at age 40?",
          answer: "Dino Zoff.",
        },
        {
          prompt: "Which player scored a hat trick for France in the 2022 World Cup final?",
          answer: "Kylian Mbappe.",
        },
      ],
    },
    {
      name: "Records",
      cards: [
        {
          prompt: "Who is the all-time leading scorer in men's FIFA World Cup matches with 16 goals?",
          answer: "Miroslav Klose.",
        },
        {
          prompt: "Who scored a record 13 goals in a single World Cup tournament in 1958?",
          answer: "Just Fontaine.",
        },
        {
          prompt: "Which player holds the record for the most men's World Cup match appearances with 26?",
          answer: "Lionel Messi.",
        },
        {
          prompt: "Which Turkish player scored the fastest goal in World Cup history in 2002?",
          answer: "Hakan Sukur.",
        },
        {
          prompt: "Which two goalkeepers share the men's World Cup record for the most clean sheets with 10?",
          answer: "Peter Shilton and Fabien Barthez share the record.",
        },
      ],
    },
  ],
};

export const pulitzerPrizeTriviaTopic: JeopardyTopic = {
  title: "Pulitzer Prize Trivia",
  intro: "Study Pulitzer Prize history, journalism winners, literature, drama, music, and major nonfiction honorees.",
  groups: [
    {
      name: "Prize Basics",
      cards: [
        {
          prompt: "Which newspaper publisher established the Pulitzer Prizes through his will?",
          answer: "Joseph Pulitzer.",
        },
        {
          prompt: "Which university administers the Pulitzer Prizes?",
          answer: "Columbia University.",
        },
        {
          prompt: "In what year were the first Pulitzer Prizes awarded?",
          answer: "1917.",
        },
        {
          prompt: "Which Pulitzer category awards a gold medal rather than a cash prize to an individual?",
          answer: "Public Service, awarded to a news organization.",
        },
        {
          prompt: "Which major prize category covers editorial cartooning, commentary, and criticism?",
          answer: "Journalism.",
        },
      ],
    },
    {
      name: "Journalism",
      cards: [
        {
          prompt: "Which newspaper won a 1972 Pulitzer for publishing the Pentagon Papers?",
          answer: "The New York Times.",
        },
        {
          prompt: "Which newspaper won the 1973 Public Service Pulitzer for Watergate reporting?",
          answer: "The Washington Post.",
        },
        {
          prompt: "Which Boston newspaper won the 2003 Public Service Pulitzer for exposing abuse in the Catholic Church?",
          answer: "The Boston Globe.",
        },
        {
          prompt: "What journalism award is considered the Pulitzer's highest honor?",
          answer: "The Public Service Pulitzer.",
        },
        {
          prompt: "Which photojournalist won for the famous Vietnam War photograph often called 'Napalm Girl'?",
          answer: "Nick Ut.",
        },
      ],
    },
    {
      name: "Fiction And Drama",
      cards: [
        {
          prompt: "Which Margaret Mitchell novel won the 1937 Pulitzer Prize for the Novel?",
          answer: "Gone with the Wind.",
        },
        {
          prompt: "Which John Steinbeck novel won the 1940 Pulitzer Prize for Fiction?",
          answer: "The Grapes of Wrath.",
        },
        {
          prompt: "Which Harper Lee novel won the 1961 Pulitzer Prize for Fiction?",
          answer: "To Kill a Mockingbird.",
        },
        {
          prompt: "Which Arthur Miller play won the 1949 Pulitzer Prize for Drama?",
          answer: "Death of a Salesman.",
        },
        {
          prompt: "Which Lin-Manuel Miranda musical won the 2016 Pulitzer Prize for Drama?",
          answer: "Hamilton.",
        },
      ],
    },
    {
      name: "Arts And Nonfiction",
      cards: [
        {
          prompt: "Which rapper won the 2018 Pulitzer Prize for Music for DAMN.?",
          answer: "Kendrick Lamar.",
        },
        {
          prompt: "Which jazz musician won the 1997 Pulitzer Prize for Music for Blood on the Fields?",
          answer: "Wynton Marsalis.",
        },
        {
          prompt: "Which poet won four Pulitzer Prizes for Poetry?",
          answer: "Robert Frost.",
        },
        {
          prompt: "Which Oppenheimer biography by Kai Bird and Martin J. Sherwin won the 2006 Biography Pulitzer?",
          answer: "American Prometheus.",
        },
        {
          prompt: "Which James M. McPherson Civil War book won the 1989 Pulitzer Prize for History?",
          answer: "Battle Cry of Freedom.",
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

export const usNationalParksTopic: JeopardyTopic = {
  title: "US National Parks",
  intro: "Study designated US national parks grouped by state and territory.",
  groups: [
    {
      name: "Alaska",
      cards: [
        {
          prompt: "Which Alaska national park is centered on North America's tallest peak?",
          answer: "Denali National Park and Preserve.",
        },
        {
          prompt: "Which remote Alaska national park lies entirely north of the Arctic Circle?",
          answer: "Gates of the Arctic National Park and Preserve.",
        },
        {
          prompt: "Which Alaska national park is known for tidewater glaciers and Glacier Bay itself?",
          answer: "Glacier Bay National Park and Preserve.",
        },
        {
          prompt: "Which Alaska national park is famous for brown bears fishing at Brooks Falls?",
          answer: "Katmai National Park and Preserve.",
        },
        {
          prompt: "Which Alaska national park protects Harding Icefield and fjords near Seward?",
          answer: "Kenai Fjords National Park.",
        },
        {
          prompt: "Which Alaska national park protects dunes and caribou migration routes above the Arctic Circle?",
          answer: "Kobuk Valley National Park.",
        },
        {
          prompt: "Which Alaska national park includes turquoise lakes, volcanoes, and the Chigmit Mountains?",
          answer: "Lake Clark National Park and Preserve.",
        },
        {
          prompt: "Which Alaska national park is the largest unit in the National Park System?",
          answer: "Wrangell-St. Elias National Park and Preserve.",
        },
      ],
    },
    {
      name: "American Samoa",
      cards: [
        {
          prompt: "Which US national park protects tropical rainforest, coral reefs, and Samoan culture in the South Pacific?",
          answer: "National Park of American Samoa.",
        },
      ],
    },
    {
      name: "Arizona",
      cards: [
        {
          prompt: "Which Arizona national park is centered on a vast canyon carved by the Colorado River?",
          answer: "Grand Canyon National Park.",
        },
        {
          prompt: "Which Arizona national park preserves colorful badlands and fossilized Triassic trees?",
          answer: "Petrified Forest National Park.",
        },
        {
          prompt: "Which Arizona national park is named for the giant cactus that symbolizes the Sonoran Desert?",
          answer: "Saguaro National Park.",
        },
      ],
    },
    {
      name: "Arkansas",
      cards: [
        {
          prompt: "Which Arkansas national park is built around historic thermal springs and Bathhouse Row?",
          answer: "Hot Springs National Park.",
        },
      ],
    },
    {
      name: "California",
      cards: [
        {
          prompt: "Which California national park protects five islands off the southern coast?",
          answer: "Channel Islands National Park.",
        },
        {
          prompt: "Which California and Nevada national park includes Badwater Basin and extreme desert landscapes?",
          answer: "Death Valley National Park.",
        },
        {
          prompt: "Which California national park joins the Mojave and Colorado deserts and is named for a distinctive yucca?",
          answer: "Joshua Tree National Park.",
        },
        {
          prompt: "Which Sierra Nevada national park borders Sequoia and protects deep canyons and high peaks?",
          answer: "Kings Canyon National Park.",
        },
        {
          prompt: "Which northern California national park preserves hydrothermal features around a Cascade volcano?",
          answer: "Lassen Volcanic National Park.",
        },
        {
          prompt: "Which California national park protects volcanic spires and talus caves in the Gabilan Range?",
          answer: "Pinnacles National Park.",
        },
        {
          prompt: "Which California national park protects some of the world's tallest coast redwood trees?",
          answer: "Redwood National and State Parks.",
        },
        {
          prompt: "Which California national park is famous for giant sequoia groves including the General Sherman Tree?",
          answer: "Sequoia National Park.",
        },
        {
          prompt: "Which California national park is known for Yosemite Valley, Half Dome, and El Capitan?",
          answer: "Yosemite National Park.",
        },
      ],
    },
    {
      name: "Colorado",
      cards: [
        {
          prompt: "Which Colorado national park protects a steep, narrow gorge of the Gunnison River?",
          answer: "Black Canyon of the Gunnison National Park.",
        },
        {
          prompt: "Which Colorado national park contains the tallest sand dunes in North America?",
          answer: "Great Sand Dunes National Park and Preserve.",
        },
        {
          prompt: "Which Colorado national park preserves ancestral Pueblo cliff dwellings?",
          answer: "Mesa Verde National Park.",
        },
        {
          prompt: "Which Colorado national park is known for Trail Ridge Road and alpine Rocky Mountain scenery?",
          answer: "Rocky Mountain National Park.",
        },
      ],
    },
    {
      name: "Florida",
      cards: [
        {
          prompt: "Which Florida national park protects coral reefs and islands near Miami?",
          answer: "Biscayne National Park.",
        },
        {
          prompt: "Which Florida national park is centered on Fort Jefferson and remote islands west of Key West?",
          answer: "Dry Tortugas National Park.",
        },
        {
          prompt: "Which Florida national park protects a vast subtropical wetland and sawgrass prairie?",
          answer: "Everglades National Park.",
        },
      ],
    },
    {
      name: "Hawaii",
      cards: [
        {
          prompt: "Which Hawaii national park protects the summit of a massive dormant volcano on Maui?",
          answer: "Haleakala National Park.",
        },
        {
          prompt: "Which Hawaii national park protects Kilauea and Mauna Loa?",
          answer: "Hawaii Volcanoes National Park.",
        },
      ],
    },
    {
      name: "Idaho",
      cards: [
        {
          prompt: "Which national park extends into Idaho in its remote western edge?",
          answer: "Yellowstone National Park.",
        },
      ],
    },
    {
      name: "Indiana",
      cards: [
        {
          prompt: "Which Indiana national park protects Lake Michigan dunes, wetlands, and prairies?",
          answer: "Indiana Dunes National Park.",
        },
      ],
    },
    {
      name: "Kentucky",
      cards: [
        {
          prompt: "Which Kentucky national park protects the world's longest known cave system?",
          answer: "Mammoth Cave National Park.",
        },
      ],
    },
    {
      name: "Maine",
      cards: [
        {
          prompt: "Which Maine national park protects Mount Desert Island, coastal headlands, and Cadillac Mountain?",
          answer: "Acadia National Park.",
        },
      ],
    },
    {
      name: "Michigan",
      cards: [
        {
          prompt: "Which Michigan national park protects a remote island wilderness in Lake Superior?",
          answer: "Isle Royale National Park.",
        },
      ],
    },
    {
      name: "Minnesota",
      cards: [
        {
          prompt: "Which Minnesota national park protects interconnected lakes along the Canadian border?",
          answer: "Voyageurs National Park.",
        },
      ],
    },
    {
      name: "Missouri",
      cards: [
        {
          prompt: "Which Missouri national park centers on the stainless steel monument in St. Louis?",
          answer: "Gateway Arch National Park.",
        },
      ],
    },
    {
      name: "Montana",
      cards: [
        {
          prompt: "Which Montana national park is known for Going-to-the-Sun Road and rugged northern Rockies scenery?",
          answer: "Glacier National Park.",
        },
        {
          prompt: "Which national park reaches Montana with geysers, wildlife, and the Yellowstone ecosystem?",
          answer: "Yellowstone National Park.",
        },
      ],
    },
    {
      name: "Nevada",
      cards: [
        {
          prompt: "Which California and Nevada national park includes Badwater Basin and Telescope Peak?",
          answer: "Death Valley National Park.",
        },
        {
          prompt: "Which Nevada national park protects Wheeler Peak, bristlecone pines, and Lehman Caves?",
          answer: "Great Basin National Park.",
        },
      ],
    },
    {
      name: "New Mexico",
      cards: [
        {
          prompt: "Which New Mexico national park protects vast limestone caves in the Guadalupe Mountains?",
          answer: "Carlsbad Caverns National Park.",
        },
        {
          prompt: "Which New Mexico national park protects bright gypsum dunes in the Tularosa Basin?",
          answer: "White Sands National Park.",
        },
      ],
    },
    {
      name: "North Carolina",
      cards: [
        {
          prompt: "Which national park spans North Carolina and Tennessee with misty Appalachian mountains?",
          answer: "Great Smoky Mountains National Park.",
        },
      ],
    },
    {
      name: "North Dakota",
      cards: [
        {
          prompt: "Which North Dakota national park protects badlands landscapes linked to a future US president's ranching years?",
          answer: "Theodore Roosevelt National Park.",
        },
      ],
    },
    {
      name: "Ohio",
      cards: [
        {
          prompt: "Which Ohio national park follows the Cuyahoga River between Cleveland and Akron?",
          answer: "Cuyahoga Valley National Park.",
        },
      ],
    },
    {
      name: "Oregon",
      cards: [
        {
          prompt: "Which Oregon national park protects the deep blue lake inside the caldera of Mount Mazama?",
          answer: "Crater Lake National Park.",
        },
      ],
    },
    {
      name: "South Carolina",
      cards: [
        {
          prompt: "Which South Carolina national park protects old-growth bottomland hardwood forest?",
          answer: "Congaree National Park.",
        },
      ],
    },
    {
      name: "South Dakota",
      cards: [
        {
          prompt: "Which South Dakota national park protects eroded buttes, mixed-grass prairie, and fossil beds?",
          answer: "Badlands National Park.",
        },
        {
          prompt: "Which South Dakota national park protects a complex cave system and mixed-grass prairie?",
          answer: "Wind Cave National Park.",
        },
      ],
    },
    {
      name: "Tennessee",
      cards: [
        {
          prompt: "Which national park spans Tennessee and North Carolina and is one of the most visited in the country?",
          answer: "Great Smoky Mountains National Park.",
        },
      ],
    },
    {
      name: "Texas",
      cards: [
        {
          prompt: "Which Texas national park protects Chihuahuan Desert, Rio Grande canyons, and the Chisos Mountains?",
          answer: "Big Bend National Park.",
        },
        {
          prompt: "Which Texas national park protects the highest point in Texas and an ancient reef landscape?",
          answer: "Guadalupe Mountains National Park.",
        },
      ],
    },
    {
      name: "Utah",
      cards: [
        {
          prompt: "Which Utah national park is famous for Delicate Arch and thousands of natural stone arches?",
          answer: "Arches National Park.",
        },
        {
          prompt: "Which Utah national park is known for orange hoodoos in amphitheater-shaped basins?",
          answer: "Bryce Canyon National Park.",
        },
        {
          prompt: "Which Utah national park protects rugged districts carved by the Colorado and Green rivers?",
          answer: "Canyonlands National Park.",
        },
        {
          prompt: "Which Utah national park preserves the Waterpocket Fold?",
          answer: "Capitol Reef National Park.",
        },
        {
          prompt: "Which Utah national park is known for Zion Canyon and the Virgin River?",
          answer: "Zion National Park.",
        },
      ],
    },
    {
      name: "Virgin Islands",
      cards: [
        {
          prompt: "Which US national park protects beaches, coral reefs, and tropical forest on St. John?",
          answer: "Virgin Islands National Park.",
        },
      ],
    },
    {
      name: "Virginia",
      cards: [
        {
          prompt: "Which Virginia national park follows the Blue Ridge Mountains along Skyline Drive?",
          answer: "Shenandoah National Park.",
        },
      ],
    },
    {
      name: "Washington",
      cards: [
        {
          prompt: "Which Washington national park surrounds a glaciated Cascade stratovolcano also called Tahoma?",
          answer: "Mount Rainier National Park.",
        },
        {
          prompt: "Which Washington national park protects rugged Cascade peaks near the Canadian border?",
          answer: "North Cascades National Park.",
        },
        {
          prompt: "Which Washington national park includes temperate rainforest, Pacific coastline, and high mountains?",
          answer: "Olympic National Park.",
        },
      ],
    },
    {
      name: "West Virginia",
      cards: [
        {
          prompt: "Which West Virginia national park protects a deep river gorge and the New River?",
          answer: "New River Gorge National Park and Preserve.",
        },
      ],
    },
    {
      name: "Wyoming",
      cards: [
        {
          prompt: "Which Wyoming national park protects the Teton Range and Jackson Hole valley?",
          answer: "Grand Teton National Park.",
        },
        {
          prompt: "Which Wyoming-based national park is famous for Old Faithful and the Grand Prismatic Spring?",
          answer: "Yellowstone National Park.",
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

export const ancientHistoryTopic: JeopardyTopic = {
  title: "Ancient History",
  intro: "Study early civilizations, classical empires, ancient rulers, and landmark texts.",
  groups: [
    {
      name: "Early Civilizations",
      cards: [
        {
          prompt: "Which civilization developed along the Tigris and Euphrates rivers?",
          answer: "Mesopotamia.",
        },
        {
          prompt: "Which ancient writing system used wedge-shaped marks on clay tablets?",
          answer: "Cuneiform.",
        },
        {
          prompt: "Which ancient civilization built cities such as Harappa and Mohenjo-daro?",
          answer: "The Indus Valley civilization.",
        },
        {
          prompt: "Which Chinese dynasty is the earliest dynasty supported by strong archaeological evidence?",
          answer: "The Shang dynasty.",
        },
        {
          prompt: "Which Egyptian king is associated with the Great Pyramid at Giza?",
          answer: "Khufu, also called Cheops.",
        },
      ],
    },
    {
      name: "Greece",
      cards: [
        {
          prompt: "Which Greek city-state is remembered as the birthplace of democracy?",
          answer: "Athens.",
        },
        {
          prompt: "Which wars pitted Greek city-states against the Persian Empire?",
          answer: "The Persian Wars.",
        },
        {
          prompt: "Which Greek historian wrote about the Peloponnesian War?",
          answer: "Thucydides.",
        },
        {
          prompt: "Which philosopher taught Plato?",
          answer: "Socrates.",
        },
        {
          prompt: "Which Macedonian king conquered much of the eastern Mediterranean and Persia?",
          answer: "Alexander the Great.",
        },
      ],
    },
    {
      name: "Rome",
      cards: [
        {
          prompt: "According to legend, which twin brothers founded Rome?",
          answer: "Romulus and Remus.",
        },
        {
          prompt: "Which Carthaginian general crossed the Alps during the Second Punic War?",
          answer: "Hannibal.",
        },
        {
          prompt: "Which Roman emperor was the first emperor of Rome?",
          answer: "Augustus.",
        },
        {
          prompt: "Which Roman road system helped move armies and goods across the empire?",
          answer: "Roman roads, including the Appian Way.",
        },
        {
          prompt: "In what year did the Western Roman Empire traditionally fall?",
          answer: "476 CE.",
        },
      ],
    },
    {
      name: "Ancient Texts",
      cards: [
        {
          prompt: "Which Mesopotamian epic follows a king of Uruk seeking immortality?",
          answer: "The Epic of Gilgamesh.",
        },
        {
          prompt: "Which Indian texts include the Rigveda?",
          answer: "The Vedas.",
        },
        {
          prompt: "Which Chinese philosopher is associated with the Analects?",
          answer: "Confucius.",
        },
        {
          prompt: "Which Greek poet is credited with the Iliad and the Odyssey?",
          answer: "Homer.",
        },
        {
          prompt: "Which Buddhist texts are also called the Three Baskets?",
          answer: "The Tripitaka or Pali Canon.",
        },
      ],
    },
  ],
};

export const europeanHistoryTopic: JeopardyTopic = {
  title: "European History",
  intro: "Study medieval Europe, the Renaissance, reformations, and modern European politics.",
  groups: [
    {
      name: "Medieval Europe",
      cards: [
        {
          prompt: "Which Frankish ruler was crowned emperor in Rome on Christmas Day in 800?",
          answer: "Charlemagne.",
        },
        {
          prompt: "Which 1066 battle led to Norman rule in England?",
          answer: "The Battle of Hastings.",
        },
        {
          prompt: "What was the dominant social and landholding system of medieval Europe?",
          answer: "Feudalism.",
        },
        {
          prompt: "Which pandemic devastated Europe in the mid-1300s?",
          answer: "The Black Death.",
        },
        {
          prompt: "Which long conflict was fought between England and France from 1337 to 1453?",
          answer: "The Hundred Years' War.",
        },
      ],
    },
    {
      name: "Renaissance",
      cards: [
        {
          prompt: "Which Italian city is especially associated with the Medici family and Renaissance art?",
          answer: "Florence.",
        },
        {
          prompt: "Which invention by Gutenberg helped spread Renaissance and Reformation ideas?",
          answer: "The movable-type printing press.",
        },
        {
          prompt: "Who wrote The Prince?",
          answer: "Niccolo Machiavelli.",
        },
        {
          prompt: "Which Renaissance ideal emphasized human potential and classical learning?",
          answer: "Humanism.",
        },
        {
          prompt: "Which artist painted The School of Athens?",
          answer: "Raphael.",
        },
      ],
    },
    {
      name: "Reformation",
      cards: [
        {
          prompt: "Who published the Ninety-five Theses in 1517?",
          answer: "Martin Luther.",
        },
        {
          prompt: "Which English monarch broke with Rome and founded the Church of England?",
          answer: "Henry VIII.",
        },
        {
          prompt: "Which Swiss reformer is strongly associated with predestination?",
          answer: "John Calvin.",
        },
        {
          prompt: "Which Catholic council responded to the Protestant Reformation?",
          answer: "The Council of Trent.",
        },
        {
          prompt: "Which 1555 agreement allowed rulers in the Holy Roman Empire to choose Lutheranism or Catholicism?",
          answer: "The Peace of Augsburg.",
        },
      ],
    },
    {
      name: "Modern Europe",
      cards: [
        {
          prompt: "Which 1815 meeting redrew Europe after Napoleon's defeat?",
          answer: "The Congress of Vienna.",
        },
        {
          prompt: "Which Prussian leader helped unify Germany in 1871?",
          answer: "Otto von Bismarck.",
        },
        {
          prompt: "Which 1919 treaty formally ended World War I with Germany?",
          answer: "The Treaty of Versailles.",
        },
        {
          prompt: "Which post-World War II plan helped rebuild Western Europe?",
          answer: "The Marshall Plan.",
        },
        {
          prompt: "Which 1992 treaty helped create the European Union?",
          answer: "The Maastricht Treaty.",
        },
      ],
    },
  ],
};

export const worldWarsTopic: JeopardyTopic = {
  title: "World Wars",
  intro: "Study causes, battles, leaders, treaties, and turning points from both world wars.",
  groups: [
    {
      name: "World War I",
      cards: [
        {
          prompt: "Which assassination helped trigger World War I?",
          answer: "The assassination of Archduke Franz Ferdinand.",
        },
        {
          prompt: "What term describes the dug-in fighting lines on the Western Front?",
          answer: "Trench warfare.",
        },
        {
          prompt: "Which 1917 telegram encouraged Mexico to ally with Germany against the United States?",
          answer: "The Zimmermann Telegram.",
        },
        {
          prompt: "Which 1918 armistice date ended fighting in World War I?",
          answer: "November 11, 1918.",
        },
        {
          prompt: "Which organization was created after World War I to promote collective security?",
          answer: "The League of Nations.",
        },
      ],
    },
    {
      name: "World War II",
      cards: [
        {
          prompt: "Which 1939 invasion began World War II in Europe?",
          answer: "Germany's invasion of Poland.",
        },
        {
          prompt: "Which 1941 attack brought the United States into World War II?",
          answer: "The attack on Pearl Harbor.",
        },
        {
          prompt: "What was the code name for the Allied invasion of Normandy?",
          answer: "Operation Overlord.",
        },
        {
          prompt: "Which battle is often considered the turning point on the Eastern Front?",
          answer: "The Battle of Stalingrad.",
        },
        {
          prompt: "Which project developed the first atomic bombs?",
          answer: "The Manhattan Project.",
        },
      ],
    },
    {
      name: "Leaders",
      cards: [
        {
          prompt: "Who was the British prime minister for most of World War II?",
          answer: "Winston Churchill.",
        },
        {
          prompt: "Who led Nazi Germany during World War II?",
          answer: "Adolf Hitler.",
        },
        {
          prompt: "Who was the Soviet leader during World War II?",
          answer: "Joseph Stalin.",
        },
        {
          prompt: "Which U.S. president led the country through most of World War II?",
          answer: "Franklin D. Roosevelt.",
        },
        {
          prompt: "Which French general led the Free French movement?",
          answer: "Charles de Gaulle.",
        },
      ],
    },
    {
      name: "Aftermath",
      cards: [
        {
          prompt: "Which trials prosecuted major Nazi war criminals after World War II?",
          answer: "The Nuremberg Trials.",
        },
        {
          prompt: "Which international organization was founded in 1945 after World War II?",
          answer: "The United Nations.",
        },
        {
          prompt: "What term describes the post-World War II rivalry between the United States and Soviet Union?",
          answer: "The Cold War.",
        },
        {
          prompt: "Which alliance was founded in 1949 for collective defense in the North Atlantic?",
          answer: "NATO.",
        },
        {
          prompt: "Which plan divided Germany into occupation zones after World War II?",
          answer: "Allied occupation by the United States, Britain, France, and the Soviet Union.",
        },
      ],
    },
  ],
};

export const biologyTopic: JeopardyTopic = {
  title: "Biology",
  intro: "Study cells, genetics, evolution, ecology, and human body basics.",
  groups: [
    {
      name: "Cells",
      cards: [
        {
          prompt: "What structure controls what enters and leaves a cell?",
          answer: "The cell membrane.",
        },
        {
          prompt: "Which organelle contains most of a eukaryotic cell's DNA?",
          answer: "The nucleus.",
        },
        {
          prompt: "Which organelles carry out photosynthesis in plant cells?",
          answer: "Chloroplasts.",
        },
        {
          prompt: "What is the fluid-like material inside a cell called?",
          answer: "Cytoplasm.",
        },
        {
          prompt: "Which structures make proteins?",
          answer: "Ribosomes.",
        },
      ],
    },
    {
      name: "Genetics",
      cards: [
        {
          prompt: "What molecule stores hereditary information?",
          answer: "DNA.",
        },
        {
          prompt: "What are different versions of a gene called?",
          answer: "Alleles.",
        },
        {
          prompt: "Who is known for pea plant experiments that helped found genetics?",
          answer: "Gregor Mendel.",
        },
        {
          prompt: "What is the name for the full set of an organism's genetic material?",
          answer: "The genome.",
        },
        {
          prompt: "What process copies DNA before cell division?",
          answer: "DNA replication.",
        },
      ],
    },
    {
      name: "Evolution",
      cards: [
        {
          prompt: "Which scientist wrote On the Origin of Species?",
          answer: "Charles Darwin.",
        },
        {
          prompt: "What process favors traits that improve survival and reproduction?",
          answer: "Natural selection.",
        },
        {
          prompt: "What is a fossil?",
          answer: "Preserved evidence of ancient life.",
        },
        {
          prompt: "What term describes the formation of new species?",
          answer: "Speciation.",
        },
        {
          prompt: "Which islands helped inspire Darwin's ideas about evolution?",
          answer: "The Galapagos Islands.",
        },
      ],
    },
    {
      name: "Ecology",
      cards: [
        {
          prompt: "What is a group of the same species living in one area called?",
          answer: "A population.",
        },
        {
          prompt: "What is the role an organism plays in its ecosystem called?",
          answer: "Its niche.",
        },
        {
          prompt: "What organisms make their own food and form the base of many food webs?",
          answer: "Producers.",
        },
        {
          prompt: "What is biodiversity?",
          answer: "The variety of life in an area or on Earth.",
        },
        {
          prompt: "What process returns nitrogen from the atmosphere to forms organisms can use?",
          answer: "Nitrogen fixation.",
        },
      ],
    },
  ],
};

export const chemistryTopic: JeopardyTopic = {
  title: "Chemistry",
  intro: "Study elements, bonding, reactions, acids and bases, and lab vocabulary.",
  groups: [
    {
      name: "Elements",
      cards: [
        {
          prompt: "What is the chemical symbol for iron?",
          answer: "Fe.",
        },
        {
          prompt: "What is the chemical symbol for silver?",
          answer: "Ag.",
        },
        {
          prompt: "Which element has atomic number 6?",
          answer: "Carbon.",
        },
        {
          prompt: "Which noble gas is used in bright advertising signs?",
          answer: "Neon.",
        },
        {
          prompt: "What is the most abundant element in the universe?",
          answer: "Hydrogen.",
        },
      ],
    },
    {
      name: "Bonding",
      cards: [
        {
          prompt: "What type of bond involves sharing electron pairs?",
          answer: "A covalent bond.",
        },
        {
          prompt: "What type of bond forms from attraction between oppositely charged ions?",
          answer: "An ionic bond.",
        },
        {
          prompt: "What is a molecule?",
          answer: "Two or more atoms chemically bonded together.",
        },
        {
          prompt: "What is the name for a positively charged ion?",
          answer: "A cation.",
        },
        {
          prompt: "What is the name for a negatively charged ion?",
          answer: "An anion.",
        },
      ],
    },
    {
      name: "Reactions",
      cards: [
        {
          prompt: "What law says mass is not created or destroyed in a chemical reaction?",
          answer: "The law of conservation of mass.",
        },
        {
          prompt: "What type of reaction combines a substance with oxygen and releases energy?",
          answer: "Combustion.",
        },
        {
          prompt: "What is a catalyst?",
          answer: "A substance that speeds up a reaction without being consumed.",
        },
        {
          prompt: "What is oxidation often defined as in terms of electrons?",
          answer: "Loss of electrons.",
        },
        {
          prompt: "What is reduction often defined as in terms of electrons?",
          answer: "Gain of electrons.",
        },
      ],
    },
    {
      name: "Acids And Bases",
      cards: [
        {
          prompt: "What pH values are acidic?",
          answer: "Values below 7.",
        },
        {
          prompt: "What pH values are basic?",
          answer: "Values above 7.",
        },
        {
          prompt: "What ion is associated with acids in water?",
          answer: "Hydrogen ions, H+.",
        },
        {
          prompt: "What ion is associated with many bases in water?",
          answer: "Hydroxide ions, OH-.",
        },
        {
          prompt: "What reaction between an acid and a base often forms water and a salt?",
          answer: "Neutralization.",
        },
      ],
    },
  ],
};

export const astronomyTopic: JeopardyTopic = {
  title: "Astronomy",
  intro: "Study planets, stars, galaxies, missions, and major space concepts.",
  groups: [
    {
      name: "Solar System",
      cards: [
        {
          prompt: "Which planet is closest to the Sun?",
          answer: "Mercury.",
        },
        {
          prompt: "Which planet has the Great Red Spot?",
          answer: "Jupiter.",
        },
        {
          prompt: "Which planet rotates on its side compared with the others?",
          answer: "Uranus.",
        },
        {
          prompt: "What is the asteroid belt located between?",
          answer: "Mars and Jupiter.",
        },
        {
          prompt: "Which dwarf planet was formerly classified as the ninth planet?",
          answer: "Pluto.",
        },
      ],
    },
    {
      name: "Stars",
      cards: [
        {
          prompt: "What process powers the Sun and other main-sequence stars?",
          answer: "Nuclear fusion.",
        },
        {
          prompt: "What is a supernova?",
          answer: "A powerful stellar explosion.",
        },
        {
          prompt: "What color are the hottest stars, generally speaking?",
          answer: "Blue.",
        },
        {
          prompt: "What is a neutron star?",
          answer: "An extremely dense remnant of a massive star.",
        },
        {
          prompt: "What diagram plots stars by luminosity and temperature?",
          answer: "The Hertzsprung-Russell diagram.",
        },
      ],
    },
    {
      name: "Galaxies",
      cards: [
        {
          prompt: "What type of galaxy is the Milky Way?",
          answer: "A barred spiral galaxy.",
        },
        {
          prompt: "Which large galaxy is on a future collision course with the Milky Way?",
          answer: "The Andromeda Galaxy.",
        },
        {
          prompt: "What is the name for a galaxy's central supermassive black hole region when highly active?",
          answer: "An active galactic nucleus.",
        },
        {
          prompt: "What invisible substance is inferred from gravity but does not emit light?",
          answer: "Dark matter.",
        },
        {
          prompt: "What observation showed that the universe is expanding?",
          answer: "The redshift of distant galaxies.",
        },
      ],
    },
    {
      name: "Spaceflight",
      cards: [
        {
          prompt: "Who was the first human in space?",
          answer: "Yuri Gagarin.",
        },
        {
          prompt: "Who was the first person to walk on the Moon?",
          answer: "Neil Armstrong.",
        },
        {
          prompt: "Which telescope launched in 1990 and transformed optical astronomy?",
          answer: "The Hubble Space Telescope.",
        },
        {
          prompt: "Which NASA rover landed in Jezero Crater on Mars in 2021?",
          answer: "Perseverance.",
        },
        {
          prompt: "What reusable NASA spacecraft program flew from 1981 to 2011?",
          answer: "The Space Shuttle.",
        },
      ],
    },
  ],
};

export const brazilianGeographyTopic: JeopardyTopic = {
  title: "Brazilian Geography",
  intro: "Study Brazil's regions, rivers, biomes, cities, and major physical landmarks.",
  groups: [
    {
      name: "Regions",
      cards: [
        {
          prompt: "How many official geographic regions does Brazil have?",
          answer: "Five: North, Northeast, Central-West, Southeast, and South.",
        },
        {
          prompt: "Which Brazilian region contains most of the Amazon rainforest?",
          answer: "The North region.",
        },
        {
          prompt: "Which region includes the states of Sao Paulo, Rio de Janeiro, Minas Gerais, and Espirito Santo?",
          answer: "The Southeast region.",
        },
        {
          prompt: "Which region is known for the Pantanal and the federal capital, Brasilia?",
          answer: "The Central-West region.",
        },
        {
          prompt: "Which southern Brazilian state borders both Argentina and Uruguay?",
          answer: "Rio Grande do Sul.",
        },
      ],
    },
    {
      name: "Rivers",
      cards: [
        {
          prompt: "What is the largest river system in Brazil?",
          answer: "The Amazon River system.",
        },
        {
          prompt: "Which major river flows through the semi-arid Northeast and is nicknamed the river of national integration?",
          answer: "The Sao Francisco River.",
        },
        {
          prompt: "Which river forms part of the border between Brazil and Paraguay near the Itaipu Dam?",
          answer: "The Parana River.",
        },
        {
          prompt: "Which dark-water tributary meets the Amazon near Manaus?",
          answer: "The Rio Negro.",
        },
        {
          prompt: "Which major Amazon tributary rises in Peru and enters Brazil before joining the Amazon near Manaus?",
          answer: "The Solimoes River.",
        },
      ],
    },
    {
      name: "Biomes",
      cards: [
        {
          prompt: "Which Brazilian biome is the world's largest tropical rainforest?",
          answer: "The Amazon.",
        },
        {
          prompt: "Which vast tropical savanna covers much of central Brazil?",
          answer: "The Cerrado.",
        },
        {
          prompt: "Which semi-arid biome is found mostly in Brazil's Northeast?",
          answer: "The Caatinga.",
        },
        {
          prompt: "Which wetland region is shared by Brazil, Bolivia, and Paraguay?",
          answer: "The Pantanal.",
        },
        {
          prompt: "Which coastal forest biome once stretched along much of Brazil's Atlantic coast?",
          answer: "The Atlantic Forest, or Mata Atlantica.",
        },
      ],
    },
    {
      name: "Cities",
      cards: [
        {
          prompt: "What is the capital of Brazil?",
          answer: "Brasilia.",
        },
        {
          prompt: "Which city is Brazil's largest by population and the core of its biggest metropolitan area?",
          answer: "Sao Paulo.",
        },
        {
          prompt: "Which former national capital is famous for Guanabara Bay and Sugarloaf Mountain?",
          answer: "Rio de Janeiro.",
        },
        {
          prompt: "Which Amazon city is located near the Meeting of Waters?",
          answer: "Manaus.",
        },
        {
          prompt: "Which northeastern coastal city is the capital of Bahia?",
          answer: "Salvador.",
        },
      ],
    },
    {
      name: "Landmarks",
      cards: [
        {
          prompt: "What is Brazil's highest mountain?",
          answer: "Pico da Neblina.",
        },
        {
          prompt: "Which waterfall system sits on the Brazil-Argentina border?",
          answer: "Iguazu Falls.",
        },
        {
          prompt: "Which mountain range runs along much of southeastern Brazil's Atlantic coast?",
          answer: "Serra do Mar.",
        },
        {
          prompt: "Which plateau is associated with Brazil's central highlands and the headwaters of many rivers?",
          answer: "The Brazilian Highlands, or Planalto Brasileiro.",
        },
        {
          prompt: "Which protected dune-and-lagoon landscape is located in Maranhao?",
          answer: "Lencois Maranhenses.",
        },
      ],
    },
  ],
};
