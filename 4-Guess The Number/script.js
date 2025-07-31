let randnum = Math.floor(Math.random()*100 +1)

const submit = document.querySelector('#subt')
const input = document.querySelector('#guessfield')
const guessused = document.querySelector('.guesses')
const remain = document.querySelector('.lastresult')
const hint = document.querySelector('.loworhi')
const startover = document.querySelector('#data')

const p = document.createElement('p')

let previous = []
let numguess = 1

let playgame = true

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(input.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert('Please enter a Valid Number (1-100)')
    }
    else {
        previous.push(guess)
        if(numguess===10){
            displayguess(guess)
            displaymessage(`Game Over, Random number was ${randnum}`)
            endgame()
        }
        else {
            displayguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randnum){
        displaymessage("Congrats!! You guessed it right")
        endgame()
    }
    else if(guess<randnum){
        displaymessage("Number is too low")
    }
    else displaymessage("Number is too high")
}

function displayguess(guess){
    input.value = ''
    guessused.innerHTML += `${guess}  `
    numguess++
    remain.innerHTML = `${11-numguess}`
}

function displaymessage(mssg){
    hint.innerHTML = `<h2>${mssg}</h2>`
}
 
function endgame(){
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newgame">New Game</button>`
    startover.appendChild(p)
    document.querySelector('#newgame').style.color = 'black';
    playgame = false;
    newgame();
}

function newgame(){
    const button =  document.querySelector('#newgame')
    button.addEventListener('click', function(e){
        randnum = parseInt(Math.random()*100 +1)
        previous = []
        numguess = 1
        guessused.innerHTML = ''
        remain.innerHTML = `${11-numguess}`
        hint.innerHTML = ''
        input.removeAttribute('disabled')
        startover.removeChild(p)
        playgame = true
    })
}