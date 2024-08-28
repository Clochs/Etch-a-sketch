// let inputBtn = document.querySelector('#inputBtn')
// let buildBtn = document.querySelector('#buildBtn')
// let container = document.querySelector('#container')
// let userChoice

// inputBtn.addEventListener('click', () => {
//     userChoice = Number(prompt('Enter the number of squares per row/column:'))
//     while (userChoice < 1 || userChoice > 100) {
//         userChoice = Number(prompt('Enter a number between 1 and 100: '))
//     }
// })

// buildBtn.addEventListener('click', () => {
//     // Clear any existing squares
//     container.innerHTML = ''

//     let squareSize = container.clientWidth / userChoice;

//     for (let i = 0; i < userChoice * userChoice; i++) {
//         let squares = document.createElement('div')
//         squares.classList.add('squares')
//         squares.style.width = `${squareSize}px`
//         squares.style.height = `${squareSize}px`

//         squares.addEventListener('mouseover', () => {
//             squares.classList.add('black')
//         })

//         container.appendChild(squares)
//     }
// })






// What do you want the program to do?
// 1. When the choose button is clicked it should prompt user for a grid size.
// 2. The size must be between 1-100 or it should prompt again.
// 3. When the grid button is clicked it should build a X * X grid 
// 4. The grid container should stay the same size no matter user choice.
// 5. When the grid is moused over the squares should turn black

// What steps do you take to impliment it?
// 1. INIT buttons, container and user choice variables 
// 2. INIT event listener for inputBtn to prompt user for grid size
//      IF size is less than 1 or greater than 100
//          prompt again
//      ENDIF
// 3. INIT event listener for buildBtn to build grid
// make a loop to count up to userChoice * userChoice adding a grid square for each iteration 
// 4. INIT squareSize clientWidth / userChoice
// 5. build the square using js style
// 6. INIT hover effect to turn squares black


let inputBtn = document.querySelector('#inputBtn')
let buildBtn = document.querySelector('#buildBtn')
let container = document.querySelector('#container')
let squareSize = container.clientWidth / userChoice
let userChoice



