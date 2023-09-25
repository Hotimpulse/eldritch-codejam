const backCard = document.querySelector('.deck');
const currentState = document.querySelector('.current-state');
const lastCard = document.querySelector('.last-card');
const reload = document.querySelector('.refresh');
const levelContainer = document.querySelector('.level-container');
const deckContainer = document.querySelector('.deck-container');
const mainWrapper = document.querySelector('.wrapper');

//generate deck
let randomNum;
let greenCount1 = document.querySelector('.green1');
let brownCount1 = document.querySelector('.brown1');
let blueCount1 = document.querySelector('.blue1');
let greenCount2 = document.querySelector('.green2');
let brownCount2 = document.querySelector('.brown2');
let blueCount2 = document.querySelector('.blue2');
let greenCount3 = document.querySelector('.green3');
let brownCount3 = document.querySelector('.brown3');
let blueCount3 = document.querySelector('.blue3');

// counter styling
greenCount1.style.color = "white";
brownCount1.style.color = "white";
blueCount1.style.color = "white";
greenCount2.style.color = "white";
brownCount2.style.color = "white";
blueCount2.style.color = "white";
greenCount3.style.color = "white";
brownCount3.style.color = "white";
blueCount3.style.color = "white";
reload.addEventListener('click', () => {
  window.location.reload();
});

// array of blue cards

const cardsDataBlue = [
  {
    id: 'blue1',
    cardFace: './assets/MythicCards/blue/blue1.png',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue2',
    cardFace: './assets/MythicCards/blue/blue2.png',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue3',
    cardFace: './assets/MythicCards/blue/blue3.png',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue4',
    cardFace: './assets/MythicCards/blue/blue4.png',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue5',
    cardFace: './assets/MythicCards/blue/blue5.png',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue6',
    cardFace: './assets/MythicCards/blue/blue6.png',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue7',
    cardFace: './assets/MythicCards/blue/blue7.png',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue8',
    cardFace: './assets/MythicCards/blue/blue8.png',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue9',
    cardFace: './assets/MythicCards/blue/blue9.png',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue10',
    cardFace: './assets/MythicCards/blue/blue10.png',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue11',
    cardFace: './assets/MythicCards/blue/blue11.png',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue12',
    cardFace: './assets/MythicCards/blue/blue12.png',
    difficulty: 'normal',
    color: 'blue'
  },
]

// array of green cards

const cardsDataGreen = [
  {
    id: 'green1',
    cardFace: './assets/MythicCards/green/green1.png',
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green2',
    cardFace: './assets/MythicCards/green/green2.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green3',
    cardFace: './assets/MythicCards/green/green3.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green4',
    cardFace: './assets/MythicCards/green/green4.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green5',
    cardFace: './assets/MythicCards/green/green5.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green6',
    cardFace: './assets/MythicCards/green/green6.png',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green7',
    cardFace: './assets/MythicCards/green/green7.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green8',
    cardFace: './assets/MythicCards/green/green8.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green9',
    cardFace: './assets/MythicCards/green/green9.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green10',
    cardFace: './assets/MythicCards/green/green10.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green11',
    cardFace: './assets/MythicCards/green/green11.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green12',
    cardFace: './assets/MythicCards/green/green12.png',
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green13',
    cardFace: './assets/MythicCards/green/green13.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green14',
    cardFace: './assets/MythicCards/green/green14.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green15',
    cardFace: './assets/MythicCards/green/green15.png',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green16',
    cardFace: './assets/MythicCards/green/green16.png',
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green17',
    cardFace: './assets/MythicCards/green/green17.png',
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green18',
    cardFace: './assets/MythicCards/green/green18.png',
    difficulty: 'easy',
    color: 'green'
  },
]

// array of brown cards

const cardsDataBrown = [
  {
    id: 'brown1',
    cardFace: './assets/MythicCards/brown/brown1.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown2',
    cardFace: './assets/MythicCards/brown/brown2.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown3',
    cardFace: './assets/MythicCards/brown/brown3.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown4',
    cardFace: './assets/MythicCards/brown/brown4.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown5',
    cardFace: './assets/MythicCards/brown/brown5.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown6',
    cardFace: './assets/MythicCards/brown/brown6.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown7',
    cardFace: './assets/MythicCards/brown/brown7.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown8',
    cardFace: './assets/MythicCards/brown/brown8.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown9',
    cardFace: './assets/MythicCards/brown/brown9.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown10',
    cardFace: './assets/MythicCards/brown/brown10.png',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown11',
    cardFace: './assets/MythicCards/brown/brown11.png',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown12',
    cardFace: './assets/MythicCards/brown/brown12.png',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown13',
    cardFace: './assets/MythicCards/brown/brown13.png',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown14',
    cardFace: './assets/MythicCards/brown/brown14.png',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown15',
    cardFace: './assets/MythicCards/brown/brown15.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown16',
    cardFace: './assets/MythicCards/brown/brown16.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown17',
    cardFace: './assets/MythicCards/brown/brown17.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown18',
    cardFace: './assets/MythicCards/brown/brown18.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown19',
    cardFace: './assets/MythicCards/brown/brown19.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown20',
    cardFace: './assets/MythicCards/brown/brown20.png',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown21',
    cardFace: './assets/MythicCards/brown/brown21.png',
    difficulty: 'easy',
    color: 'brown'
  },
]
let cards = [...cardsDataBlue, ...cardsDataBrown, ...cardsDataGreen]; // 51 cards

