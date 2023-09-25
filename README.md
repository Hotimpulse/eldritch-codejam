# Eldritch Horror Coding Task

## Description of the task
- You have to code a card-shuffling helper app for a board game called "Eldritch Horror"
- You need to create a card shuffling algorithm for various card decks to be used in the board game

## Algorithm details
A lot of board game enthusiasts have heard of "Eldritch Horror" as one of the most exciting board games out there. 
Although the game is great, there is a catch: the preparation for the game takes about 40 - 60 minutes.
One of the most difficult tasks is the creation of "myth decks".

To create a myth deck, you would need 3 types of cards: blue, brown and green cards (the type can be determined by the color on top of the card);

There are also varying difficulties among the cards (this is not tied to the color of cards):
1. the hard level cards have tentacles around the top of the card (refer to the blue card below);
2. the normal level cards do not have any signs like the brown card in the example below;
3. the easy level cards have snowflakes around the names at the top like those on the green card;

`Examples of cards:`

![Blue card](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/blue/blue2.png?raw=true)
![Brown card](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/brown/brown1.png?raw=true)
![Green card](https://github.com/Luffi2539/eldritch-codejam/blob/main/assets/MythicCards/green/green1.png?raw=true)

***The card assets and data are provided in the repo.***

The first step is to select an ancient card that is going to determine the deck you'd need to prepare. 
You will see the amount of green, brown and blue cards you would need for your deck at each stage of the game on an **"Ancient card".**
**(# of cards for each stage is outlined on an Ancient card, lower left corner)**

`Example of what an Ancient card looks like:`

![Ancient](https://user-images.githubusercontent.com/43149261/172723651-a9c7e003-96b7-44e4-944a-54ad12755fbd.png)

The deck is determined by the total counts of all of the three colors during the 3 stages of the shuffling phase.

According to this Azathoth card, you will need the following number of cards (total for all stages):
Green cards: `5`
Blue cards: `2`
Brown cards: `9`

Once you know the amount of cards, you need to determine the difficulty level of the game: 

### `Easiest level: the deck is populated with snowflake cards ("easy"* cards); if there aren't enough snowflake cards, take "normal"* cards`
### `Easy level: remove all cards with tentacles ("hard"* cards)`
### `Medium level: no changes to the deck`
### `High level: remove all snowflake cards from the deck`
### `Highest level: the deck is populated with tentacle cards; if there aren't enough cards, take "normal" cards`

(*) ***Easy, normal, hard => refers to the difficulty attribute of each card's  object. Here is an example:***
`{
    id: 'blue3',
    cardFace: './assets/MythicCards/blue/blue3.png',
    difficulty: 'easy',
    color:'blue'
  },`


**Example of how to approach the task:** 

Let's say we picked the easiest level of difficulty. This means we need 9 brown cards, but there are only 5 brown snowflake cards. We take those 5 and draw 4 random cards from the normal deck.

When we have the necessary amount of cards, we need to create mini decks for each stage. 

To achieve that we need to shuffle the selected cards separately. We should get three small decks with random green, blue and brown cards.

We then select the needed amount of cards for each stage:

**Stage 1 requires 1 green, 2 brown and 1 blue card.**

We select 1 green card, 2 brown cards and 1 blue card from the deck at random. We then shuffle the 4 cards we get.

We repeat the same steps for each stage 

We stack the decks that we get so that we get the 1st stage cards first, followed by the 2nd and 3rd stages respectively.


Here's the link to a [demo of the app](https://hotimpulse.github.io/eldritch-codejam/)

## Working files
Main branch contains 2 folders called assets and data, which contain images of the cards and data you will need to complete this task yourself.

You can fork this repo and copy the files that way.

## Completion Requirements
1. You need to make at least one Ancient available for the game (there are 4 in total) +5-20 points (5 points per Ancient card)
2. You need to provide at least one level of difficulty (there are 5 in total) +5-25 points (5 points per level of difficulty)
3. Decks are made according to the game's rules (+40 points)
4. A tracker/counter for the deck's card (+20 points)

`Max score: 105 points`

## If this task is too difficult
Pick one Ancient and medium level difficulty to focus on the task with a static deck. 
Then progress by implementing various levels / additional Ancient cards.

## Who came up with this?
This task was created by [Luffi2539](https://github.com/Luffi2539) as a part of one of the RS-School courses. All credit goes to Luffi and the RS-School organization.
