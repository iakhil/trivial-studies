export interface JeopardyBoardClue {
  value: number;
  clue: string;
  response: string;
  note?: string;
  dailyDouble?: boolean;
}

export interface JeopardyBoardCategory {
  title: string;
  focus: string;
  clues: JeopardyBoardClue[];
}

export interface JeopardyBoardPack {
  title: string;
  description: string;
  categories: JeopardyBoardCategory[];
}

export interface JeopardyPrepLane {
  title: string;
  route: string;
  detail: string;
  tags: string[];
}

export interface FinalJeopardyPrompt {
  category: string;
  clue: string;
  response: string;
  wagerHint: string;
}

export interface WagerScenario {
  title: string;
  stage: "Daily Double" | "Final Jeopardy";
  category: string;
  score: number;
  leaderScore: number;
  clueValue?: number;
  confidence: "low" | "medium" | "high";
  recommendation: string;
  reasoning: string;
}

export interface CategoryPatternDrill {
  title: string;
  signal: string;
  exampleCategory: string;
  clue: string;
  response: string;
  solveMove: string;
  traps: string[];
}

export interface CanonChecklistItem {
  id: string;
  title: string;
  area: string;
  route: string;
  examples: string[];
  priority: "Core" | "Frequent" | "Swing";
}

export const jeopardyPrepLanes: JeopardyPrepLane[] = [
  {
    title: "Canon Subjects",
    route: "/world-history",
    detail: "History, literature, mythology, science, geography, and art are the recurring backbone.",
    tags: ["core", "high frequency"],
  },
  {
    title: "Maps And Places",
    route: "/geography",
    detail: "Lock in capitals, rivers, regions, ranges, borders, flags, and national parks.",
    tags: ["visual", "geography"],
  },
  {
    title: "Arts And Culture",
    route: "/art-history",
    detail: "Practice artists, works, movements, opera, Shakespeare, and language clues.",
    tags: ["culture", "wordplay"],
  },
  {
    title: "Science Bench",
    route: "/science-grab-bag",
    detail: "Build fast recall across physics, chemistry, biology, astronomy, and earth science.",
    tags: ["science", "definitions"],
  },
];

export const archiveStyleNotes = [
  "Boards are usually six categories by five clue values, with harder clues lower in the column.",
  "Categories often signal constraints: quoted words, shared prefixes, puns, initials, or before-and-after links.",
  "Daily Doubles reward confidence and wagering judgment, not just recall.",
  "Final Jeopardy usually asks for one clean association from a broad category.",
];

export const canonChecklist: CanonChecklistItem[] = [
  {
    id: "world-history",
    title: "World History Anchors",
    area: "History",
    route: "/world-history",
    examples: ["empires", "revolutions", "treaties", "explorers"],
    priority: "Core",
  },
  {
    id: "american-presidents",
    title: "U.S. Presidents And Elections",
    area: "American History",
    route: "/us-presidents",
    examples: ["terms", "vice presidents", "landmark events", "nicknames"],
    priority: "Core",
  },
  {
    id: "literature",
    title: "Literature And Authors",
    area: "Arts",
    route: "/american-literature",
    examples: ["novels", "poets", "characters", "Nobel winners"],
    priority: "Core",
  },
  {
    id: "shakespeare",
    title: "Shakespeare",
    area: "Arts",
    route: "/shakespeare-trivia",
    examples: ["plays", "characters", "settings", "famous lines"],
    priority: "Frequent",
  },
  {
    id: "geography",
    title: "Geography And Maps",
    area: "Places",
    route: "/geography",
    examples: ["capitals", "rivers", "mountains", "borders"],
    priority: "Core",
  },
  {
    id: "science",
    title: "Science Definitions",
    area: "Science",
    route: "/science-grab-bag",
    examples: ["units", "elements", "organs", "astronomy terms"],
    priority: "Core",
  },
  {
    id: "mythology",
    title: "Mythology",
    area: "Culture",
    route: "/mythology",
    examples: ["Greek gods", "Norse figures", "Egyptian gods", "epics"],
    priority: "Frequent",
  },
  {
    id: "art-opera",
    title: "Art, Opera, And Museums",
    area: "Arts",
    route: "/art-history",
    examples: ["painters", "movements", "operas", "museum cities"],
    priority: "Frequent",
  },
  {
    id: "word-origins",
    title: "Words And Wordplay",
    area: "Language",
    route: "/word-origins",
    examples: ["roots", "phrases", "homophones", "hidden words"],
    priority: "Swing",
  },
  {
    id: "sports-pop-culture",
    title: "Sports And Pop Culture",
    area: "Culture",
    route: "/sports-trivia",
    examples: ["champions", "teams", "movies", "music clues"],
    priority: "Swing",
  },
  {
    id: "national-parks",
    title: "National Parks And Landmarks",
    area: "Places",
    route: "/us-national-parks",
    examples: ["signature features", "states", "rivers", "geology"],
    priority: "Frequent",
  },
  {
    id: "world-wars",
    title: "World Wars",
    area: "History",
    route: "/world-wars",
    examples: ["battles", "leaders", "alliances", "postwar settlements"],
    priority: "Core",
  },
];

