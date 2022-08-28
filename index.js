// select ancient card

selectDeck1();

function selectDeck1() {
    const mediumLevel = document.querySelector('.medium')
    document.querySelectorAll('.ancient-card').forEach((ancients) => {
        ancients.addEventListener('click', function(e) {
            e.target.classList.toggle("active");
            mediumLevel.classList.toggle('hidden');
        })
    })
}

// select difficulty level
changeLevelColor();

const diff1 = document.querySelector('.very-easy');
const diff2 = document.querySelector('.easy');
const diff3 = document.querySelector('.medium');
const diff4 = document.querySelector('.difficult');
const diff5 = document.querySelector('.hard');
const backCard = document.querySelector('.deck');
const currentState = document.querySelector('.current-state');
const lastCard = document.querySelector('.last-card');

function changeLevelColor() {
    const diff1 = document.querySelector('.very-easy');
    const diff2 = document.querySelector('.easy');
    const diff3 = document.querySelector('.medium');
    const diff4 = document.querySelector('.difficult');
    const diff5 = document.querySelector('.hard');

    // diff1.addEventListener('click', () => {
    //     diff1.classList.toggle('active');
    //     currentState.classList.toggle('hidden');
    //     backCard.classList.remove('hidden');
    // })
    // diff2.addEventListener('click', () => {
    //     diff2.classList.toggle('active');
    //     currentState.classList.toggle('hidden');
    //     backCard.classList.remove('hidden');
    // })
    diff3.addEventListener('click', () => {
        diff3.classList.toggle('active');
        currentState.classList.toggle('hidden');
        backCard.classList.remove('hidden');
    })
    // diff4.addEventListener('click', () => {
    //     diff4.classList.toggle('active');
    //     currentState.classList.toggle('hidden');
    //     backCard.classList.remove('hidden');
    // })
    // diff5.addEventListener('click', () => {
    //     diff5.classList.toggle('active');
    //     currentState.classList.toggle('hidden');
    //     backCard.classList.remove('hidden');
    // })
}

//generate deck
let randomNum;
let green1 = document.querySelector('.green1');
let brown1 = document.querySelector('.brown1');
let blue1 = document.querySelector('.blue1');
let green2 = document.querySelector('.green2');
let brown2 = document.querySelector('.brown2');
let blue2 = document.querySelector('.blue2');
let green3 = document.querySelector('.green3');
let brown3 = document.querySelector('.brown3');
let blue3 = document.querySelector('.blue3');

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
}

function changeLastCard() {
    let greenNum = getRandomNum(1, 19);
    let blueNum = getRandomNum(1, 13);
    let brownNum = getRandomNum(1, 21);
    let fullDeck = getRandomNum(1, 51);
    let randomCardArray = cardsDataBlue.concat(cardsDataGreen, cardsDataBrown);
    backCard.addEventListener('click', () => {
        lastCard.classList.remove('hidden');
        lastCard.style.backgroundImage = `url(${randomCardArray[fullDeck].cardFace})`
        // "url('./assets/MythicCards/green/green" + randomCardArray[fullDeck] + ".png')";
    })
};

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


function getNewCard() {
    green1.textContent = 1;
    green1.style.color = "white";
    brown1.textContent = 2;
    brown1.style.color = "white";
    blue1.textContent = 1;
    blue1.style.color = "white";
    green2.textContent = 2;
    green2.style.color = "white";
    brown2.textContent = 5;
    brown2.style.color = "white";
    blue2.textContent = 1;
    blue2.style.color = "white";
    green3.textContent = 2;
    green3.style.color = "white";
    brown3.textContent = 4;
    brown3.style.color = "white";
    blue3.textContent = 0;
    blue3.style.color = "white";

    backCard.addEventListener('click', getNewCard);
    changeLastCard();
}
getNewCard();

const ultimateArray = cardsDataBlue.concat(cardsDataBrown, cardsDataGreen);
console.log(ultimateArray);