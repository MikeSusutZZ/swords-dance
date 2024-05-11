const generateDeck = () => {
    const deck = [];
    const ranges = [-2, -1, 0, 1, 2];
    const speeds = [1, 2, 3, 4, 5];
  
    ranges.forEach(x => {
      ranges.forEach(y => {
        speeds.forEach(speed => {
          let multiplier = 1;
  
          if (x >= -1 && x <= 1 && y >= -1 && y <= 1) {
            multiplier *= 2;
          }
  
          if (y >= 0){
              multiplier *= 2
          }
  
          if (speed >= 2 && speed <= 4) {
            multiplier *= 3;
          }
  
          if (x == 0 && y == 0) {
              multiplier = 2
              speed = 1
          }
  
          for (let i = 0; i < multiplier; i++) {
            deck.push({ x, y, speed });
          }
        });
      });
    });
  
    return deck;
  };

  const pickRandomCards = (deck, count) => {
    const shuffledDeck = [...deck].sort(() => 0.5 - Math.random());
    return shuffledDeck.slice(0, count);
  };

  module.exports = {generateDeck, pickRandomCards};