export const categoryPatternDrills: CategoryPatternDrill[] = [
  {
    title: "Quoted Word Constraint",
    signal: "A word or letters appear in quotation marks in the category.",
    exampleCategory: '"SEA" IT NOW',
    clue: "This Tennessee Williams play has Blanche DuBois depending on strangers.",
    response: "What is A Streetcar Named Desire?",
    solveMove: "Find the response that answers the clue and contains the quoted sound or letters.",
    traps: ["Forcing the quote before solving the fact", "Ignoring spelling when the category asks for exact letters"],
  },
  {
    title: "Before And After",
    signal: "The response fuses the end of one phrase with the start of another.",
    exampleCategory: "Before & After",
    clue: "A Dickens orphan meets the Beatles hit that begins 'Well, shake it up, baby'.",
    response: "What is Oliver Twist and Shout?",
    solveMove: "Solve both halves, then overlap or chain the shared word cleanly.",
    traps: ["Giving only one half", "Missing that the join must still sound like a familiar phrase"],
  },
  {
    title: "Initials And Abbreviations",
    signal: "The category points to first letters, postal codes, chemical symbols, or common abbreviations.",
    exampleCategory: "THE A.B.C.'S",
    clue: "This author sent Alice down the rabbit hole.",
    response: "Who is Lewis Carroll?",
    solveMove: "Answer the fact, then verify that the required initials or abbreviation fit the category.",
    traps: ["Answering a synonym that breaks the initials", "Forgetting middle initials or pen names"],
  },
  {
    title: "Punny Category Title",
    signal: "The category title sounds like a familiar phrase but bends it toward a topic.",
    exampleCategory: "PAST TENSE",
    clue: "In 1066 this Norman duke won at Hastings.",
    response: "Who is William the Conqueror?",
    solveMove: "Use the title as a topic hint, not as a literal grammar instruction unless the clue confirms it.",
    traps: ["Overreading the joke", "Missing the ordinary canon fact underneath the pun"],
  },
  {
    title: "Fill-In-The-Blank",
    signal: "The clue asks for a missing word in a title, quotation, slogan, or phrase.",
    exampleCategory: "COMPLETE THE TITLE",
    clue: "The Hemingway novel: A Farewell to ___.",
    response: "What is Arms?",
    solveMove: "Preserve the exact missing word, then phrase the response normally.",
    traps: ["Supplying the whole title when only the blank is needed", "Changing singular/plural form"],
  },
  {
    title: "Hidden Word Or Sound",
    signal: "The category asks for words hidden inside longer responses, rhymes, or shared sounds.",
    exampleCategory: '"TON" OF FUN',
    clue: "This first U.S. president led the Continental Army.",
    response: "Who is George Washington?",
    solveMove: "Solve the clue first, then scan the response for the hidden requirement.",
    traps: ["Searching only the clue text", "Missing pronunciation-based versions of the trick"],
  },
];

