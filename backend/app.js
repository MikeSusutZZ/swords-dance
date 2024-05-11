const express = require('express');
const { generateDeck, pickRandomCards } = require('./deck')
const app = express();
const port = process.env.PORT || 3000;

let hand = pickRandomCards(deck, 5);

let turn = Math.ceil(Math.random() * 2);

let turn_check = false;


// Function to generate the deck of cards
const deck = generateDeck()

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

// Endpoint to get the deck of cards
app.get('/deck', (req, res) => {
  const deck = generateDeck();
  res.json(deck);
});

app.get('/turn', (req, res) => {
    if (turn_check){
        turn++;
        if (turn > 2) turn = 1;
        hand = pickRandomCards(deck, 5);
        turn_check= false
    } else turn_check = true
  });

app.get('/hand', (req, res) => {
    res.json({"cards": hand, "turn": turn});
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
