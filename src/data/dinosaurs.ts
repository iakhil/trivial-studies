export interface DinosaurCard {
  name: string;
  answer: string;
}

export interface DinosaurGroup {
  name: string;
  cards: DinosaurCard[];
}

export const dinosaurGroups: DinosaurGroup[] = [
  {
    name: "Carnivores",
    cards: [
      {
        name: "Tyrannosaurus rex",
        answer: "A massive Late Cretaceous predator from North America with powerful jaws and short arms.",
      },
      {
        name: "Velociraptor",
        answer: "A small, feathered Cretaceous predator from Asia known for speed and a sickle-shaped toe claw.",
      },
      {
        name: "Allosaurus",
        answer: "A large Jurassic meat-eater that lived before T. rex and hunted in western North America.",
      },
      {
        name: "Spinosaurus",
        answer: "A huge Cretaceous predator with a sail-like back and adaptations for hunting near water.",
      },
      {
        name: "Carnotaurus",
        answer: "A fast South American predator with short arms and distinctive horns above its eyes.",
      },
    ],
  },
  {
    name: "Herbivores",
    cards: [
      {
        name: "Triceratops",
        answer: "A Late Cretaceous plant-eater with three horns and a large neck frill.",
      },
      {
        name: "Stegosaurus",
        answer: "A Jurassic herbivore with tall plates along its back and spikes on its tail.",
      },
      {
        name: "Ankylosaurus",
        answer: "An armored Cretaceous dinosaur with bony body plates and a heavy tail club.",
      },
      {
        name: "Parasaurolophus",
        answer: "A duck-billed dinosaur with a long curved crest that may have helped produce calls.",
      },
      {
        name: "Iguanodon",
        answer: "A large herbivore with thumb spikes and teeth suited for grinding plants.",
      },
    ],
  },
  {
    name: "Long-Necked Giants",
    cards: [
      {
        name: "Brachiosaurus",
        answer: "A Jurassic sauropod with longer front legs than back legs and a very high browsing reach.",
      },
      {
        name: "Diplodocus",
        answer: "A long, slender sauropod with a whip-like tail from Jurassic North America.",
      },
      {
        name: "Apatosaurus",
        answer: "A heavy-bodied Jurassic sauropod once commonly confused with Brontosaurus.",
      },
      {
        name: "Argentinosaurus",
        answer: "One of the largest known dinosaurs, a huge sauropod from Cretaceous South America.",
      },
      {
        name: "Patagotitan",
        answer: "A gigantic titanosaur from Argentina and one of the largest land animals discovered.",
      },
    ],
  },
  {
    name: "Periods And Facts",
    cards: [
      {
        name: "Triassic Period",
        answer: "The first dinosaur period, about 252 to 201 million years ago, when early dinosaurs appeared.",
      },
      {
        name: "Jurassic Period",
        answer: "The middle dinosaur period, about 201 to 145 million years ago, when many sauropods thrived.",
      },
      {
        name: "Cretaceous Period",
        answer: "The last dinosaur period, about 145 to 66 million years ago, ending with a mass extinction.",
      },
      {
        name: "Fossil",
        answer: "Preserved evidence of ancient life, such as bones, teeth, footprints, eggs, or impressions.",
      },
      {
        name: "Non-avian Dinosaurs",
        answer: "Dinosaurs other than birds; they died out at the end of the Cretaceous Period.",
      },
    ],
  },
];