export const wagerScenarios: WagerScenario[] = [
  {
    title: "Early control",
    stage: "Daily Double",
    category: "World Geography",
    score: 2400,
    leaderScore: 3600,
    clueValue: 800,
    confidence: "high",
    recommendation: "Wager 1800 to 2400.",
    reasoning:
      "You are early, behind, and strong in the category. A real push can take the lead while a miss still leaves plenty of board.",
  },
  {
    title: "Protect the lock",
    stage: "Final Jeopardy",
    category: "American Authors",
    score: 18400,
    leaderScore: 9200,
    confidence: "medium",
    recommendation: "Wager 0 to 199.",
    reasoning:
      "You are just above twice second place. A tiny wager preserves the lock if second doubles up.",
  },
  {
    title: "Chasing late",
    stage: "Daily Double",
    category: "Opera",
    score: 7800,
    leaderScore: 14600,
    clueValue: 1600,
    confidence: "medium",
    recommendation: "Wager 4000 to 6000.",
    reasoning:
      "Late in the game, conservative wagering preserves a losing position. A sizable wager gives you a path back into contention.",
  },
  {
    title: "Two-thirds trap",
    stage: "Final Jeopardy",
    category: "Historic Documents",
    score: 12000,
    leaderScore: 17000,
    confidence: "low",
    recommendation: "Consider 2001 to 4999.",
    reasoning:
      "A smaller cover of third can win if the leader misses a standard cover wager, while avoiding an unnecessary all-in risk.",
  },
];


