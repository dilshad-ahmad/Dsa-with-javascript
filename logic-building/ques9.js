// Guess the number? 

let random = Math.floor(Math.random()*100) + 1;

let guess = -1 ;
while (guess !== random) {
    guess = Number(prompt("Guess the number ")) 
    if(isNaN(guess) || guess < 1 || guess > 100 ) {
        console.log("Try  again between  1 - 100 ")
        continue
    } if (guess > random){
        console.log("too high , try again ")
    } else  if (guess < random ) {
        console.log("too low , try again")
    } else {
        console.log("congratulation and the number was " ,guess)
    }
}
