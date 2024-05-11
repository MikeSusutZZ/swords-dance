const express = require('express');
const { generateDeck, pickRandomCards } = require('./deck')
const app = express();
const port = 3000;

// Function to generate the deck of cards
const deck = generateDeck()

// Endpoint to get the deck of cards
app.get('/deck', (req, res) => {
  const deck = generateDeck();
  res.json(deck);
});

app.get('/draw', (req, res) => {
    const randomCards = pickRandomCards(deck, 5);
    res.json(randomCards);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
