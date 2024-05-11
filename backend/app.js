const express = require('express');
const { generateDeck, pickRandomCards } = require('./deck')
const app = express();
const port = 3000;

let turn = Math.ceil(Math.random() * 2);


// Function to generate the deck of cards
const deck = generateDeck()

// Endpoint to get the deck of cards
app.get('/deck', (req, res) => {
  const deck = generateDeck();
  res.json(deck);
});

app.get('/draw', (req, res) => {
    const randomCards = pickRandomCards(deck, 5);
    res.json({"cards": randomCards, "turn": turn});
    turn++;
    if (turn > 2) turn = 1;
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
