let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt")
const input=document.querySelector("#guessField")
const prevGuess=document.querySelector(".guesses")
const rem=document.querySelector(".lastResult")
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p=document.createElement("p") 
let prevGuesses=[]
let newGuess=1
let playGame=true
if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess=parseInt(input.value)
        validateGues(guess)
    })
}

const validateGues=(guess)=>{
    if(isNaN(guess)){
        alert("Please enter a number")
    }
    else if(guess<1 || guess>100){
        alert("Please enter a number between 1 and 100")
    }
    else{
        prevGuesses.push(guess)
        if(newGuess===11){
            disguess(guess)
            display(`Game Over, Random no. was ${randomNumber}`)
            endGame()
        }
        else{
            disguess(guess) 
            checkGuess(guess)
        }
    }
}

const checkGuess=(guess)=>{
    if (guess === randomNumber) {
        display(`You guessed it right`);
        endGame();
      } else if (guess < randomNumber) {
        display(`Number is TOOO low`);
      } else if (guess > randomNumber) {
        display(`Number is TOOO High`);
      }

}
const disguess=(guess)=>{
    input.value=""
    prevGuess.innerHTML+=`${guess}, `
    newGuess++
    rem.innerHTML=`${11-newGuess} guesses left`


}
const display=(message)=>{
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}
const endGame=()=>{
    input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
    

const newGame=()=>{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuesses = [];
      numGuess = 1;
      prevGuess.innerHTML = '';
      rem.innerHTML = `${11 - numGuess} `;
      input.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}