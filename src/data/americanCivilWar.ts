import type { JeopardyTopic } from "./jeopardyTopics";

export const americanCivilWarTopic: JeopardyTopic = {
  title: "American Civil War",
  intro: "Study the causes, leaders, battles, emancipation, and consequences of the American Civil War.",
  groups: [
    {
      name: "Causes And Outbreak",
      cards: [
        {
          prompt: "What issue lay at the heart of the sectional crisis that led to the Civil War?",
          answer: "Slavery, especially its preservation and expansion into U.S. territories.",
        },
        {
          prompt: "Which state became the first to secede from the Union in December 1860?",
          answer: "South Carolina.",
        },
        {
          prompt: "Who served as president of the Confederate States of America?",
          answer: "Jefferson Davis.",
        },
        {
          prompt: "At which fort in Charleston Harbor were the first shots of the Civil War fired?",
          answer: "Fort Sumter.",
        },
        {
          prompt: "Which four slaveholding border states remained in the Union?",
          answer: "Delaware, Maryland, Kentucky, and Missouri.",
        },
      ],
    },
    {
      name: "Leaders And Armies",
      cards: [
        {
          prompt: "Who was president of the United States throughout the Civil War?",
          answer: "Abraham Lincoln.",
        },
        {
          prompt: "Which Union general became general-in-chief in 1864 and later accepted Lee's surrender?",
          answer: "Ulysses S. Grant.",
        },
        {
          prompt: "Who commanded the Confederate Army of Northern Virginia?",
          answer: "Robert E. Lee.",
        },
        {
          prompt: "Which Union general led the March to the Sea from Atlanta to Savannah?",
          answer: "William Tecumseh Sherman.",
        },
        {
          prompt: "Which Confederate general earned the nickname 'Stonewall' at the First Battle of Bull Run?",
          answer: "Thomas J. Jackson.",
        },
      ],
    },
    {
      name: "Battles And Campaigns",
      cards: [
        {
          prompt: "What was the first major land battle of the Civil War, known in the South as First Manassas?",
          answer: "The First Battle of Bull Run.",
        },
        {
          prompt: "Which September 1862 battle was the bloodiest single day in American military history?",
          answer: "The Battle of Antietam.",
        },
        {
          prompt: "Which three-day battle in Pennsylvania ended on July 3, 1863, after Pickett's Charge?",
          answer: "The Battle of Gettysburg.",
        },
        {
          prompt: "Which Confederate stronghold surrendered on July 4, 1863, giving the Union control of the Mississippi River?",
          answer: "Vicksburg, Mississippi.",
        },
        {
          prompt: "At what Virginia village did Robert E. Lee surrender the Army of Northern Virginia on April 9, 1865?",
          answer: "Appomattox Court House.",
        },
      ],
    },
    {
      name: "Emancipation And Society",
      cards: [
        {
          prompt: "On what date did the Emancipation Proclamation take effect?",
          answer: "January 1, 1863.",
        },
        {
          prompt: "Which enslaved people did the Emancipation Proclamation declare free?",
          answer: "Those held in areas of the Confederacy that were in rebellion against the United States.",
        },
        {
          prompt: "Which prominent abolitionist recruited Black soldiers for the Union, including the 54th Massachusetts?",
          answer: "Frederick Douglass.",
        },
        {
          prompt: "Which Black Union regiment became famous for its assault on Fort Wagner in 1863?",
          answer: "The 54th Massachusetts Volunteer Infantry.",
        },
        {
          prompt: "Which Civil War nurse known as the 'Angel of the Battlefield' later founded the American Red Cross?",
          answer: "Clara Barton.",
        },
      ],
    },
    {
      name: "War's End And Legacy",
      cards: [
        {
          prompt: "Which constitutional amendment abolished slavery in the United States in 1865?",
          answer: "The 13th Amendment.",
        },
        {
          prompt: "Who assassinated Abraham Lincoln at Ford's Theatre in April 1865?",
          answer: "John Wilkes Booth.",
        },
        {
          prompt: "What name is given to the postwar effort to restore the former Confederate states and define freedom and citizenship?",
          answer: "Reconstruction.",
        },
        {
          prompt: "Which Reconstruction amendment established national birthright citizenship and equal protection under the law?",
          answer: "The 14th Amendment.",
        },
        {
          prompt: "Which Reconstruction amendment prohibited denying the right to vote on the basis of race, color, or previous servitude?",
          answer: "The 15th Amendment.",
        },
      ],
    },
  ],
};