//random number, max included

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// card shuffling algorithm

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// select ancients

const ancient1 = document.querySelector('.item1');
const ancient2 = document.querySelector('.item2');
const ancient3 = document.querySelector('.item3');
const ancient4 = document.querySelector('.item4');

const veryEasyDifficulty = document.querySelector('.very-easy');
const easyDifficulty = document.querySelector('.easy');
const mediumDifficulty = document.querySelector('.medium');
const difficultDifficulty = document.querySelector('.difficult');
const hardDifficulty = document.querySelector('.hard');

const deckWrapper = document.querySelector('.deck-container');

// stage 1 arrays for very easy diffuculty

const hardArray = cards.filter((card) => card.difficulty === 'hard'); // 14 cards
const easyArray = cards.filter((card) => card.difficulty === "easy"); // 14 cards
const normalArray = cards.filter((card) => card.difficulty === 'normal'); // 23 cards

// the following function creates the necessary deck based on a certain array, needed counts of cards, and needed length
function fillArray(arrayMain, newFilledArray, maxGreenCount, maxBrownCount, maxBlueCount, totalCards) {

  let greenCount = 0;
  let blueCount = 0;
  let brownCount = 0;

  arrayMain.forEach(card => {
    let greenCards = card.color.includes('green');
    let blueCards = card.color.includes('blue');
    let brownCards = card.color.includes('brown');
    if ((card.difficulty === 'easy') && newFilledArray.length < totalCards) {
      if (greenCards && (greenCount < maxGreenCount)) {
        newFilledArray.push(card);
        greenCount++;
      } else if (blueCards && (blueCount < maxBlueCount)) {
        newFilledArray.push(card);
        blueCount++;
      } else if (brownCards && (brownCount < maxBrownCount)) {
        newFilledArray.push(card);
        brownCount++;
      }
    }

    if ((card.difficulty === 'normal') && newFilledArray.length < totalCards) {
      if (greenCards && (greenCount < maxGreenCount)) {
        newFilledArray.push(card);
        greenCount++;
      } else if (blueCards && (blueCount < maxBlueCount)) {
        newFilledArray.push(card);
        blueCount++;
      } else if (brownCards && (brownCount < maxBrownCount)) {
        newFilledArray.push(card);
        brownCount++;
      }
    }

    if ((card.difficulty === 'hard') && newFilledArray.length < totalCards) {
      if (greenCards && (greenCount < maxGreenCount)) {
        newFilledArray.push(card);
        greenCount++;
      } else if (blueCards && (blueCount < maxBlueCount)) {
        newFilledArray.push(card);
        blueCount++;
      } else if (brownCards && (brownCount < maxBrownCount)) {
        newFilledArray.push(card);
        brownCount++;
      }
    }
  });

  shuffle(newFilledArray);
  console.log(newFilledArray)
};

// the following function goes through all the cards in a deck, displays them and updates the counter
function drawCard(newFilledArray) {
  lastCard.style.transform = `translateX(0px)`;

  if (newFilledArray.length > 0) {

    const card = newFilledArray.pop();
    console.log(newFilledArray);
    lastCard.style.background = ``;

    let cardface = card.cardFace;
    lastCard.style.background = `url(${cardface})`;

    // updates the counter
    if (greenCount1.textContent > 0 && cardface.includes(`green`)) {
      greenCount1.textContent--;
    } else if (greenCount2.textContent > 0 && cardface.includes(`green`)) {
      greenCount2.textContent--;
    } else if (greenCount3.textContent > 0 && cardface.includes(`green`)) {
      greenCount3.textContent--;
    } else if (brownCount1.textContent > 0 && cardface.includes(`brown`)) {
      brownCount1.textContent--;
    } else if (brownCount2.textContent > 0 && cardface.includes(`brown`)) {
      brownCount2.textContent--;
    } else if (brownCount3.textContent > 0 && cardface.includes(`brown`)) {
      brownCount3.textContent--;
    } else if (blueCount1.textContent > 0 && cardface.includes(`blue`)) {
      blueCount1.textContent--;
    } else if (blueCount2.textContent > 0 && cardface.includes(`blue`)) {
      blueCount2.textContent--;
    } else if (blueCount3.textContent > 0 && cardface.includes(`blue`)) {
      blueCount3.textContent--;
    }
  } else {
    lastCard.style.transform = `translateX(-260px)`;
    lastCard.style.opacity = `0`;
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    return;
  }
};

