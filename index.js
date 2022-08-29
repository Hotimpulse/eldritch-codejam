// select ancient card
const diff1 = document.querySelector('.very-easy');
const diff2 = document.querySelector('.easy');
const diff3 = document.querySelector('.medium');
const diff4 = document.querySelector('.difficult');
const diff5 = document.querySelector('.hard');
const backCard = document.querySelector('.deck');
const currentState = document.querySelector('.current-state');
const lastCard = document.querySelector('.last-card');
const reload = document.querySelector('.refresh');
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

reload.addEventListener('click', () => {
    window.location.reload();
})
// arrays

// blue cards

const cardsDataBlue = [
    {
      id: 'blue1',
      cardFace: './assets/MythicCards/blue/blue1.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      cardFace: './assets/MythicCards/blue/blue2.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      cardFace: './assets/MythicCards/blue/blue3.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      cardFace: './assets/MythicCards/blue/blue4.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      cardFace: './assets/MythicCards/blue/blue5.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      cardFace: './assets/MythicCards/blue/blue6.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      cardFace: './assets/MythicCards/blue/blue7.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      cardFace: './assets/MythicCards/blue/blue8.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      cardFace: './assets/MythicCards/blue/blue9.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      cardFace: './assets/MythicCards/blue/blue10.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      cardFace: './assets/MythicCards/blue/blue11.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      cardFace: './assets/MythicCards/blue/blue12.png',
      difficulty: 'normal',
      color:'blue'
    },
  ]

// green cards

  const cardsDataGreen = [
    {
      id: 'green1',
      cardFace: './assets/MythicCards/green/green1.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      cardFace: './assets/MythicCards/green/green2.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      cardFace: './assets/MythicCards/green/green3.png' ,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      cardFace: './assets/MythicCards/green/green4.png' ,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      cardFace: './assets/MythicCards/green/green5.png' ,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      cardFace: './assets/MythicCards/green/green6.png' ,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      cardFace: './assets/MythicCards/green/green7.png' ,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      cardFace: './assets/MythicCards/green/green8.png' ,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      cardFace: './assets/MythicCards/green/green9.png' ,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      cardFace: './assets/MythicCards/green/green10.png' ,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      cardFace: './assets/MythicCards/green/green11.png' ,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      cardFace: './assets/MythicCards/green/green12.png' ,
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      cardFace: './assets/MythicCards/green/green13.png' ,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      cardFace: './assets/MythicCards/green/green14.png' ,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      cardFace: './assets/MythicCards/green/green15.png' ,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      cardFace: './assets/MythicCards/green/green16.png' ,
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      cardFace: './assets/MythicCards/green/green17.png' ,
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      cardFace: './assets/MythicCards/green/green18.png' ,
      difficulty: 'easy',
      color:'green'
    },
  ]  

// brown cards

const cardsDataBrown = [
    {
      id: 'brown1',
      cardFace: './assets/MythicCards/brown/brown1.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      cardFace: './assets/MythicCards/brown/brown2.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      cardFace: './assets/MythicCards/brown/brown3.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      cardFace: './assets/MythicCards/brown/brown4.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      cardFace: './assets/MythicCards/brown/brown5.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      cardFace: './assets/MythicCards/brown/brown6.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      cardFace: './assets/MythicCards/brown/brown7.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      cardFace: './assets/MythicCards/brown/brown8.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      cardFace: './assets/MythicCards/brown/brown9.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      cardFace: './assets/MythicCards/brown/brown10.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      cardFace: './assets/MythicCards/brown/brown11.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      cardFace: './assets/MythicCards/brown/brown12.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      cardFace: './assets/MythicCards/brown/brown13.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      cardFace: './assets/MythicCards/brown/brown14.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      cardFace: './assets/MythicCards/brown/brown15.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      cardFace: './assets/MythicCards/brown/brown16.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      cardFace: './assets/MythicCards/brown/brown17.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      cardFace: './assets/MythicCards/brown/brown18.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      cardFace: './assets/MythicCards/brown/brown19.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      cardFace: './assets/MythicCards/brown/brown20.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      cardFace: './assets/MythicCards/brown/brown21.png',
      difficulty: 'easy',
      color:'brown'
    },
  ]
