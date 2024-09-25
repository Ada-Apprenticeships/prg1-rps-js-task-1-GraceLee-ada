function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  };
  switch (player1) {
    case "rock":
      if (player2 === "paper" && "spock") {
        return "player2"
      };
      return "player1";
    case "paper":
      if (player2 === "scissors" && "lizard") {
        return "player2";
      };
      return "player1";
    case "scissors":
      if (player2 === "rock" && "spock") {
        return "player2";
      };
      return "player1";z
    case "lizard":
      if (player2 === "rock" && "scissors") {
        return "player2";
      };
      return "player1";
    case "spock":
      if (player2 === "lizard" && "paper") {
        return "player2";
      };
      return "player1";
  };
};

// if (player1 === player2) {
//   return "draw";
// } else {
//   if (player1 === "rock") {
//     if (player2 === "paper") {
//       return "player2";
//     };
//     return "player1";
//   } else if (player1 === "paper") {
//       if (player2 === "scissors") {
//         return "player2";
//       };
//       return "player1";
//   } else if (player1 === "scissors") {
//       if (player2 === "rock") {
//         return "player2";
//       };
//       return "player1";
//   } 
// };

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}