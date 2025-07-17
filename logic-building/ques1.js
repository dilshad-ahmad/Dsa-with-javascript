//Find the valid voter candidate 
let ans = Number(prompt("what is your age "));
if (isNaN(ans)) {
    console.log("Wrong Input ")
}

else if (ans >= 18) {
    console.log("you can vote ")
} else {
    console.log("you can not vote")
}