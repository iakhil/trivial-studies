export interface USPresidentCard {
  number: string;
  name: string;
  answer: string;
}

export interface USPresidentEra {
  name: string;
  cards: USPresidentCard[];
}

export const usPresidentEras: USPresidentEra[] = [
  {
    name: "1789-1841",
    cards: [
      {
        number: "1",
        name: "George Washington",
        answer: "1st president. Served 1789-1797. Federalist.",
      },
      {
        number: "2",
        name: "John Adams",
        answer: "2nd president. Served 1797-1801. Federalist.",
      },
      {
        number: "3",
        name: "Thomas Jefferson",
        answer: "3rd president. Served 1801-1809. Democratic-Republican.",
      },
      {
        number: "4",
        name: "James Madison",
        answer: "4th president. Served 1809-1817. Democratic-Republican.",
      },
      {
        number: "5",
        name: "James Monroe",
        answer: "5th president. Served 1817-1825. Democratic-Republican.",
      },
      {
        number: "6",
        name: "John Quincy Adams",
        answer: "6th president. Served 1825-1829. National Republican.",
      },
      {
        number: "7",
        name: "Andrew Jackson",
        answer: "7th president. Served 1829-1837. Democratic.",
      },
      {
        number: "8",
        name: "Martin Van Buren",
        answer: "8th president. Served 1837-1841. Democratic.",
      },
    ],
  },
  {
    name: "1841-1869",
    cards: [
      {
        number: "9",
        name: "William Henry Harrison",
        answer: "9th president. Served in 1841. Whig.",
      },
      {
        number: "10",
        name: "John Tyler",
        answer: "10th president. Served 1841-1845. Whig.",
      },
      {
        number: "11",
        name: "James K. Polk",
        answer: "11th president. Served 1845-1849. Democratic.",
      },
      {
        number: "12",
        name: "Zachary Taylor",
        answer: "12th president. Served 1849-1850. Whig.",
      },
      {
        number: "13",
        name: "Millard Fillmore",
        answer: "13th president. Served 1850-1853. Whig.",
      },
      {
        number: "14",
        name: "Franklin Pierce",
        answer: "14th president. Served 1853-1857. Democratic.",
      },
      {
        number: "15",
        name: "James Buchanan",
        answer: "15th president. Served 1857-1861. Democratic.",
      },
      {
        number: "16",
        name: "Abraham Lincoln",
        answer: "16th president. Served 1861-1865. Republican.",
      },
      {
        number: "17",
        name: "Andrew Johnson",
        answer: "17th president. Served 1865-1869. Democratic.",
      },
    ],
  },
  {
    name: "1869-1901",
    cards: [
      {
        number: "18",
        name: "Ulysses S. Grant",
        answer: "18th president. Served 1869-1877. Republican.",
      },
      {
        number: "19",
        name: "Rutherford B. Hayes",
        answer: "19th president. Served 1877-1881. Republican.",
      },
      {
        number: "20",
        name: "James A. Garfield",
        answer: "20th president. Served in 1881. Republican.",
      },
      {
        number: "21",
        name: "Chester A. Arthur",
        answer: "21st president. Served 1881-1885. Republican.",
      },
      {
        number: "22",
        name: "Grover Cleveland",
        answer: "22nd president. Served 1885-1889. Democratic.",
      },
      {
        number: "23",
        name: "Benjamin Harrison",
        answer: "23rd president. Served 1889-1893. Republican.",
      },
      {
        number: "24",
        name: "Grover Cleveland",
        answer: "24th president. Served 1893-1897. Democratic.",
      },
      {
        number: "25",
        name: "William McKinley",
        answer: "25th president. Served 1897-1901. Republican.",
      },
    ],
  },
  {
    name: "1901-1945",
    cards: [
      {
        number: "26",
        name: "Theodore Roosevelt",
        answer: "26th president. Served 1901-1909. Republican.",
      },
      {
        number: "27",
        name: "William Howard Taft",
        answer: "27th president. Served 1909-1913. Republican.",
      },
      {
        number: "28",
        name: "Woodrow Wilson",
        answer: "28th president. Served 1913-1921. Democratic.",
      },
      {
        number: "29",
        name: "Warren G. Harding",
        answer: "29th president. Served 1921-1923. Republican.",
      },
      {
        number: "30",
        name: "Calvin Coolidge",
        answer: "30th president. Served 1923-1929. Republican.",
      },
      {
        number: "31",
        name: "Herbert Hoover",
        answer: "31st president. Served 1929-1933. Republican.",
      },
      {
        number: "32",
        name: "Franklin D. Roosevelt",
        answer: "32nd president. Served 1933-1945. Democratic.",
      },
    ],
  },
  {
    name: "1945-1989",
    cards: [
      {
        number: "33",
        name: "Harry S. Truman",
        answer: "33rd president. Served 1945-1953. Democratic.",
      },
      {
        number: "34",
        name: "Dwight D. Eisenhower",
        answer: "34th president. Served 1953-1961. Republican.",
      },
      {
        number: "35",
        name: "John F. Kennedy",
        answer: "35th president. Served 1961-1963. Democratic.",
      },
      {
        number: "36",
        name: "Lyndon B. Johnson",
        answer: "36th president. Served 1963-1969. Democratic.",
      },
      {
        number: "37",
        name: "Richard Nixon",
        answer: "37th president. Served 1969-1974. Republican.",
      },
      {
        number: "38",
        name: "Gerald Ford",
        answer: "38th president. Served 1974-1977. Republican.",
      },
      {
        number: "39",
        name: "Jimmy Carter",
        answer: "39th president. Served 1977-1981. Democratic.",
      },
      {
        number: "40",
        name: "Ronald Reagan",
        answer: "40th president. Served 1981-1989. Republican.",
      },
    ],
  },
  {
    name: "1989-Present",
    cards: [
      {
        number: "41",
        name: "George H. W. Bush",
        answer: "41st president. Served 1989-1993. Republican.",
      },
      {
        number: "42",
        name: "Bill Clinton",
        answer: "42nd president. Served 1993-2001. Democratic.",
      },
      {
        number: "43",
        name: "George W. Bush",
        answer: "43rd president. Served 2001-2009. Republican.",
      },
      {
        number: "44",
        name: "Barack Obama",
        answer: "44th president. Served 2009-2017. Democratic.",
      },
      {
        number: "45",
        name: "Donald J. Trump",
        answer: "45th president. Served 2017-2021. Republican.",
      },
      {
        number: "46",
        name: "Joe Biden",
        answer: "46th president. Served 2021-2025. Democratic.",
      },
      {
        number: "47",
        name: "Donald J. Trump",
        answer: "47th president. Serving since 2025. Republican.",
      },
    ],
  },
];
