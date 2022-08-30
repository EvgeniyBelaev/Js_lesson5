let topLetters = document.querySelector('#top-letter')
let bottomLetters = document.querySelector('#bottom-letter')
let field = document.querySelector('#squares')

function designations() {
    let l = [...'abcdefgh']

    for (let i of l) {
        topLetters.innerHTML += `<span class="one-letter">${i}</span>`
        bottomLetters.innerHTML += `<span class="one-letter">${i}</span>`
    }
}

function gameField() {
    let firstString = ''
    let secondString = ''
    let blackSquares = `<div class="black-scuares" id="black-scuares"></div>`
    let whiteSquares = `<div class="white-scuares" id="white-scuares"></div>`
    let sqr = document.querySelector('#squares')
    for (let j = 1; j <= 4; j++) {        
        let f = ''
        f += whiteSquares
        f += blackSquares
        firstString += f

        let s =''
        s += blackSquares
        s += whiteSquares
        secondString += s       
    }

    let x = 8
    
    for (let k = 1; k <= 4; k++) {
        
        let fs = `<div class="one-string" id="first-srring"><span class="digit">${x}</span>${firstString}<span class="digit">${x}</span></div>`
        let ss = `<div class="one-string" id="first-srring"><span class="digit">${x - 1}</span>${secondString}<span class="digit">${x - 1}</span></div>`
        
        sqr.innerHTML += `${fs} \n ${ss} \n`
        x -= 2
    }
    
    
}

designations()
gameField()