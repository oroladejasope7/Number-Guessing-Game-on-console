let playerName = prompt("Enter player name:- ");
console.log("WELCOME TO THE NUMBER GUESSING GAME,"+playerName+"!!!")


function range(min, max) {
  let genNumber = Math.round(Math.random() * (max - min) + min);
  return genNumber;
}
range();
let generatedNumber = range(1, 2);
console.log("A number has been generated. Guess the generated number correctly to up your level!");

let guessNumber = prompt("Guess the generated number? ")
console.log(guessNumber);
let point = 0;
function guess(a, b) {

  if (guessNumber == generatedNumber) {
    point++;
    console.log("Amazing!You guessed right! \nYou have been moved up by a level.")
  } else {
    point = point + 0 ;
    console.log("Sorry! That was a wrong guess. Do try again")
  }
  return point;
}

console.log(guess(guessNumber));
console.log("Your point is " + point)

console.log("Welcome to stage 2");
range(1, 3);
console.log("generatedNumber is " + range(1, 3));

let guessSecondNumber = prompt("guess the generated number? ")
console.log(guessSecondNumber);

console.log(guess(guessSecondNumber));
console.log("Your point is " + point)
