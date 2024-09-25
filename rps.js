function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  } else {
    if (player1 === "rock") {
      if (player2 === "paper") {
        return "player2";
      };
      return "player1";
    } else if (player1 === "paper") {
        if (player2 === "scissors") {
          return "player2";
        };
        return "player1";
    } else {
        if (player2 === "scissors") {
          return "player2";
        };
        return "player1";
    }
  };
};


console.log(rockPaperScissors("paper","paper"));






// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}