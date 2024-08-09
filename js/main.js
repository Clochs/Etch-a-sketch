let button = document.querySelector('#btn')
let main = document.querySelector('#main')


// button.addEventListener('click', () => {
    for (let i = 0; i < 100 * 100; i++) {
        let squares = document.createElement('div')
        squares.classList.add('squares')
        main.appendChild(squares)
    
    squares.addEventListener('mouseover', () => {
        console.log('hovered')
        squares.classList.add('black')

    })
}

// })



