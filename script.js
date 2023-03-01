'use strict';

//---------------Salecting Elements---------------//

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


//---------Starting Condition------------  //


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true ;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0 ;
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');   
}

//--------------Rolling dice functionality------------------//

btnRoll.addEventListener('click',function(){
    if (playing)
    {
        // 1. Genrating a random dice
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceEl.classList.remove('hidden');


        // 2. Display Dice
        diceEl.src = `dice-${dice}.png`;


        // 3. Check for rolled 1: 
        if (dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
        } else {
            // if yes, switch to next player; 

            switchPlayer();

            //  document.getElementById(`current--${activePlayer}`).textContent = 0 ;
            //  activePlayer = activePlayer === 0 ? 1 : 0 ;
            //  currentScore = 0;
            //  player0El.classList.toggle('player--active');
            //  player1El.classList.toggle('player--active');
            
        }   
    
    }      
})

btnHold.addEventListener('click', function(){
    if (playing)
    {
        //add current score to active player's score

        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent = 0 ;
        currentScore = 0;


        if (scores[activePlayer] >= 100){
            // finish the game
            playing = false ;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner') ;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            // switch the player
        switchPlayer();

        }
    }   
        

})

btnNew.addEventListener('click' , function() {
    scores = [0, 0];
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.add('player--active');
    document.querySelector(`.player--0`).classList.remove('player--winner') ;
    document.querySelector(`.player--1`).classList.remove('player--winner') ;
    document.querySelector(`.player--0`).classList.add('player--active');

    diceEl.classList.add('hidden');
    playing = true;

})