export const jeopardyPracticeBoard: JeopardyBoardCategory[] = [
  {
    title: "World Rivers",
    focus: "Geography clue ladders",
    clues: [
      {
        value: 200,
        clue: "Cairo grew near the delta of this river.",
        response: "What is the Nile?",
      },
      {
        value: 400,
        clue: "The city of Varanasi is sacred partly because it sits on this river.",
        response: "What is the Ganges?",
      },
      {
        value: 600,
        clue: "This river forms much of the border between the United States and Mexico.",
        response: "What is the Rio Grande?",
      },
      {
        value: 800,
        clue: "The city of Manaus is a major port on this South American river system.",
        response: "What is the Amazon?",
      },
      {
        value: 1000,
        clue: "The Irrawaddy River flows through this Southeast Asian country.",
        response: "What is Myanmar?",
      },
    ],
  },
  {
    title: "Books And Authors",
    focus: "Literature anchors",
    clues: [
      {
        value: 200,
        clue: "He wrote The Adventures of Tom Sawyer and Adventures of Huckleberry Finn.",
        response: "Who is Mark Twain?",
      },
      {
        value: 400,
        clue: "Elizabeth Bennet spars with Mr. Darcy in this Jane Austen novel.",
        response: "What is Pride and Prejudice?",
      },
      {
        value: 600,
        clue: "This Nigerian author wrote Things Fall Apart.",
        response: "Who is Chinua Achebe?",
      },
      {
        value: 800,
        clue: "The fictional county of Yoknapatawpha is closely associated with this author.",
        response: "Who is William Faulkner?",
      },
      {
        value: 1000,
        clue: "This Chilean poet and diplomat won the 1971 Nobel Prize in Literature.",
        response: "Who is Pablo Neruda?",
      },
    ],
  },
  {
    title: "Science Terms",
    focus: "Definitions and namesakes",
    clues: [
      {
        value: 200,
        clue: "H2O is the chemical formula for this compound.",
        response: "What is water?",
      },
      {
        value: 400,
        clue: "This organelle is the main site of photosynthesis in plant cells.",
        response: "What is the chloroplast?",
      },
      {
        value: 600,
        clue: "The SI unit of force is named for this scientist.",
        response: "Who is Newton?",
      },
      {
        value: 800,
        clue: "This scale measures mineral hardness from talc at 1 to diamond at 10.",
        response: "What is the Mohs scale?",
        dailyDouble: true,
      },
      {
        value: 1000,
        clue: "A star's brightness as seen from Earth is its apparent form of this quantity.",
        response: "What is magnitude?",
      },
    ],
  },
  {
    title: "Myth Mix",
    focus: "Cross-tradition recall",
    clues: [
      {
        value: 200,
        clue: "This Greek god carried a trident and ruled the sea.",
        response: "Who is Poseidon?",
      },
      {
        value: 400,
        clue: "This Norse trickster is the father of Fenrir.",
        response: "Who is Loki?",
      },
      {
        value: 600,
        clue: "In Egyptian myth, this jackal-headed god is linked to mummification.",
        response: "Who is Anubis?",
      },
      {
        value: 800,
        clue: "This Greek hero completed twelve labors.",
        response: "Who is Heracles or Hercules?",
      },
      {
        value: 1000,
        clue: "This Hindu epic centers on a dynastic war and includes the Bhagavad Gita.",
        response: "What is the Mahabharata?",
      },
    ],
  },
  {
    title: "Potent Potables",
    focus: "Classic category style",
    clues: [
      {
        value: 200,
        clue: "Espresso, steamed milk, and foam combine in this coffee drink named for Capuchin friars.",
        response: "What is cappuccino?",
      },
      {
        value: 400,
        clue: "This Japanese rice wine can be served warm or chilled.",
        response: "What is sake?",
      },
      {
        value: 600,
        clue: "This cocktail traditionally mixes gin, vermouth, and an olive or lemon twist.",
        response: "What is a martini?",
      },
      {
        value: 800,
        clue: "The blue agave plant is the source of this Mexican spirit.",
        response: "What is tequila?",
      },
      {
        value: 1000,
        clue: "This French region gives its name to sparkling wine made under strict local rules.",
        response: "What is Champagne?",
      },
    ],
  },
  {
    title: "Link Words",
    focus: "Wordplay practice",
    clues: [
      {
        value: 200,
        clue: "A galaxy far, far away meets the English dynastic conflict between York and Lancaster.",
        response: "What is Star Wars of the Roses?",
      },
      {
        value: 400,
        clue: "A Shakespeare tragedy meets a Beatles song whose title phrase advises acceptance.",
        response: "What is Hamlet It Be?",
      },
      {
        value: 600,
        clue: "A Faulkner novel meets the desert chase film starring Imperator Furiosa.",
        response: "What is The Sound and the Fury Road?",
      },
      {
        value: 800,
        clue: "A Greek messenger god meets the Roman name for the same messenger and the element symbol Hg.",
        response: "What is Hermes Mercury?",
      },
      {
        value: 1000,
        clue: "A Melville whale novel meets the vice president under George W. Bush.",
        response: "What is Moby-Dick Cheney?",
      },
    ],
  },
];

export const finalJeopardyPrompt: FinalJeopardyPrompt = {
  category: "Historic Documents",
  clue: "Adopted in 1215, it later became a symbol of limits on royal power and due process.",
  response: "What is Magna Carta?",
  wagerHint: "Treat broad history Finals as association tests: date, place, and consequence usually point to the response.",
};