let cards = cardsDataBlue.concat(cardsDataGreen, cardsDataBrown);
// const blueCommonHardCards = cards.filter(
//     (card) => card.color === "blue" && card.type !== "easy"
//   );

function selectDeck() {
    document.querySelectorAll('.ancient-card').forEach((ancients) => {
        ancients.addEventListener('click', function(e) {
            e.target.classList.toggle("active");
            diff1.classList.toggle('hidden');
            diff2.classList.toggle('hidden');
            diff3.classList.toggle('hidden');
            diff4.classList.toggle('hidden');
            diff5.classList.toggle('hidden');
        })
    })
}
selectDeck();

// select ancients

const ancient1 = document.querySelector('.item1');
const ancient2 = document.querySelector('.item2');
const ancient3 = document.querySelector('.item3');
const ancient4 = document.querySelector('.item4');

function setCounter () {
    ancient1.addEventListener('click', () => {
        greenCount1.textContent = 1;
        brownCount1.textContent = 2;
        blueCount1.textContent = 1;
        greenCount2.textContent = 2;
        brownCount2.textContent = 3;
        blueCount2.textContent = 1;
        greenCount3.textContent = 2;
        brownCount3.textContent = 4;
        blueCount3.textContent = 0;
    });
    ancient2.addEventListener('click', () => {
        greenCount1.textContent = 0;
        brownCount1.textContent = 2;
        blueCount1.textContent = 2;
        greenCount2.textContent = 1;
        brownCount2.textContent = 3;
        blueCount2.textContent = 0;
        greenCount3.textContent = 3;
        brownCount3.textContent = 4;
        blueCount3.textContent = 0;
    });
    ancient3.addEventListener('click', () => {
        greenCount1.textContent = 0;
        brownCount1.textContent = 2;
        blueCount1.textContent = 1;
        greenCount2.textContent = 2;
        brownCount2.textContent = 3;
        blueCount2.textContent = 1;
        greenCount3.textContent = 3;
        brownCount3.textContent = 4;
        blueCount3.textContent = 0;
    });
    ancient4.addEventListener('click', () => {
        greenCount1.textContent = 1;
        brownCount1.textContent = 2;
        blueCount1.textContent = 1;
        greenCount2.textContent = 3;
        brownCount2.textContent = 2;
        blueCount2.textContent = 1;
        greenCount3.textContent = 2;
        brownCount3.textContent = 4;
        blueCount3.textContent = 0;
    });
};
setCounter();

// select difficulty level

