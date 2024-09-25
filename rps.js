function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  } else if (choices[player1].includes(player2) === true) {
      return "player1";
    };
    return "player2";
};

let choices = {
  "rock": ["scissors", "lizard"],
  "paper":["rock", "spock"],
  "scissors": ["paper", "lizard"],
  "lizard": ["paper", "spock"],
  "spock": ["scissors", "rock"],
};

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};