export const finalJeopardyPrompts: FinalJeopardyPrompt[] = [
  finalJeopardyPrompt,
  {
    category: "World Capitals",
    clue: "This national capital lies on the Vistula River and was rebuilt after severe World War II destruction.",
    response: "What is Warsaw?",
    wagerHint: "River plus World War II rebuilding points toward Poland before the city name.",
  },
  {
    category: "American Literature",
    clue: "This 1850 novel uses a red letter as a public symbol of sin and punishment in Puritan New England.",
    response: "What is The Scarlet Letter?",
    wagerHint: "Final clues often give date, symbol, and setting; combine all three before guessing.",
  },
  {
    category: "Science Names",
    clue: "The SI unit of electrical resistance is named for this German physicist.",
    response: "Who is Ohm?",
    wagerHint: "Unit-name Finals usually ask for the namesake, not the unit itself.",
  },
  {
    category: "Ancient History",
    clue: "This city, traditionally founded by Phoenician colonists, fought Rome in three major wars.",
    response: "What is Carthage?",
    wagerHint: "Phoenician colony plus Rome plus three wars is a direct Punic Wars signal.",
  },
  {
    category: "Art Museums",
    clue: "This Paris museum opened in a former royal palace and is home to the Mona Lisa.",
    response: "What is the Louvre?",
    wagerHint: "For museum Finals, identify city and signature work first.",
  },
  {
    category: "Mythology",
    clue: "In Greek myth, this musician looked back while leading Eurydice from the underworld.",
    response: "Who is Orpheus?",
    wagerHint: "A named partner plus underworld rescue narrows the myth quickly.",
  },
  {
    category: "The U.S. Presidency",
    clue: "He was the only U.S. president to serve two nonconsecutive terms before the 21st century.",
    response: "Who is Grover Cleveland?",
    wagerHint: "Nonconsecutive terms is one of the strongest president canon triggers.",
  },
  {
    category: "World Rivers",
    clue: "The cities of Luxor and Aswan both sit on this river.",
    response: "What is the Nile?",
    wagerHint: "Two Egyptian city anchors make this a geography association clue.",
  },
  {
    category: "Shakespeare",
    clue: "This tragedy's title character is Prince of Denmark.",
    response: "What is Hamlet?",
    wagerHint: "For Shakespeare Finals, title, rank, and setting are often enough.",
  },
  {
    category: "Astronomy",
    clue: "This galaxy, the nearest large spiral galaxy to the Milky Way, is expected to merge with it.",
    response: "What is Andromeda?",
    wagerHint: "Nearest large spiral plus future merger is the key association.",
  },
  {
    category: "Word Origins",
    clue: "Meaning 'seize the day,' this two-word Latin phrase is associated with Horace.",
    response: "What is carpe diem?",
    wagerHint: "When the clue asks for a phrase, preserve the original language in the response.",
  },
  {
    category: "National Parks",
    clue: "Old Faithful is one of the best-known features of this U.S. national park.",
    response: "What is Yellowstone?",
    wagerHint: "Landmark-to-park clues are high-confidence if the named feature is iconic.",
  },
];