// selecting 5 levels of difficulty logic for each Ancient
function selectAncient() {
  const ancientCards = document.querySelectorAll('.ancient-card');
  ancientCards.forEach((ancientCard) => {
    ancientCard.addEventListener('click', () => {
      levelContainer.style.display = `flex`;
      ancientCards.forEach((card) => {
        card.classList.remove("active");
      });
      ancientCard.classList.toggle("active");
      if (ancientCard.classList.contains('active')) {
        veryEasyDifficulty.classList.remove('hidden');
        easyDifficulty.classList.remove('hidden');
        mediumDifficulty.classList.remove('hidden');
        difficultDifficulty.classList.remove('hidden');
        hardDifficulty.classList.remove('hidden');
      } else {
        veryEasyDifficulty.classList.add('hidden');
        easyDifficulty.classList.add('hidden');
        mediumDifficulty.classList.add('hidden');
        difficultDifficulty.classList.add('hidden');
        hardDifficulty.classList.add('hidden');
      }
      // Azathoth decks
      if (ancientCard.classList.contains('item1')) {
        const selectAzathothLevel = [{
          level1: veryEasyDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 2, brown: 4, blue: 0 },
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const easyNormalArray = [...easyArray, ...normalArray];
            let easyShuffledArray = [];

            fillArray(easyNormalArray, easyShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(easyShuffledArray);
            })
          }),
          level2: easyDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 2, brown: 4, blue: 0 },
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;;
              }
            })();

            const easyNormalArray = [...easyArray, ...normalArray];
            let easyShuffledArray = [];

            fillArray(easyNormalArray, easyShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(easyShuffledArray);
            })
          }),
          level3: mediumDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 2, brown: 4, blue: 0 },
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;;
              }
            })();

            const mediumArray = [...easyArray, ...normalArray, ...hardArray];
            let mediumShuffledArray = [];

            fillArray(mediumArray, mediumShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(mediumShuffledArray);
            })
          }),
          level4: difficultDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 2, brown: 4, blue: 0 },
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;;
              }
            })();

            const difficultArray = [...hardArray, ...normalArray];
            let difficultShuffledArray = [];

            fillArray(difficultArray, difficultShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(difficultShuffledArray);
            })
          }),
          level5: hardDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 2, brown: 4, blue: 0 },
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;;
              }
            })();

            const mostDifficultArray = [...hardArray, ...normalArray];
            let mostDifficultShuffledArray = [];

            fillArray(mostDifficultArray, mostDifficultShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(mostDifficultShuffledArray);
            })
          })
        }]
      }
      // Ctulhu decks
      if (ancientCard.classList.contains('item2')) {
        const selectCtulhuLevel = [{
          level1: veryEasyDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 2 },
              { green: 1, brown: 3, blue: 0 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const easyNormalArray = [...easyArray, ...normalArray];
            let easyShuffledArray = [];

            fillArray(easyNormalArray, easyShuffledArray, 4, 9, 2, 15);

            backCard.addEventListener('click', () => {
              drawCard(easyShuffledArray);
            })
          }),
          level2: easyDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 2 },
              { green: 1, brown: 3, blue: 0 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const easyNormalArray = [...easyArray, ...normalArray];
            let easyShuffledArray = [];

            fillArray(easyNormalArray, easyShuffledArray, 4, 9, 2, 15);

            backCard.addEventListener('click', () => {
              drawCard(easyShuffledArray);
            })
          }),
          level3: mediumDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 2 },
              { green: 1, brown: 3, blue: 0 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const mediumArray = [...easyArray, ...normalArray, ...hardArray];
            let mediumShuffledArray = [];

            fillArray(mediumArray, mediumShuffledArray, 4, 9, 2, 15);

            backCard.addEventListener('click', () => {
              drawCard(mediumShuffledArray);
            })
          }),
          level4: difficultDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 2 },
              { green: 1, brown: 3, blue: 0 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const difficultArray = [...hardArray, ...normalArray];
            let difficultShuffledArray = [];

            fillArray(difficultArray, difficultShuffledArray, 4, 9, 2, 15);

            backCard.addEventListener('click', () => {
              drawCard(difficultShuffledArray);
            })
          }),
          level5: hardDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 2 },
              { green: 1, brown: 3, blue: 0 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const mostDifficultArray = [...hardArray, ...normalArray];
            let mostDifficultShuffledArray = [];

            fillArray(mostDifficultArray, mostDifficultShuffledArray, 4, 9, 2, 15);

            backCard.addEventListener('click', () => {
              drawCard(mostDifficultShuffledArray);
            })
          })
        }]
      }

      // Yog-Sothoth decks
      if (ancientCard.classList.contains('item3')) {
        const selectYogSothothLevel = [{
          level1: veryEasyDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const easyNormalArray = [...easyArray, ...normalArray];
            let easyShuffledArray = [];

            fillArray(easyNormalArray, easyShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(easyShuffledArray);
            })
          }),
          level2: easyDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const easyNormalArray = [...easyArray, ...normalArray];
            let easyShuffledArray = [];

            fillArray(easyNormalArray, easyShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(easyShuffledArray);
            })
          }),
          level3: mediumDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const mediumArray = [...easyArray, ...normalArray, ...hardArray];
            let mediumShuffledArray = [];

            fillArray(mediumArray, mediumShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(mediumShuffledArray);
            })
          }),
          level4: difficultDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const difficultArray = [...hardArray, ...normalArray];
            let difficultShuffledArray = [];

            fillArray(difficultArray, difficultShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(difficultShuffledArray);
            })
          }),
          level5: hardDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 0, brown: 2, blue: 1 },
              { green: 2, brown: 3, blue: 1 },
              { green: 3, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const mostDifficultArray = [...hardArray, ...normalArray];
            let mostDifficultShuffledArray = [];

            fillArray(mostDifficultArray, mostDifficultShuffledArray, 5, 9, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(mostDifficultShuffledArray);
            })
          })
        }]
      }

      // Shub-Niggurath decks
      if (ancientCard.classList.contains('item4')) {
        const selectShubNiggurathLevel = [{
          level1: veryEasyDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 3, brown: 2, blue: 1 },
              { green: 2, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const easyNormalArray = [...easyArray, ...normalArray];
            let easyShuffledArray = [];

            fillArray(easyNormalArray, easyShuffledArray, 6, 8, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(easyShuffledArray);
            })
          }),
          level2: easyDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 3, brown: 2, blue: 1 },
              { green: 2, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const easyNormalArray = [...easyArray, ...normalArray];
            let easyShuffledArray = [];

            fillArray(easyNormalArray, easyShuffledArray, 6, 8, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(easyShuffledArray);
            })
          }),
          level3: mediumDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 3, brown: 2, blue: 1 },
              { green: 2, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const mediumArray = [...easyArray, ...normalArray, ...hardArray];
            let mediumShuffledArray = [];

            fillArray(mediumArray, mediumShuffledArray, 6, 8, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(mediumShuffledArray);
            })
          }),
          level4: difficultDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 3, brown: 2, blue: 1 },
              { green: 2, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const difficultArray = [...hardArray, ...normalArray];
            let difficultShuffledArray = [];

            fillArray(difficultArray, difficultShuffledArray, 6, 8, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(difficultShuffledArray);
            })
          }),
          level5: hardDifficulty.addEventListener('click', () => {
            deckContainer.style.display = `flex`;
            currentState.classList.remove('hidden');
            backCard.classList.remove('hidden');
            lastCard.classList.remove('hidden');
            const stages = [
              { green: 1, brown: 2, blue: 1 },
              { green: 3, brown: 2, blue: 1 },
              { green: 2, brown: 4, blue: 0 }
            ];
            (function fillCounter() {
              for (let i = 0; i < 1; i++) {
                greenCount1.textContent = stages[i].green;
                brownCount1.textContent = stages[i].brown;
                blueCount1.textContent = stages[i].blue;
              }

              for (let i = 1; i < 2; i++) {
                greenCount2.textContent = stages[i].green;
                brownCount2.textContent = stages[i].brown;
                blueCount2.textContent = stages[i].blue;
              }

              for (let i = 2; i < 3; i++) {
                greenCount3.textContent = stages[i].green;
                brownCount3.textContent = stages[i].brown;
                blueCount3.textContent = stages[i].blue;
              }
            })();

            const mostDifficultArray = [...hardArray, ...normalArray];
            let mostDifficultShuffledArray = [];

            fillArray(mostDifficultArray, mostDifficultShuffledArray, 6, 8, 2, 16);

            backCard.addEventListener('click', () => {
              drawCard(mostDifficultShuffledArray);
            })
          })
        }]
      }
    });
  });
}

selectAncient();