function changeLevel() {

    diff1.addEventListener('click', () => {
        diff1.classList.toggle('active');
        currentState.classList.toggle('hidden');
        backCard.classList.remove('hidden');
        const veryEasyArr = cards.filter(
            (card) => card.difficulty === 'easy' || card.difficulty === 'normal'
          ); 
        function changeLastCard() {      
            let fullDeck = getRandomNum(1, 38);
            backCard.addEventListener('click', () => {
                lastCard.classList.remove('hidden');
                lastCard.style.backgroundImage = `url(${veryEasyArr[fullDeck].cardFace})`;
        
                // if (lastCard.style.backgroundImage.includes('green')) {
                //     greenCount1.textContent = greenCount1.textContent - 1;
                // }
                // if (lastCard.style.backgroundImage.includes('blue')) {
                //     blueCount1.textContent = blueCount1.textContent - 1;
                // }
                // if (lastCard.style.backgroundImage.includes('brown')) {
                //     brownCount1.textContent = brownCount1.textContent - 1;
                // }
            })       
        };
        function getNewCardStage() {
            backCard.addEventListener('click', () => {
                getNewCardStage();
            });
            changeLastCard();
        }
        getNewCardStage();

    })
    diff2.addEventListener('click', () => {
        diff2.classList.toggle('active');
        currentState.classList.toggle('hidden');
        backCard.classList.remove('hidden');
        const easyArr = cards.filter(
            (card) => card.difficulty !== 'hard'
          );
          function changeLastCard() {      
              let fullDeck = getRandomNum(1, 38);
              backCard.addEventListener('click', () => {
                  lastCard.classList.remove('hidden');
                  lastCard.style.backgroundImage = `url(${easyArr[fullDeck].cardFace})`;
          
                  if (lastCard.style.backgroundImage.includes('green')) {
                      greenCount1.textContent = greenCount1.textContent - 1;
                  }
                  if (lastCard.style.backgroundImage.includes('blue')) {
                      blueCount1.textContent = blueCount1.textContent - 1;
                  }
                  if (lastCard.style.backgroundImage.includes('brown')) {
                      brownCount1.textContent = brownCount1.textContent - 1;
                  }
              })       
          };
          function getNewCardStage() {
              backCard.addEventListener('click', () => {
                  getNewCardStage();
              });
              changeLastCard();
          }
          getNewCardStage();
    })
    diff3.addEventListener('click', () => {
        diff3.classList.toggle('active');
        currentState.classList.toggle('hidden');
        backCard.classList.remove('hidden');
          function changeLastCard() {      
              let fullDeck = getRandomNum(1, 52);
              backCard.addEventListener('click', () => {
                  lastCard.classList.remove('hidden');
                  lastCard.style.backgroundImage = `url(${cards[fullDeck].cardFace})`;
          
                  if (lastCard.style.backgroundImage.includes('green')) {
                      greenCount1.textContent = greenCount1.textContent - 1;
                  }
                  if (lastCard.style.backgroundImage.includes('blue')) {
                      blueCount1.textContent = blueCount1.textContent - 1;
                  }
                  if (lastCard.style.backgroundImage.includes('brown')) {
                      brownCount1.textContent = brownCount1.textContent - 1;
                  }
              })       
          };
          function getNewCardStage() {
              backCard.addEventListener('click', () => {
                  getNewCardStage();
              });
              changeLastCard();
          }
          getNewCardStage();
        
    })
    diff4.addEventListener('click', () => {
        diff4.classList.toggle('active');
        currentState.classList.toggle('hidden');
        backCard.classList.remove('hidden');
        const difficultArr = cards.filter(
            (card) => card.difficulty !== 'easy'
          ); 
        function changeLastCard() {      
            let fullDeck = getRandomNum(1, 38);
            backCard.addEventListener('click', () => {
                lastCard.classList.remove('hidden');
                lastCard.style.backgroundImage = `url(${difficultArr[fullDeck].cardFace})`;
        
                if (lastCard.style.backgroundImage.includes('green')) {
                    greenCount1.textContent = greenCount1.textContent - 1;
                }
                if (lastCard.style.backgroundImage.includes('blue')) {
                    blueCount1.textContent = blueCount1.textContent - 1;
                }
                if (lastCard.style.backgroundImage.includes('brown')) {
                    brownCount1.textContent = brownCount1.textContent - 1;
                }
            })       
        };
        function getNewCardStage() {
            backCard.addEventListener('click', () => {
                getNewCardStage();
            });
            changeLastCard();
        }
        getNewCardStage();  
    })
    diff5.addEventListener('click', () => {
        diff5.classList.toggle('active');
        currentState.classList.toggle('hidden');
        backCard.classList.remove('hidden');
        const hardArr = cards.filter(
            (card) => card.difficulty === 'hard'
          );
          console.log(hardArr)  
          function changeLastCard() {      
              let fullDeck = getRandomNum(1, 15);
              backCard.addEventListener('click', () => {
                  lastCard.classList.remove('hidden');
                  lastCard.style.backgroundImage = `url(${hardArr[fullDeck].cardFace})`;
          
                  if (lastCard.style.backgroundImage.includes('green')) {
                      greenCount1.textContent = greenCount1.textContent - 1;
                  }
                  if (lastCard.style.backgroundImage.includes('blue')) {
                      blueCount1.textContent = blueCount1.textContent - 1;
                  }
                  if (lastCard.style.backgroundImage.includes('brown')) {
                      brownCount1.textContent = brownCount1.textContent - 1;
                  }
              })       
          };
          function getNewCardStage() {
              backCard.addEventListener('click', () => {
                  getNewCardStage();
              });
              changeLastCard();
          }
          getNewCardStage();    
    })
}
changeLevel();

//--------------------------randomizer

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum;
}

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