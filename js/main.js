let inputBtn = document.querySelector('#input-btn')
let buildBtn = document.querySelector('#build-btnk')
let container = document.querySelector('#container')
let userChoice
let containerSize = 300
let squareSize = containerSize / userChoice 

// IF inputBtn is clicked
//      prompt the user for the grid size
// IF grid size is less than 0 or greater than 100
//      prompt the user again
// INIT a variable with the user input
inputBtn.addEventListener('click', () => {
    userChoice = Number(prompt("Enter a number between 1 and 100: "))
    while (userChoice < 1 || userChoice > 100) {
        userChoice = Number(prompt("Try again: "))
    }
})

buildBtn.addEventListener('click', () => {
    
})

