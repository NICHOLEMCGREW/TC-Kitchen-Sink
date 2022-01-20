console.log("Guesing Game!");

let guess;
let myNumber = Math.floor(Math.random() * 100) + 1;

while (guess != myNumber) {

    guess = parseInt(window.prompt("Guess a number between 1 and 100!"));

    if (!isNaN(guess)) {

    if (guess == myNumber) {
        alert("Congratulations!");

    } else if (guess < myNumber) {
        alert("too low!");

    } else {
        alert("too high!");
    }
} else {
    alert("You didn't give me a valid number between 1 and 100");
    }
}