export const jeopardyBoardPacks: JeopardyBoardPack[] = [
  {
    title: "Core Canon",
    description: "A balanced board across geography, literature, science, myth, classic categories, and wordplay.",
    categories: jeopardyPracticeBoard,
  },
  {
    title: "Arts, Letters, And Places",
    description: "A culture-heavy board with museums, books, capitals, Shakespeare, parks, and language.",
    categories: [
      {
        title: "Museum Pieces",
        focus: "Artists and collections",
        clues: [
          {
            value: 200,
            clue: "The Mona Lisa hangs in this Paris museum.",
            response: "What is the Louvre?",
          },
          {
            value: 400,
            clue: "The Starry Night is by this Dutch painter.",
            response: "Who is Vincent van Gogh?",
          },
          {
            value: 600,
            clue: "This Spanish artist painted Guernica.",
            response: "Who is Pablo Picasso?",
          },
          {
            value: 800,
            clue: "This Norwegian painted The Scream.",
            response: "Who is Edvard Munch?",
          },
          {
            value: 1000,
            clue: "The Rosetta Stone is held by this London museum.",
            response: "What is the British Museum?",
          },
        ],
      },
      {
        title: "Novel Ideas",
        focus: "Books and authors",
        clues: [
          {
            value: 200,
            clue: "Scout Finch narrates much of this Harper Lee novel.",
            response: "What is To Kill a Mockingbird?",
          },
          {
            value: 400,
            clue: "This F. Scott Fitzgerald novel features Jay Gatsby.",
            response: "What is The Great Gatsby?",
          },
          {
            value: 600,
            clue: "This author created the detective Hercule Poirot.",
            response: "Who is Agatha Christie?",
          },
          {
            value: 800,
            clue: "This 1818 novel by Mary Shelley is subtitled The Modern Prometheus.",
            response: "What is Frankenstein?",
            dailyDouble: true,
          },
          {
            value: 1000,
            clue: "This Toni Morrison novel centers on Sethe and the legacy of slavery.",
            response: "What is Beloved?",
          },
        ],
      },
      {
        title: "Capital Clues",
        focus: "World capitals",
        clues: [
          {
            value: 200,
            clue: "The Eiffel Tower is in this capital.",
            response: "What is Paris?",
          },
          {
            value: 400,
            clue: "The Diet, Japan's legislature, meets in this city.",
            response: "What is Tokyo?",
          },
          {
            value: 600,
            clue: "This capital sits near the Andes and is Chile's largest city.",
            response: "What is Santiago?",
          },
          {
            value: 800,
            clue: "This capital of Kenya shares its name with a national park nearby.",
            response: "What is Nairobi?",
          },
          {
            value: 1000,
            clue: "This Australian capital was planned as a compromise between Sydney and Melbourne.",
            response: "What is Canberra?",
          },
        ],
      },
      {
        title: "The Bard",
        focus: "Shakespeare",
        clues: [
          {
            value: 200,
            clue: "Juliet is from this family in Romeo and Juliet.",
            response: "Who are the Capulets?",
          },
          {
            value: 400,
            clue: "This tragedy's title character is the Prince of Denmark.",
            response: "What is Hamlet?",
          },
          {
            value: 600,
            clue: "The witches greet this Scottish noble with prophecies.",
            response: "Who is Macbeth?",
          },
          {
            value: 800,
            clue: "This comedy features twins Viola and Sebastian.",
            response: "What is Twelfth Night?",
          },
          {
            value: 1000,
            clue: "Shylock demands a pound of flesh in this play.",
            response: "What is The Merchant of Venice?",
          },
        ],
      },
      {
        title: "Park It Here",
        focus: "U.S. national parks",
        clues: [
          {
            value: 200,
            clue: "Old Faithful erupts in this national park.",
            response: "What is Yellowstone?",
          },
          {
            value: 400,
            clue: "Half Dome is a famous feature of this California park.",
            response: "What is Yosemite?",
          },
          {
            value: 600,
            clue: "This Utah park is known for delicate sandstone arches.",
            response: "What is Arches National Park?",
          },
          {
            value: 800,
            clue: "Cadillac Mountain rises in this Maine national park.",
            response: "What is Acadia?",
          },
          {
            value: 1000,
            clue: "Mount Le Conte is a prominent peak in this park straddling Tennessee and North Carolina.",
            response: "What is Great Smoky Mountains National Park?",
          },
        ],
      },
      {
        title: "Root Work",
        focus: "Language and etymology",
        clues: [
          {
            value: 200,
            clue: "This Greek-derived root means life.",
            response: "What is bio?",
          },
          {
            value: 400,
            clue: "This Latin phrase means in good faith.",
            response: "What is bona fide?",
          },
          {
            value: 600,
            clue: "This term for a contradictory phrase includes examples like deafening silence.",
            response: "What is an oxymoron?",
          },
          {
            value: 800,
            clue: "This Italian musical term means singing without instrumental accompaniment.",
            response: "What is a cappella?",
          },
          {
            value: 1000,
            clue: "This Latin phrase means in the middle of things.",
            response: "What is in medias res?",
          },
        ],
      },
    ],
  },
  {
    title: "Science, History, And Games",
    description: "A faster board for science definitions, wars, presidents, sports, astronomy, and ancient history.",
    categories: [
      {
        title: "Lab Notes",
        focus: "Science basics",
        clues: [
          {
            value: 200,
            clue: "This molecule carries genetic instructions in most living things.",
            response: "What is DNA?",
          },
          {
            value: 400,
            clue: "This organelle is often called the powerhouse of the cell.",
            response: "What is the mitochondrion?",
          },
          {
            value: 600,
            clue: "Values below 7 on this scale are acidic.",
            response: "What is the pH scale?",
          },
          {
            value: 800,
            clue: "This type of bond involves sharing electron pairs.",
            response: "What is a covalent bond?",
          },
          {
            value: 1000,
            clue: "This process converts atmospheric nitrogen into usable compounds.",
            response: "What is nitrogen fixation?",
          },
        ],
      },
      {
        title: "War And Peace",
        focus: "World conflict",
        clues: [
          {
            value: 200,
            clue: "The Treaty of Versailles ended this war for Germany.",
            response: "What is World War I?",
          },
          {
            value: 400,
            clue: "This 1944 Allied invasion is commonly called D-Day.",
            response: "What is Normandy?",
          },
          {
            value: 600,
            clue: "The Battle of Midway was a turning point in this ocean theater.",
            response: "What is the Pacific?",
          },
          {
            value: 800,
            clue: "This archduke's assassination helped trigger World War I.",
            response: "Who is Franz Ferdinand?",
            dailyDouble: true,
          },
          {
            value: 1000,
            clue: "This 1815 battle ended Napoleon's final bid for power.",
            response: "What is Waterloo?",
          },
        ],
      },
      {
        title: "Presidents",
        focus: "U.S. leaders",
        clues: [
          {
            value: 200,
            clue: "He was the first U.S. president.",
            response: "Who is George Washington?",
          },
          {
            value: 400,
            clue: "The Emancipation Proclamation was issued by this president.",
            response: "Who is Abraham Lincoln?",
          },
          {
            value: 600,
            clue: "This president served four elected terms.",
            response: "Who is Franklin D. Roosevelt?",
          },
          {
            value: 800,
            clue: "This president approved the Louisiana Purchase.",
            response: "Who is Thomas Jefferson?",
          },
          {
            value: 1000,
            clue: "He became president after Warren G. Harding died in office.",
            response: "Who is Calvin Coolidge?",
          },
        ],
      },
      {
        title: "Sports Page",
        focus: "Sports canon",
        clues: [
          {
            value: 200,
            clue: "Jackie Robinson broke this league's color barrier in 1947.",
            response: "What is Major League Baseball?",
          },
          {
            value: 400,
            clue: "A triple-double is most associated with this sport.",
            response: "What is basketball?",
          },
          {
            value: 600,
            clue: "This country has won the most men's FIFA World Cups.",
            response: "What is Brazil?",
          },
          {
            value: 800,
            clue: "This gymnast scored a perfect 10 at the 1976 Olympics.",
            response: "Who is Nadia Comaneci?",
          },
          {
            value: 1000,
            clue: "This Boston ballpark is home to the Green Monster.",
            response: "What is Fenway Park?",
          },
        ],
      },
      {
        title: "Space Stuff",
        focus: "Astronomy",
        clues: [
          {
            value: 200,
            clue: "This planet has the Great Red Spot.",
            response: "What is Jupiter?",
          },
          {
            value: 400,
            clue: "This galaxy contains our Solar System.",
            response: "What is the Milky Way?",
          },
          {
            value: 600,
            clue: "This telescope launched in 1990 and transformed optical astronomy.",
            response: "What is the Hubble Space Telescope?",
          },
          {
            value: 800,
            clue: "This boundary around a black hole marks the point beyond which light cannot escape.",
            response: "What is the event horizon?",
          },
          {
            value: 1000,
            clue: "This diagram plots stars by luminosity and temperature.",
            response: "What is the Hertzsprung-Russell diagram?",
          },
        ],
      },
      {
        title: "Ancient File",
        focus: "Ancient history",
        clues: [
          {
            value: 200,
            clue: "This river supported ancient Egyptian civilization.",
            response: "What is the Nile?",
          },
          {
            value: 400,
            clue: "This Mesopotamian law code is linked to a Babylonian king.",
            response: "What is the Code of Hammurabi?",
          },
          {
            value: 600,
            clue: "This city-state was known for its military society and rivalry with Athens.",
            response: "What is Sparta?",
          },
          {
            value: 800,
            clue: "This conqueror built an empire from Greece toward India in the 300s BCE.",
            response: "Who is Alexander the Great?",
          },
          {
            value: 1000,
            clue: "This Roman general crossed the Rubicon in 49 BCE.",
            response: "Who is Julius Caesar?",
          },
        ],
      },
    ],
  },
];
