let button = document.querySelector('#btn')
let container = document.querySelector('#container')
let inputBtn = document.querySelector('#inputBtn')
let userChoice


inputBtn.addEventListener('click', () => {
    userChoice = Number(prompt('Enter a value: '))
    console.log(userChoice)
    console.log(typeof (userChoice))
})
button.addEventListener('click', () => {
    for (let i = 0; i < userChoice; i++) {
        let row = document.createElement('div')
        row.classList.add('row')

        for (let j = 0; j < userChoice; j++) {
            let squares = document.createElement('div')
            squares.classList.add('squares')


            squares.addEventListener('mouseover', () => {
                squares.classList.add('black')
                console.log("Hovered")
            })
            row.appendChild(squares)
        }
        container.appendChild(row)
    }
})



































// let button = document.querySelector('#btn')
// let main = document.querySelector('#main')


// button.addEventListener('click', () => {
//     for (let i = 0; i < 16; i++){
//         let row = document.createElement('div')
//         row.classList.add('row')

//         for (let j = 0; j < 16; j++){
//             let squares = document.createElement('div')
//             squares.classList.add('squares')

//             squares.addEventListener('mouseover', () => {
//                 console.log('hovered')
//                 squares.classList.add('black')
//             })
//             row.appendChild(squares)
//         }
//         main.appendChild(row)
//         }
//     })



