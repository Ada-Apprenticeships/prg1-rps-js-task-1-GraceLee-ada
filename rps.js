function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  };
  if (choices[player1].includes(player2) === true) {
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

//console.log(rockPaperScissors("paper", "lizard"));

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}


//Objects with strengths and weaknesses
// let choices = {
//   "rock": ["scissors", "lizard", "spock", "paper"],
//   "paper":["rock", "spock", "scissors", "lizard"],
//   "scissors": ["paper", "lizard", "spock", "rock"],
//   "lizard": ["paper", "spock", "rock", "scissors"],
//   "spock": ["scissors", "rock", "lizard", "paper"],
// };

//Only code that works
// if (player1 === player2) {
//   return "draw";
// };
// switch (player1) {
//   case "rock":
//     if (player2 === "paper" || player2 === "spock") {
//       return "player2"
//     } else {
//       return "player1";
//     }
//   case "paper":
//     if (player2 === "scissors" || player2 ==="lizard") {
//       return "player2";
//     }else {
//       return "player1";
//     }
//   case "scissors":
//     if (player2 === "rock" || player2 ==="spock") {
//       return "player2";
//     }else {
//       return "player1";
//     }
//   case "lizard":
//     if (player2 === "rock" || player2 ==="scissors") {
//       return "player2";
//     }else {
//       return "player1";
//     }
//   case "spock":
//     if (player2 === "lizard" || player2 ==="paper") {
//       return "player2";
//     }else {
//       return "player1";
//     }
// };
// };


// //if...else method
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
//   } else if (player1 === "lizard") {
//     if (player2 === "rock") {
//       return "player2";
//     };
//     return "player1";
//   } else if (player1 === "spock") {
//     if (player2 === "paper") {
//       return "player2";
//     };
//     return "player1";
//   }; 
// };

// //switch...case method
// switch (player1) {
// case "rock":
//   if (player2 === "paper" || player2 ==="spock") {
//     return "player2"
//   };
//   return "player1";
// case "paper":
//   if (player2 === "scissors" || player2 ==="lizard") {
//     return "player2";
//   };
//   return "player1";
// case "scissors":
//   if (player2 === "rock" || player2 ==="spock") {
//     return "player2";
//   };
//   return "player1";
// case "lizard":
//   if (player2 === "rock" || player2 ==="scissors") {
//     return "player2";
//   };
//   return "player1";
// case "spock":
//   if (player2 === "lizard" || player2 ==="paper") {
//     return "player2";
//   };
//   return "player1";
// };

// //Idea 1

