import type { JeopardyTopic } from "./jeopardyTopics";

export const computerHistoryTopic: JeopardyTopic = {
  title: "Computer History",
  intro: "Study the machines, inventors, software, and breakthroughs that shaped modern computing.",
  groups: [
    {
      name: "Early Machines",
      cards: [
        {
          prompt: "What ancient Greek device used gears to predict astronomical positions and eclipses?",
          answer: "The Antikythera mechanism.",
        },
        {
          prompt: "What mechanical calculator did Blaise Pascal create in the 1640s?",
          answer: "The Pascaline.",
        },
        {
          prompt: "Which loom used punched cards to control complex weaving patterns?",
          answer: "The Jacquard loom.",
        },
        {
          prompt: "What automatic mechanical calculator did Charles Babbage design to produce mathematical tables?",
          answer: "The Difference Engine.",
        },
        {
          prompt: "What programmable general-purpose mechanical computer did Charles Babbage design but never complete?",
          answer: "The Analytical Engine.",
        },
      ],
    },
    {
      name: "Computing Pioneers",
      cards: [
        {
          prompt: "Who wrote an algorithm for Babbage's Analytical Engine and is often called the first computer programmer?",
          answer: "Ada Lovelace.",
        },
        {
          prompt: "Which mathematician developed the system of logic that became fundamental to digital circuits?",
          answer: "George Boole.",
        },
        {
          prompt: "Who described an abstract computing device now known as the Turing machine?",
          answer: "Alan Turing.",
        },
        {
          prompt: "Which computing pioneer helped develop an early compiler and popularized the idea of machine-independent programming languages?",
          answer: "Grace Hopper.",
        },
        {
          prompt: "Which mathematician's name is associated with the stored-program computer architecture?",
          answer: "John von Neumann.",
        },
      ],
    },
    {
      name: "Early Computers",
      cards: [
        {
          prompt: "What German machine completed by Konrad Zuse in 1941 was an early programmable electromechanical computer?",
          answer: "The Z3.",
        },
        {
          prompt: "What British electronic computer helped decipher encrypted German messages during World War II?",
          answer: "Colossus.",
        },
        {
          prompt: "What large electronic general-purpose computer was unveiled in the United States in 1946?",
          answer: "ENIAC.",
        },
        {
          prompt: "What 1951 computer became the first commercially produced computer delivered to a U.S. customer?",
          answer: "UNIVAC I.",
        },
        {
          prompt: "What technology replaced vacuum tubes and made computers smaller, cooler, and more reliable?",
          answer: "The transistor.",
        },
      ],
    },
    {
      name: "Personal Computers",
      cards: [
        {
          prompt: "What 1975 computer kit helped launch the personal-computer revolution and inspired the founding of Microsoft?",
          answer: "The Altair 8800.",
        },
        {
          prompt: "Which two co-founders launched Apple with the Apple I computer?",
          answer: "Steve Wozniak and Steve Jobs.",
        },
        {
          prompt: "What personal computer introduced by IBM in 1981 helped establish a major industry standard?",
          answer: "The IBM Personal Computer, or IBM PC.",
        },
        {
          prompt: "Which 1984 Apple computer brought the graphical user interface to a broad consumer audience?",
          answer: "The Macintosh.",
        },
        {
          prompt: "What home computer released in 1982 became one of the best-selling computer models of all time?",
          answer: "The Commodore 64.",
        },
      ],
    },
    {
      name: "Networks And Software",
      cards: [
        {
          prompt: "What experimental network first connected computers at four U.S. research institutions in 1969?",
          answer: "ARPANET.",
        },
        {
          prompt: "Who introduced the @ symbol into network email addresses in 1971?",
          answer: "Ray Tomlinson.",
        },
        {
          prompt: "Which two computer scientists designed the core TCP/IP protocols used by the internet?",
          answer: "Vint Cerf and Bob Kahn.",
        },
        {
          prompt: "Who invented the World Wide Web while working at CERN?",
          answer: "Tim Berners-Lee.",
        },
        {
          prompt: "Who began developing the Linux kernel in 1991?",
          answer: "Linus Torvalds.",
        },
      ],
    },
  ],
};
